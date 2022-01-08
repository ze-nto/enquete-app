import { AccessDeniedError } from '@/domain/errors'
import { setCurrentAccountAdapter } from '@/main/adapters'
import { ApiContext } from '@/presentation/contexts'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'

type CallbackType = (error: Error) => void
type ResultType = CallbackType

export const useErrorHandler = (callBack: CallbackType): ResultType => {
  const history = useHistory()
  const { setCurrentAccount } = useContext(ApiContext)
  return (error: Error): void => {
    if (error instanceof AccessDeniedError) {
      setCurrentAccount(undefined)
      history.replace('/login')
    } else {
      callBack(error)
    }
  }
}
