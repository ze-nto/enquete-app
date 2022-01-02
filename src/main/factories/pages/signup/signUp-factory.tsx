import React from 'react'
import { SignUp } from '@/presentation/pages'
import { makeLocalUpdateCurrentAccount } from '@/main/factories/usecases/save-access-token/local-save-access-token-factory'
import { makeSignUpValidation } from '@/main/factories/pages/signup/signup-validation-factory'
import { makeRemoteAddAccount } from '@/main/factories/usecases/add-account/remote-add-account-factory'

export const makeSignUp: React.FC = () => {
  return (
    <SignUp
      addAccount={makeRemoteAddAccount()}
      validation={makeSignUpValidation()}
      updateCurrentAccount={makeLocalUpdateCurrentAccount()}/>
  )
}
