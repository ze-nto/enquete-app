import faker from 'faker'
import { AddAccount } from '@/domain/usecases'

export const mockAccountModel = (): AddAccount.Model => {
  return {
    accessToken: faker.datatype.uuid(),
    name: faker.name.findName()
  }
}
