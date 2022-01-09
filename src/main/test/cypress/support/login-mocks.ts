import faker from 'faker'
import * as Http from './http-mock'

export const mockInvalidCredentialsError = (): void => Http.mockUnauthorizedError(/login/)
export const mockUnexpectedError = (): void => Http.mockServerError(/login/, 'POST')
export const mockOk = (): void => Http.mockOk('POST', /login/, { accessToken: faker.datatype.uuid(), name: faker.name.findName() })
