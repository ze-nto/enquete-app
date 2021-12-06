import React from 'react'
import Input from './input'
import { render } from '@testing-library/react'
import Context from '@/presentation/context/form/form-context'

describe('Input Component', () => {
  test('Should begin with readonly', () => {
    const { getByTestId } = render(
      <Context.Provider value={{ state: {} }}>
        <Input name="field" />
      </Context.Provider>
    )
    const input = getByTestId('field') as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })
})
