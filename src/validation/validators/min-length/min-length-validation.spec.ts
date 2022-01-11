import faker from 'faker'
import { InvalidFieldError } from '@/validation/errors'
import { MinLengthValidation } from '@/validation/validators/min-length/min-length-validation'

const makeSut = (field: string): MinLengthValidation => new MinLengthValidation(field, 5)

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate({ [field]: faker.random.alphaNumeric(4) })
    expect(error).toEqual(new InvalidFieldError())
  })

  test('Should return falsy value is valid', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate({ [field]: faker.random.alphaNumeric(5) })
    expect(error).toBeFalsy()
  })

  test('Should return falsy value is valid if field does not exists in schema', () => {
    const sut = makeSut('any_field')
    const error = sut.validate({ invalid_field: faker.random.alphaNumeric(5) })
    expect(error).toBeFalsy()
  })
})
