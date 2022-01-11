import faker from 'faker'
import * as Helper from '../utils/helpers'
import * as FormHelper from '../utils/form-helpers'
import * as Http from '../utils/http-mock'

const path = /signup/
export const mockEmailInUseError = (): void => Http.mockForbiddenError(path, 'POST')
export const mockUnexpectedError = (): void => Http.mockServerError(path, 'POST')
export const mockSuccess = (): void => {
  cy.fixture('account').then(account => {
    return Http.mockOk('POST', path, account)
  })
}

const populateFields = (): void => {
  cy.getByTestId('name').focus().type(faker.name.findName())
  cy.getByTestId('email').focus().type(faker.internet.email())
  const password = faker.random.alphaNumeric(7)
  cy.getByTestId('password').focus().type(password)
  cy.getByTestId('passwordConfirmation').focus().type(password)
}

const simulateValidSubmit = (): void => {
  populateFields()
  cy.getByTestId('submit').click()
}

describe('SignUp', () => {
  beforeEach(() => {
    cy.visit('signup')
  })

  it('Should load with correct initial state', () => {
    cy.getByTestId('name').should('have.attr', 'readOnly')
    FormHelper.testInputStatus('name', 'Campo Obrigatório')
    cy.getByTestId('email').should('have.attr', 'readOnly')
    FormHelper.testInputStatus('email', 'Campo Obrigatório')
    cy.getByTestId('password').should('have.attr', 'readOnly')
    FormHelper.testInputStatus('password', 'Campo Obrigatório')
    cy.getByTestId('passwordConfirmation').should('have.attr', 'readOnly')
    FormHelper.testInputStatus('passwordConfirmation', 'Campo Obrigatório')
    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present erro state if form is invalid', () => {
    cy.getByTestId('name').focus().type(faker.random.alphaNumeric(3))
    FormHelper.testInputStatus('name', 'Valor inválido')
    cy.getByTestId('email').focus().type(faker.random.word())
    FormHelper.testInputStatus('email', 'Valor inválido')
    cy.getByTestId('password').focus().type(faker.random.alphaNumeric(4))
    FormHelper.testInputStatus('password', 'Valor inválido')
    cy.getByTestId('passwordConfirmation').focus().type(faker.random.alphaNumeric(3))
    FormHelper.testInputStatus('passwordConfirmation', 'Valor inválido')
    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should presents valid state if form is valid', () => {
    cy.getByTestId('name').focus().type(faker.name.findName())
    FormHelper.testInputStatus('name')
    cy.getByTestId('email').focus().type(faker.internet.email())
    FormHelper.testInputStatus('email')
    const password = faker.random.alphaNumeric(5)
    cy.getByTestId('password').focus().type(password)
    FormHelper.testInputStatus('password')
    cy.getByTestId('passwordConfirmation').focus().type(password)
    FormHelper.testInputStatus('passwordConfirmation')
    cy.getByTestId('submit').should('not.have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should presents EmailInUseError on 403', () => {
    mockEmailInUseError()
    simulateValidSubmit()
    FormHelper.testMainError('Este email já está em uso')
    Helper.testUrl('/signup')
  })

  it('Should presents UnexpectedError on any other error', () => {
    mockUnexpectedError()
    simulateValidSubmit()
    FormHelper.testMainError('Algo de errado aconteceu. Tente novamente em breve')
    Helper.testUrl('/signup')
  })

  it('Should presents save accessToken if valid credentials are provided', () => {
    mockSuccess()
    simulateValidSubmit()
    cy.getByTestId('main-error').should('not.exist')
    cy.getByTestId('spinner').should('not.exist')
    Helper.testUrl('/')
    Helper.testLocalStorageItem('account')
  })

  // it('Should prevent multiple submits', () => {
  //   mockSuccess()
  //   populateFields()
  //   cy.getByTestId('submit').dblclick()
  //   Helper.testHttpCallsCount(1)
  // })

  it('Should submit form if enter is pressed', () => {
    mockSuccess()
    populateFields()
    cy.getByTestId('passwordConfirmation').focus().type('{enter}')
    cy.getByTestId('main-error').should('not.exist')
    cy.getByTestId('spinner').should('not.exist')
    Helper.testUrl('/')
    Helper.testLocalStorageItem('account')
  })

  it('Should not call submit if form is invalid', () => {
    mockSuccess()
    cy.getByTestId('email').focus().type(faker.internet.email()).type('{enter}')
    Helper.testHttpCallsCount(0)
  })
})
