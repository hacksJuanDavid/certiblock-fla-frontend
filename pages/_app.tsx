import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Theme } from 'react-daisyui'
import { AuthEmailProvider } from '../src/context/AuthContext'
import { useEffect, useState } from 'react'
import { AttributesProvider } from '../src/context/AttributesContext'
import { CookiesProvider } from 'react-cookie'
import { JsonProvider } from '../src/context/JsonContext'
import { StepsProvider } from '../src/context/StepssContext'

function MyApp({ Component, pageProps }: AppProps) {
  // Wait until window object exists to prevent build errors
  const [showChild, setShowChild] = useState(false)
  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }

  if (typeof window === 'undefined') {
    return <></>
  } else {
    return (
      <Theme dataTheme="dark">
        <CookiesProvider>
          <AuthEmailProvider>
            <AttributesProvider>
              <JsonProvider>
                <StepsProvider>
                  <Component {...pageProps} />
                </StepsProvider>
              </JsonProvider>
            </AttributesProvider>
          </AuthEmailProvider>
        </CookiesProvider>
      </Theme>
    )
  }
}

export default MyApp
