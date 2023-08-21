import { Eye } from '@components/icons/eye-icon'
import { EyeOff } from '@components/icons/eye-off-icon'
import { useContext, useState } from 'react'
import { Alert, Button, Card, Input, Toast } from 'react-daisyui'
import { AuthEmailContext } from '../../context/AuthContext'
import ErrorIcon from '@components/icons/error-icon'
import { useRouter } from 'next/router'

export default function Login() {
  const [show, setShow] = useState(false)
  const { connectWithEmail } = useContext(AuthEmailContext)
  const [open, setOpen] = useState(false)
  const [errorMsg, setErrorMsg] = useState<any>('')

  // Handle email and password as credentials
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })

  const router = useRouter()

  // write on console env variables
  // console.log(process.env.NEXT_PUBLIC_API_URL)

  // Handle on change for email and password
  const handleChange = (e: any) => {
    const { name, value } = e.target
    setCredentials({ ...credentials, [name]: value })
  }

  // Handle close alert
  const handleClose = () => {
    setOpen(false)
  }

  // Handle button click for send credentials to api
  const handleClick = async () => {
    try {
      // make axios post request to api login
      await connectWithEmail(credentials.email, credentials.password)
      // if success redirect to dashboard wih next router
      await router.push('/dashboard')
    } catch (error: any) {
      setErrorMsg(error)
      setOpen(true)
    }
  }

  return (
    // Login Component
    <div className="hero-content flex-col xs:flex-row-reverse max-w-xs">
      {/* // Login title parraf container */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-primary">Inicio de sesión</h1>
        <p className="py-6 font-bold text-white text-center">
          Inicia sesión con tu cuenta de Certiblock para acceder a tu perfil
        </p>
      </div>

      {/* // Login form container */}
      <Card className="card flex-shrink-0 w-full border-none">
        <div className="card-body">
          <div className="form-control">
            <Input
              type="text"
              name="email"
              onChange={handleChange}
              placeholder="Correo electrónico"
              className="input input-bordered"
            ></Input>
          </div>
          <div className="form-control">
            <div className="mt-1 relative inline-block">
              <Input
                name="password"
                onChange={handleChange}
                type={show ? 'text' : 'password'}
                placeholder="Contraseña"
                className="w-full max-w-xs"
              ></Input>
              <label
                className="absolute end-4 top-5 -mt-2 text-gray-500 cursor-pointer right-3"
                onClick={() => setShow((prev) => !prev)}
              >
                {show ? (
                  <EyeOff className="w-6 h-6" />
                ) : (
                  <Eye className="w-6 h-6" />
                )}
              </label>
            </div>
            {/* // not recovery password ?*/}
            <label className="label justify-end">
              <a
                href="#"
                className="label-text-alt link link-hover"
              >
                Olvidé mi contraseña
              </a>
            </label>
          </div>
          {/* // container bottons register and login*/}
          <div className="form-control mt-4 flex-row justify-center mr-4">
            <Button color="accent" className="rounded-full mx-4">
              Registrarse
            </Button>
            <Button
              onClick={handleClick}
              color="primary"
              className="rounded-full"
            >
              Iniciar sesión
            </Button>
          </div>
        </div>
      </Card>

      {/* // Alert component not found,not user login*/}
      <Toast
        vertical="bottom"
        horizontal="end"
        className={open ? 'visible' : 'invisible'}
      >
        <Alert
          status="error"
          icon={<ErrorIcon className="w-6 h-6 mx-2 stroke-current" />}
        >
          {errorMsg.toString()}
          <Button color="ghost" onClick={handleClose}>
            X
          </Button>
        </Alert>
      </Toast>
    </div>
  )
}
