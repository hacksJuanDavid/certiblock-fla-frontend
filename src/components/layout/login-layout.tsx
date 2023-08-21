// Layout with head and background use background1.jpg from public folder
import React from 'react'
import Head from 'next/head'
import Footer from '@components/footer/footer'
import Subcription from '@components/subcription/subcription'
import NavbarNotLogue from '@components/navbar/navbar-not-logue'
import Coookies from '@components/cookies/cookies'

// children type NextPage
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* // Head component */}
      <Head>
        <title>Certiblock FLA Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/** Navbar Not logue Component */}
      <NavbarNotLogue></NavbarNotLogue>

      {/*container children  */}
      <div
        className="hero bg-base-200 bg-cover bg-center bg-no-repeat bg-fixed h-screen -mb-14 flex justify-center items-center"
        style={{
          backgroundImage: `url("./assets/background.png")`,
        }}
      >
        {/** Children */}
        {children}
      </div>
      {/*//Cookies */}
      <Coookies />
      {/*//Subcription */}
      {/*<Subcription /> */}
      {/*//Footer */}
      <Footer />
    </>
  )
}
