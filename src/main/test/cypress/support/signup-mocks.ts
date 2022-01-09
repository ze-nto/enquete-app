import faker from 'faker'
import * as Http from './http-mock'

export const mockEmailInUseError = (): void => Http.mockForbiddenError(/signup/, 'POST')
export const mockUnexpectedError = (): void => Http.mockServerError(/signup/, 'POST')
export const mockOk = (): void => Http.mockOk('POST', /signup/, { accessToken: faker.datatype.uuid(), name: faker.name.findName() })
