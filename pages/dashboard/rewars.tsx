import { Input, Button } from 'react-daisyui'
import Image from 'next/image'
import DashboardLayout from '@components/layout/dashboard-layout'
import StepsNavigator from '@components/steps/steps'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useContext } from 'react'
import { AttributesContext } from '../../src/context/AttributesContext'
import { StepsContext } from '../../src/context/StepssContext'
const { v4: uuidv4 } = require('uuid')

export default function RewarsForm() {
  //state data
  const [percentageRewars, setPercentageRewars] = useState('')
  const [cantidadRewars,setCantidadRewars] = useState('')

  // Attributes Context
  const attributes = useContext(AttributesContext)

  // Create context stepts
  const { createStateSteps3 } = useContext(StepsContext)

  // use next router
  const router = useRouter()

  //Create json data img and type and name
  const dataRewars = [
    {
      key: uuidv4(),
      img: '/assets/Moto100x100.png',
      type: '1',
      name: 'Motocicleta',
    },
    {
      key: uuidv4(),
      img: '/assets/Beca100x100.png',
      type: '2',
      name: 'Beca',
    },
    {
      key: uuidv4(),
      img: '/assets/Baru100x100.png',
      type: '3',
      name: 'Botella de Baru',
    },
    {
      key: uuidv4(),
      img: '/assets/Ron100x100.png',
      type: '4',
      name: 'Botella de Ron',
    },
    {
      key: uuidv4(),
      img: '/assets/Aguardiente100x100.png',
      type: '5',
      name: 'Botella Guaro',
    },
    {
      key: uuidv4(),
      img: '/assets/Boleta100x100.png',
      type: '6',
      name: 'Boleta',
    },
  ]

  //Handle click change escoger button to escogido
  const [rewarsItem] = useState('Escoger')
  const [getRewar] = useState('✅')
  const [text, setText] = useState(rewarsItem)

  //click change text denunciar for to thanks button
  const handleClickChangeText = () => {
    if (text === rewarsItem) {
      setText(getRewar)
    } else {
      setText(rewarsItem)
    }
  }

  // Create function calculate porcentage rewars for cantidad produccion
  const calculatePorcentageRewars = (amount: number, percentage: number) => {
    const calculate = (amount * percentage ) % 100
    return calculate
  }

  // Handle on change for all inputs
  const handleChange = (e: any) => {
    //code ejecuted when input change value to time 1000ms
    setTimeout(() => {
      //calculate porcentage rewars
      const percentage = calculatePorcentageRewars(
        //parse data to number
        parseInt(attributes.amount),
        parseInt(e.target.value),
      )
      //set data to state
      setPercentageRewars(percentage.toString())
      setCantidadRewars(e.target.value)
    }, 1000)
  }

  // Handle button click for send Attributes page
  const fn = async (
    img: string,
    name: string,
    type: string,
    percentage: string,
    cantidad: string,
  ) => {
    //change text button
    handleClickChangeText()
    // set data to context Attributes
    await attributes.createAttributesRewars(
      img,
      name,
      type,
      percentage,
      cantidad,
    )
    // set data to context Steps
    await createStateSteps3(true)
    //Redirect to Attributes page
    await router.push('/dashboard/attributes')
  }

  return (
    <>
      <DashboardLayout>
        {/*Steps*/}
        <StepsNavigator />
        {/*Rewars*/}
        <section>
          <label className="label justify-center">
            <span className="label-text text-primary text-3xl text-center font-bold">
              Módulo de premios
            </span>
          </label>
          <label className="label justify-start text-center m-2 p-2">
            <span className="label-text text-2xl">
              Total produccíon:{attributes.amount}
            </span>
          </label>
          {/*Rewars cards*/}
          <div className="container-center">
            <div className="grid grid-cols-1 md:grid-cols-6">
              {dataRewars.map((item) => (
                <div className="" key={item.key}>
                  {/*Card 1*/}
                  <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
                    <div className="rounded-lg mb-10">
                      <div className="card card-compact w-64">
                        <figure className="rounded-lg m-2 border-4 border-secondary">
                          <Image
                            className=""
                            src={item.img}
                            alt="motocicleta"
                            width={100}
                            height={100}
                          />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title justify-center">
                            {item.name}
                          </h2>
                          <div className="card-actions justify-center">
                            <Button
                              className="btn rounded-full w-64 enabled:hover:bg-primary"
                              color="secondary"
                              onClick={() =>
                                fn(
                                  item.img,
                                  item.type,
                                  item.name,
                                  percentageRewars,
                                  cantidadRewars,
                                )
                              }
                            >
                              {text === rewarsItem ? rewarsItem : getRewar}
                            </Button>
                            <Input
                              className="input input-bordered input-secondary rounded-full bg-base-200 w-64"
                              name="text"
                              type="text"
                              placeholder="#0000"
                              onChange={handleChange}
                            ></Input>
                            <h2 className="card-title justify-center text-lg">
                              Porcentaje: {percentageRewars}%
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </DashboardLayout>
    </>
  )
}
