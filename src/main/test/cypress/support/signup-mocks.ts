import * as Helper from './http-mock'

export const mockEmailInUseError = (): void => Helper.mockEmailInUseError(/signup/)
