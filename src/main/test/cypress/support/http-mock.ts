import { Method } from 'axios'
import faker from 'faker'

export const mockUnauthorizedError = (url: RegExp): void => {
  cy.intercept('POST', url, {
    statusCode: 401,
    body: {
      error: faker.random.words()
    }
  }).as('request')
}

export const mockServerError = (url: RegExp, method: Method): void => {
  cy.intercept({ method, url }, {
    statusCode: 500,
    body: {
      error: faker.random.words()
    }
  }).as('request')
}

export const mockOk = (method: Method, url: RegExp, response: any): void => {
  cy.intercept({
    method: method,
    url: url
  }, {
    statusCode: 200,
    body: response
  }
  ).as('request')
}

export const mockForbiddenError = (url: RegExp, method: Method): void => {
  cy.intercept({
    method,
    url
  }, {
    statusCode: 403,
    body: { error: faker.random.words() }
  }).as('request')
}
