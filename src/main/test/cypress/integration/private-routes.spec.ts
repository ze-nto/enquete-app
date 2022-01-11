import * as Helper from '../utils/helpers'

describe('Login', () => {
  it('Should logout id SurveyList has no token', () => {
    cy.visit('')
    Helper.testUrl('/login')
  })
})
