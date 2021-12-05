import { InvalidFieldError } from '@/validation/errors'
import { MinLengthValidatior } from '@/validation/validators/min-length/min-length-validation'

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid', () => {
    const sut = new MinLengthValidatior('field', 5)
    const error = sut.validate('123')
    expect(error).toEqual(new InvalidFieldError())
  })

  test('Should return falsy value is valid', () => {
    const sut = new MinLengthValidatior('field', 5)
    const error = sut.validate('12345')
    expect(error).toBeFalsy()
  })
})
