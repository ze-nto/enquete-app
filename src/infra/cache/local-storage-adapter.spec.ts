import 'jest-localstorage-mock'
import faker from 'faker'
import { LocalStorageAdapter } from '@/infra/cache/local-storage-adapter'

const makeSut = (): LocalStorageAdapter => new LocalStorageAdapter()

describe('LocalStorageAdapter', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('Should calls lcalStorage with correct values', () => {
    const sut = makeSut()
    const key = faker.database.column()
    const value = faker.random.word()
    sut.set(key, value)
    expect(localStorage.setItem).toHaveBeenCalledWith(key, value)
  })
})
