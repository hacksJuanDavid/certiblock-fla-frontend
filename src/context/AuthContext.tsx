import axios from 'axios'
import * as React from 'react'

const AuthEmailContext = React.createContext({
  loading: true,
  isLogged: false,
  isAdmin: false,
  email: '',
  token: '',
  connectWithEmail: async (email: string, password: string) => {},
  disconnect: () => {},
})

interface props {
  children: JSX.Element
}

function secondsSinceEpoch() {
  return (Date.now() / 1000) | 0
}

const AuthEmailProvider = ({ children }: props) => {
  const [loading, setLoading] = React.useState(true)
  const [token, setToken] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [isLogged, setIsLogged] = React.useState(false)
  const [isAdmin, setIsAdmin] = React.useState<boolean>(false)
  const [exp, setExp] = React.useState(0)

  React.useEffect(() => {
    const token = localStorage.getItem('token')
    const email = localStorage.getItem('email')
    const exp = localStorage.getItem('exp')

    if (token && email && exp) {
      setToken(token)
      setEmail(email)
      setExp(Number(exp))
      setIsLogged(true)
      setIsAdmin(true)
    }

    setLoading(false)
  }, [])

  React.useEffect(() => {
    if (token) {
      const interval = setInterval(() => {
        if (secondsSinceEpoch() > exp) {
          disconnect()
        }
      }, 10000)

      return () => {
        clearInterval(interval)
      }
    }
  }, [token, exp])

  React.useEffect(() => {
    if (token) {
      localStorage.setItem('token', token)
      setIsLogged(true)
    } else {
      localStorage.removeItem('token')
    }
  }, [token])

  React.useEffect(() => {
    if (email) {
      localStorage.setItem('email', email)
    } else {
      localStorage.removeItem('email')
    }
  }, [email])

  const connectWithEmail = async (email: string, password: string) => {
    try {
      const loginResponse = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL!}/login`,
        {
          email,
          password,
        },
      )

      if (loginResponse.status === 400) {
        throw new Error(loginResponse.data.error)
      } else {
        setIsLogged(true)
        setIsAdmin(true)
        setToken(loginResponse.data.token.token)
        setEmail(email)
        // data.exp to timestamp
        const timeStampExp =
          new Date(loginResponse.data.token.expires_at).getTime() / 1000
        setExp(timeStampExp)
        localStorage.setItem('admin', 'true')
        localStorage.setItem('exp', timeStampExp.toString())
      }
    } catch (error: any) {
      throw new Error(
        error.response.data.errors
          ? error.response.data.errors[0].message
          : error.response.data.message,
      )
    }
  }

  const disconnect = () => {
    setIsLogged(false)
    setIsAdmin(false)
    setEmail('')
    localStorage.removeItem('email')
    localStorage.removeItem('token')
    localStorage.removeItem('admin')
    localStorage.removeItem('exp')

    window.location.reload()
  }

  return (
    <AuthEmailContext.Provider
      value={{
        loading,
        isLogged,
        isAdmin,
        token,
        email,
        connectWithEmail,
        disconnect,
      }}
    >
      {children}
    </AuthEmailContext.Provider>
  )
}

export { AuthEmailContext, AuthEmailProvider }
