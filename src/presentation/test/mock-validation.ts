import { Validation } from '@/presentation/components/protocols'

export class ValidationStub implements Validation {
  errorMessage: string

  validate (fieldName: string, fieldValue: string): string {
    return this.errorMessage
  }
}
