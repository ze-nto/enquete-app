import * as Helper from '../support/helpers'
import faker from 'faker'

describe('Login', () => {
  it('Should logout id SurveyList has no token', () => {
    cy.visit('')
    Helper.testUrl('/login')
  })
})
