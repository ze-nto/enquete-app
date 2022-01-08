import faker from 'faker'
import * as Helper from './http-mock'

export const mockInvalidCredentialsError = (): void => Helper.mockUnauthorizedError(/login/)
export const mockUnexpectedError = (): void => Helper.mockUnexpectedError(/login/, 'POST')
export const mockOk = (): void => Helper.mockOk('POST', /login/, { accessToken: faker.datatype.uuid(), name: faker.name.findName() })
