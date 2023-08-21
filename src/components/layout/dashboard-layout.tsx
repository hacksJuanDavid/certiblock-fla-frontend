// Dashboard Layout Component
import React, { useContext } from 'react'
import Head from 'next/head'
import Navbar from '@components/navbar/navbar'
import Loading from '@components/loading/loading'
import { AuthEmailContext } from '../../context/AuthContext'
import { useRouter } from 'next/router'

// children type NextPage
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // if is not login redirect to login page

  const { isLogged, loading } = useContext(AuthEmailContext)
  // intialize router
  const router = useRouter()

  // If is not logged redirect to login page
  if (loading) {
    return <Loading /> // Loading component
  } else {
    if (!isLogged) {
      router.push('/')
      return null
    } else {
      return (
        <div>
          {/* // Head component */}
          <Head>
            <title>Certiblock FLA Dashboard</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          {/* // container component */}
          <div
            className="bg-cover bg-center bg-no-repeat bg-fixed min-h-screen"
            style={{
              backgroundImage: `url("/assets/background.png")`,
            }}
          >
            {/* Navbar */}
            <Navbar></Navbar>

            {/* Children */}
            {children}
          </div>
        </div>
      )
    }
  }
}
