import { InvalidFieldError } from '@/validation/errors'
import { MinLengthValidatior } from '@/validation/validators/min-length/min-length-validation'

describe('MinLengthValidation', () => {
  test('Should return error id value is invalid', () => {
    const sut = new MinLengthValidatior('field', 5)
    const error = sut.validate('123')
    expect(error).toEqual(new InvalidFieldError())
  })
})
