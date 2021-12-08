import 'jest-localstorage-mock'
import faker from 'faker'
import { LocalSrorageAdapter } from '@/infra/cache/local-storage-adapter'

describe('LocalStorageAdapter', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('Should calls lcalStorage with correct values', async () => {
    const sut = new LocalSrorageAdapter()
    const key = faker.database.column()
    const value = faker.random.word()
    await sut.set(key, value)
    expect(localStorage.setItem).toHaveBeenCalledWith(key, value)
  })
})
