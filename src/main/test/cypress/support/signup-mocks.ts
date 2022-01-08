import faker from 'faker'
import * as Helper from './http-mock'

export const mockEmailInUseError = (): void => Helper.mockForbiddenError(/signup/, 'POST')
export const mockUnexpectedError = (): void => Helper.mockUnexpectedError(/signup/, 'POST')
export const mockOk = (): void => Helper.mockOk('POST', /signup/, { accessToken: faker.datatype.uuid(), name: faker.name.findName() })
