import DashboardLayout from '@components/layout/dashboard-layout'
import Image from 'next/image'
import { Button } from 'react-daisyui'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { AttributesContext } from '../../src/context/AttributesContext'
import StepsNavigator from '@components/steps/steps'
import { StepsContext } from '../../src/context/StepssContext'

export default function Attributes() {
  // get id from path params with next router
  const router = useRouter()

  // Handle button click for send conditions page
  const handleNextConditions = async () => {
    //set state steps
    await createStateSteps4(true)
    // redirect to conditions page
    await router.push('/dashboard/conditions')
  }

  // Handle button click for send form page
  const handleBackForm = async () => {
    //set state steps
    await createStateSteps4(false)
    // redirect to form page
    await router.push('/dashboard/form')
  }

  // Attributes Context
  const attributes = useContext(AttributesContext)

  // Create stepts context
  const { createStateSteps4 } = useContext(StepsContext)

  //object attributes print
  console.log(attributes)

  return (
    <>
      <DashboardLayout>
        {/* Steps process */}
        <StepsNavigator />

        {/*Atributes container*/}
        <div className="container-center">
          <label className="label justify-center">
            <span className="label-text text-primary text-3xl text-center font-bold">
              Resumen Atributos:
            </span>
          </label>
          <div className="flex flex-wrap justify-center">
            {/*Card attributes bottle and image bottle */}
            <div className="card m-6 flex-row justify-center items-center">
              <div className="">
                <Image
                  src={attributes.image}
                  alt="bottle-img"
                  width={200}
                  height={200}
                  className="w-auto h-auto"
                  priority={true}
                />
              </div>

              {/*Card body ul items attributes*/}
              <div className="justify-center items-center">
                {/* //attributes bottle component */}
                <div className="grid">
                  <div className="grid justify-items-stretch grid-rows-4 grid-flow-col gap-1">
                    <div className="btn rounded-full btn-primary bg-base-100 text-primary">
                      Nombre: {attributes.name}
                    </div>
                    <div className="btn rounded-full btn-primary bg-base-100 text-primary">
                      Años: {attributes.years}
                    </div>
                    <div className="btn rounded-full btn-primary bg-base-100 text-primary">
                      Lote: {attributes.lote}
                    </div>
                    <div className="btn rounded-full btn-primary bg-base-100 text-primary">
                      {attributes.sugar}
                    </div>
                    <div className="btn rounded-full btn-primary bg-base-100 text-primary">
                      Mililitros: {attributes.mililiters}
                    </div>
                    <div className="btn rounded-full btn-primary bg-base-100 text-primary">
                      Ciudad: {attributes.city}
                    </div>
                    <div className="btn rounded-full btn-primary bg-base-100 text-primary">
                      Cantidad: {attributes.amount}
                    </div>
                    <div className="btn rounded-full btn-primary bg-base-100 text-primary">
                      Referencia: {attributes.reference}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Card attributes rewars and image rewars */}
            <div className="card m-6 flex-row justify-center items-center border-4 border-primary">
              <div className="">
                <Image
                  src={attributes.imageRewars}
                  alt="rewars-img"
                  width={200}
                  height={200}
                  className="w-auto h-auto m-2 p-2"
                  priority={true}
                />
              </div>

              {/*Card body ul items attributes*/}
              <div className="justify-center items-center">
                {/* //attributes bottle component */}
                <div className="grid m-2">
                  <div className="grid grid-flow-row gap-2">
                    <div className="btn rounded-full btn-primary bg-base-100 text-primary">
                      Nombre: {attributes.nameRewars}
                    </div>
                    <div className="btn rounded-full btn-primary bg-base-100 text-primary">
                      Aletorio: {attributes.percentageRewars}%
                    </div>
                    <div className="btn rounded-full btn-primary bg-base-100 text-primary">
                      Cantidad: {attributes.cantidadRewars}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Card buttons next, edit*/}
          <div className="card-actions justify-center p-2">
            <Button
              onClick={handleBackForm}
              className="rounded-full w-64"
              color="secondary"
            >
              Editar
            </Button>
            <Button
              onClick={handleNextConditions}
              className="rounded-full w-64"
              color="primary"
            >
              Siguiente
            </Button>
          </div>
        </div>
      </DashboardLayout>
    </>
  )
}
