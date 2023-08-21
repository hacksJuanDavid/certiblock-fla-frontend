import DashboardLayout from '@components/layout/dashboard-layout'
import { Button, Input } from 'react-daisyui'
import { useRouter } from 'next/router'
import StepsNavigator from '@components/steps/steps'
import { StepsContext } from '../../src/context/StepssContext'
import { useContext } from 'react'

export default function Conditions() {
  // get id from path params with next router
  const router = useRouter()

  // Create steps context
  const { createStateSteps5 } = useContext(StepsContext)
  

  // Handle button click for send aprobe page
  const handleNextAprove = async () => {
    //set state of the steps
    await createStateSteps5(true)
    // redirect to aprobe page
    await router.push('/dashboard/aprobe')
  }

  return (
    <>
      <DashboardLayout>
        {/* Steps process */}
        <StepsNavigator />

        {/* Title contions */}
        <div className="text-5xl font-bold text-center text-error flex justify-center items-center mt-16">
          <h1>¡Importante!</h1>
        </div>

        {/* Parrafe contions */}
        <p className="py-16 text-center text-white text-3xl">
          Al aceptar los términos de este apartado, me responsabilizo penalmente
          de todo perjuicío causado por el mal uso o divulgacion de esta
          información a un tercero no autorizado.
        </p>

        {/* Hero contect */}
        <div className="flex justify-center items-center ">
          <div className="text-center">
            <div className="max-w-md">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-primary">
                  Aceptar terminos y condiciones
                </label>
                <div className="flex items-center space-x-6 justify-center">
                  <div className="flex items-center">
                    <Input
                      type="radio"
                      name="radio1"
                      id="radioButton1"
                      className="h-5 w-5"
                    />
                    <label className="pl-3 text-base font-medium text-white">
                      Acepto
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Input
                      type="radio"
                      name="radio1"
                      id="radioButton2"
                      className="h-5 w-5"
                    />
                    <label className="pl-3 text-base font-medium text-white">
                      No Acepto
                    </label>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleNextAprove}
                className="rounded-full w-64"
                color="primary"
              >
                Enviar Código
              </Button>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  )
}
