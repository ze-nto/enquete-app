import { AccessDeniedError } from '@/domain/errors'
import { useLogout } from '@/presentation/hooks'

type CallbackType = (error: Error) => void
type ResultType = CallbackType

export const useErrorHandler = (callBack: CallbackType): ResultType => {
  const logout = useLogout()
  return (error: Error): void => {
    if (error instanceof AccessDeniedError) {
      logout()
    } else {
      callBack(error)
    }
  }
}
