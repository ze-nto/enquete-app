import { InvalidFieldError } from '@/validation/errors'
import { FieldValidation } from '@/validation/protocols/fiels-validation'

export class MinLengthValidatior implements FieldValidation {
  constructor (readonly field: string, private readonly minLength: number) {}

  validate (value: string): Error {
    return new InvalidFieldError()
  }
}
