import DashboardLayout from '@components/layout/dashboard-layout'
import { Alert, Button, Input, Toast, Steps } from 'react-daisyui'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { AuthEmailContext } from '../../src/context/AuthContext'
import { AttributesContext } from '../../src/context/AttributesContext'
import { JsonContext } from '../../src/context/JsonContext'
import ErrorIcon from '@components/icons/error-icon'
import axios from 'axios'
import StepsNavigator from '@components/steps/steps'
import { StepsContext } from '../../src/context/StepssContext'

export default function Aprobe() {
  // State for alert
  const [open, setOpen] = useState(false)

  // State for error message
  const [errorMsg, setErrorMsg] = useState<any>('')

  // State for button disabled
  const [disabled, setDisabled] = useState(false)

  // get token from auth context
  const { token } = useContext(AuthEmailContext)

  // get Attributes Context
  const Attributes = useContext(AttributesContext)

  // get Json Context
  const { createJson } = useContext(JsonContext)

  // Create steps context
  const { createStateSteps6 } = useContext(StepsContext)

  // data set for send to api
  const [data] = useState({
    amount: Attributes.amount,
    lote: Attributes.lote,
    name: Attributes.name,
    years: Attributes.years,
    sugar: Attributes.sugar,
    mililiters: Attributes.mililiters,
    reference: Attributes.reference,
    date: Attributes.date,
    type: Attributes.type,
  })

  // get id from path params with next router
  const router = useRouter()

  // Handle close alert
  const handleClose = () => {
    setOpen(false)
  }

  // Handle button click for send credentials to api
  const handleNextProcessAxios = async () => {
    try {
      // set disabled
      setDisabled(true)
      //set state steps
      await createStateSteps6(true)

      //Create a new axios header and set the token
      const axiosConfig = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        timeout: 30000,
      }

      // make axios post request flas with token in headers
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/flas`,
        { ...data },
        axiosConfig,
      )
      if (response.status === 200) {
        // set json data to context
        await createJson(response.data.task)
        // redirect to process page
        await router.push('/dashboard/process')
      } else {
        setErrorMsg(response.statusText)
        setOpen(true)
      }
    } catch (error) {
      setErrorMsg(error)
      setOpen(true)
      console.log(error)
    }
  }

  return (
    <>
      <DashboardLayout>
        {/* Steps process */}
        <StepsNavigator />

        {/* Title contions */}
        <div className="font-semibold text-5xl text-primary text-center flex justify-center items-center mt-16">
          <h1>Verificación de Email</h1>
        </div>

        {/* Container form codes verification */}
        <div className="relative flex flex-col justify-center overflow-hidden py-12">
          <div className="relative px-6 pt-10 pb-9 mx-auto w-full max-w-lg">
            <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
              {/* Container title a parrafe*/}
              <div className="flex flex-col items-center justify-center text-center space-y-2">
                <div className="flex flex-row text-3xl font-medium text-white">
                  <p>
                    Un codigó único fue enviado a tu correo electrónico
                    **adm@certiblock.co
                  </p>
                </div>
              </div>

              {/* Container form */}
              <div>
                <div>
                  <div className="flex flex-col space-y-16">
                    <div className="flex flex-row items-center justify-center space-x-2 text-center">
                      {/* Inpust form */}
                      <div className="">
                        <Input
                          onChange={() => console.log('')}
                          type="number"
                          placeholder="0"
                          className="input-bordered input-primary w-20 h-16 text-center"
                        />
                      </div>

                      <div className="">
                        <Input
                          onChange={() => console.log('')}
                          type="number"
                          placeholder="0"
                          className="input-bordered input-primary w-20 h-16 text-center"
                        />
                      </div>

                      <div className="">
                        <Input
                          onChange={() => console.log('')}
                          type="number"
                          placeholder="0"
                          className="input-bordered input-primary w-20 h-16 text-center"
                        />
                      </div>

                      <div className="">
                        <Input
                          onChange={() => console.log('')}
                          type="number"
                          placeholder="0"
                          className="input-bordered input-primary w-20 h-16 text-center"
                        />
                      </div>

                      <div className="">
                        <Input
                          onChange={() => console.log('')}
                          type="number"
                          placeholder="0"
                          className="input-bordered input-primary w-20 h-16 text-center"
                        />
                      </div>

                      <div className="">
                        <Input
                          onChange={() => console.log('')}
                          type="number"
                          placeholder="0"
                          className="input-bordered input-primary w-20 h-16 text-center"
                        />
                      </div>
                    </div>

                    {/*button Aprobe */}
                    <div className="flex flex-col space-y-5">
                      <div className="flex justify-center items-center">
                        <Button
                          disabled={disabled}
                          onClick={handleNextProcessAxios}
                          className="rounded-full w-64"
                          color="primary"
                        >
                          Aprobar
                        </Button>
                      </div>

                      {/* redirect to new code*/}
                      <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-3 text-gray-500">
                        <p>¿No recibiste el código?</p>
                        <a
                          className="flex flex-row items-center text-secondary"
                          href="http://"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Reenviar Codigo
                        </a>
                        <span className="text-white bg-secondary rounded-full">
                          Nuevo code: 00:00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      </DashboardLayout>
    </>
  )
}
