// Normal Page
import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import { AuthEmailContext } from '../src/context/AuthContext'
import Loading from '@components/loading/loading'
import LoginLayout from '@components/layout/login-layout'
import Login from '@components/login/login'

export default function Index() {
  // if isn't logged in, redirect to login page
  const { isLogged, loading } = useContext(AuthEmailContext)
  const router = useRouter()

  // return loading component if loading
  if (loading) {
    return <Loading />
  }

  if (!isLogged) {
    return (
      <LoginLayout>
        <Login />
      </LoginLayout>
    )
  } else {
    // if is logged in, redirect to dashboard page
    router.push('/dashboard')
  }
}
