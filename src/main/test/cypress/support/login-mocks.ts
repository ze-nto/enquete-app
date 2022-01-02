import faker from 'faker'
import * as Helper from './http-mock'

export const mockInvalidCredentialsError = (): void => Helper.mockInvalidCredentialsError(/login/)
export const mockUnexpectedError = (): void => Helper.mockUnexpectedError(/login/, 'POST')
export const mockInvalidData = (): void => Helper.mockOk(/login/, 'POST', { invalid: faker.datatype.uuid() })
export const mockOk = (): void => Helper.mockOk(/login/, 'POST', { accessToken: faker.datatype.uuid(), name: faker.name.findName() })
