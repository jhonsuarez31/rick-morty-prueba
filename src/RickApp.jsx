import React from 'react'
import { AuthProvaider } from './auth/context/AuthProvaider'
import { ApiProvider } from './rick-morty/context/ApiProvider'
import { AppRoute } from './router/AppRoute'

export const RickApp = () => {
  return (
    <AuthProvaider>
      <ApiProvider>
      <AppRoute/>
      </ApiProvider>
    </AuthProvaider>
  )
}
