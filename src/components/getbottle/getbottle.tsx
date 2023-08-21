import Image from 'next/image'
import { Button } from 'react-daisyui'
import { useRouter } from 'next/router'
import ArrowDownUpIcon from '@components/icons/arrows-down-up-icon'
import { useContext } from 'react'
import { StepsContext } from '../../context/StepssContext'

export default function GetBottle() {
  // user router
  const router = useRouter()
  // create context stepts
  const { createStateSteps1 } = useContext(StepsContext)

  // handle click button next list rones
  const handleClickNextListRones = async () => {
    // create state of the steps
    createStateSteps1(true)
    // redirect to next page rones
    await router.push('/dashboard/rones')
  }

  // handle click button next list aguardientes
  const handleClickNextListAguardientes = async () => {
    // create state of the steps
    createStateSteps1(true)
    // redirect to next page aguardientes
    await router.push('/dashboard/aguardientes')
  }

  return (
    <>
      <div className="hero min-h-screen grid justify-center">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="col-span-1">
              <div className="card w-full">
                <h2 className="card-title text-2xl text-primary justify-center m-2 p-2">
                  Lista Rones
                </h2>
                <figure className="px-10 pt-10">
                  <Image
                    src="/assets/RM.png"
                    alt="ron"
                    className="w-auto h-auto m-2"
                    width={200}
                    height={200}
                    priority={true}
                  />
                </figure>
                <div className="card-body items-center text-center text-xl">
                  <p>Escoge el ron para mintear</p>
                  <div className="card-actions">
                    <Button
                      className="btn btn-primary w-64 rounded-full"
                      onClick={handleClickNextListRones}
                    >
                      Escoger Ron
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="divider divider-horizontal">
                <ArrowDownUpIcon className="text-primary" />
              </div>
            </div>

            <div className="col-span-2">
              <div className="card w-full">
                <h2 className="card-title text-2xl text-primary justify-center m-2 p-2">
                  Lista Aguardientes
                </h2>
                <figure className="px-10 pt-10">
                  <Image
                    src="/assets/Aguardientes.png"
                    alt="Aguardiente"
                    className="w-auto h-auto m-2"
                    width={200}
                    height={200}
                    priority={true}
                  />
                </figure>
                <div className="card-body items-center text-center text-xl">
                  <p>Escoge el aguardiente para mintear</p>
                  <div className="card-actions">
                    <Button
                      className="btn btn-primary w-64 rounded-full"
                      onClick={handleClickNextListAguardientes}
                    >
                      Escoger Aguardiente
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
