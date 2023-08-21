// Form for upload data to api
// Path: pages/dashboard/form.tsx
import DashboardLayout from '@components/layout/dashboard-layout'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Input } from 'react-daisyui'
import { AttributesContext } from '../../src/context/AttributesContext'
import StepsNavigator from '@components/steps/steps'
import { NumericFormat } from 'react-number-format'
import { StepsContext } from '../../src/context/StepssContext'

export default function Form() {
  //state data
  const [data, setData] = useState({
    amount: '',
    lote: '',
    name: '',
    years: 0,
    sugar: '',
    mililiters: 0,
    reference: '',
    city: '',
  })

  // Attributes Context
  const Attributes = useContext(AttributesContext)

  // create context stepts
  const { createStateSteps2 } = useContext(StepsContext)

  // set Attributes Context to data
  useEffect(() => {
    setData({
      amount: Attributes.amount,
      lote: Attributes.lote,
      name: Attributes.name,
      years: Attributes.years,
      sugar: Attributes.sugar,
      mililiters: Attributes.mililiters,
      reference: Attributes.reference,
      city: Attributes.city,
    })
  }, [])

  // get id from path params with next router
  const router = useRouter()

  // Handle on change for all inputs
  const handleChange = (e: any) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  // Handle button click for send Attributes page
  const handleNextRewars = async () => {
    //set state of the steps
    await createStateSteps2(true)
    // set data to context Attributes
    await Attributes.createAttributes(
      data.name,
      data.sugar,
      Number(data.amount.replace(/,/g, '')).toString(), // conversor amount number to string
      new Date().toDateString(), // date
      data.lote,
      data.years,
      data.mililiters,
      data.reference,
      data.city,
    )
    //Redirect to Attributes page
    await router.push('/dashboard/rewars')
  }

  return (
    <DashboardLayout>
      {/* Steps process */}
      <StepsNavigator />

      {/* Title */}
      <h1 className="text-3xl font-bold text-primary text-center m-4">
        Descripcion del Bache/Lote:
      </h1>

      {/* Form */}
      <div className="grid grid-cols-3 gap-3">
        <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-primary text-1xl">
                Cantidad de botellas:
              </span>
            </label>
            <NumericFormat
              className="input input-bordered input-primary rounded-full bg-base-200"
              displayType="input"
              thousandSeparator=","
              name="amount"
              value={data.amount}
              onChange={handleChange}
              placeholder="Ejem: 1000"
              list="amountList"
            />
            <datalist id="amountList">
              <option value="1000"></option>
              <option value="2000"></option>
              <option value="5000"></option>
              <option value="10000"></option>
            </datalist>
          </div>
        </div>
        <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-primary text-1xl">Lote:</span>
            </label>
            <Input
              className="input input-bordered input-primary rounded-full bg-base-200"
              name="lote"
              type="date"
              value={data.lote}
              onChange={handleChange}
            ></Input>
          </div>
        </div>
        <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-primary text-1xl">Nombre:</span>
            </label>
            <Input
              className="input input-bordered input-primary rounded-full bg-base-200"
              name="name"
              type="text"
              value={data.name}
              onChange={handleChange}
              placeholder="Ejem: Bache 1"
              list="namesList"
            ></Input>
            <datalist id="namesList">
              <option value="Ron"></option>
              <option value="Aguardiente"></option>
              <option value="Ron Dorado"></option>
              <option value="Ron Añejo"></option>
            </datalist>
          </div>
        </div>
        <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-primary text-1xl">Años:</span>
            </label>
            <Input
              className="input input-bordered input-primary rounded-full bg-base-200"
              name="years"
              type="number"
              value={data.years}
              onChange={handleChange}
              list="yearsList"
            ></Input>
            <datalist id="yearsList">
              <option value="3"></option>
              <option value="5"></option>
              <option value="8"></option>
              <option value="12"></option>
              <option value="19"></option>
            </datalist>
          </div>
        </div>
        <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-primary text-1xl">Azucar:</span>
            </label>
            <Input
              className="input input-bordered input-primary rounded-full bg-base-200"
              name="sugar"
              type="text"
              value={data.sugar}
              onChange={handleChange}
              placeholder="Ejem: 20g"
              list="sugarList"
            ></Input>
            <datalist id="sugarList">
              <option value="Sin Azúcar"></option>
              <option value="Con Azúcar"></option>
            </datalist>
          </div>
        </div>
        <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-primary text-1xl">
                Mililitros:
              </span>
            </label>
            <Input
              className="input input-bordered input-primary rounded-full bg-base-200"
              name="mililiters"
              min={100}
              type="number"
              value={data.mililiters}
              onChange={handleChange}
              list="mililitersList"
            ></Input>
            <datalist id="mililitersList">
              <option value="375"></option>
              <option value="750"></option>
              <option value="1000"></option>
              <option value="2000"></option>
            </datalist>
          </div>
        </div>
        <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-primary text-1xl">
                Referencia:
              </span>
            </label>
            <Input
              className="input input-bordered input-primary rounded-full bg-base-200"
              name="reference"
              min={100}
              type="text"
              value={data.reference}
              onChange={handleChange}
              placeholder="Ejem: 1000/1000/1000"
            ></Input>
          </div>
        </div>
        <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-primary text-1xl">Ciudad:</span>
            </label>
            <Input
              className="input input-bordered input-primary rounded-full bg-base-200"
              name="city"
              min={100}
              type="text"
              value={data.city}
              onChange={handleChange}
              placeholder="Ejem: Medellin"
              list="cityList"
            ></Input>
            <datalist id="cityList">
              <option value="Medellin"></option>
              <option value="Bogota"></option>
              <option value="Cali"></option>
              <option value="Barranquilla"></option>
            </datalist>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
        <Button
          className="rounded-full w-64 "
          color="primary"
          onClick={handleNextRewars}
        >
          Crear Bache
        </Button>
      </div>
    </DashboardLayout>
  )
}
