import { createContext, useState } from 'react'

// Attributes Context the bottle, create a funcion to create the Attributes of the bottle in real time accion the form
const AttributesContext = createContext({
  name: '',
  sugar: '',
  amount: '',
  date: '',
  lote: '',
  years: 0,
  mililiters: 0,
  reference: '',
  city: '',
  image: '',
  type: '',
  imageRewars: '',
  typeRewars: '',
  nameRewars: '',
  percentageRewars: '',
  cantidadRewars: '',
  createAttributes: async (
    name: string,
    sugar: string,
    amount: string,
    date: string,
    lote: string,
    years: number,
    mililiters: number,
    reference: string,
    city: string,
  ) => {},
  createImageAttributes: async (image: string) => {},
  createTypeAttributes: async (type: string) => {},
  createAttributesRewars: async (
    imageRewars: string,
    typeRewars: string,
    nameRewars: string,
    percentageRewars: string,
    cantidadRewars: string,
  ) => {},
})

// interface props children components
interface props {
  children: JSX.Element
}

// Attributes Provider component to create the Attributes of the bottle
const AttributesProvider = ({ children }: props) => {
  // Create Attributes of the bottle
  const [data, setData] = useState({
    name: '',
    sugar: '',
    amount: '',
    date: '',
    lote: '',
    years: 0,
    mililiters: 0,
    reference: '',
    city: '',
  })

  // Create Attributes of the bottle img
  const [image, setImage] = useState({
    image: '',
  })

  // Create Attributes of the bottle type
  const [type, setType] = useState({
    type: '',
  })

  // Create Attributes of the bottle rewars
  const [rewars, setRewars] = useState({
    imageRewars: '',
    typeRewars: '',
    nameRewars: '',
    percentageRewars: '',
    cantidadRewars: '',
  })

  // create image Attributes of the bottle
  const createImageAttributes = async (image: string) => {
    setImage({
      image: image,
    })
  }

  // create type Attributes of the bottle
  const createTypeAttributes = async (type: string) => {
    setType({
      type: type,
    })
  }

  // createAttributes function to create the Attributes of the bottle
  const createAttributes = async (
    name: string,
    sugar: string,
    amount: string,
    date: string,
    lote: string,
    years: number,
    mililiters: number,
    reference: string,
    city: string,
  ) => {
    setData({
      name: name,
      sugar: sugar,
      amount: amount,
      date: date,
      lote: lote,
      years: years,
      mililiters: mililiters,
      reference: reference,
      city: city,
    })
  }

  // createAttributesRewars function to create the Attributes of the bottle rewars
  const createAttributesRewars = async (
    imageRewars: string,
    typeRewars: string,
    nameRewars: string,
    percentageRewars: string,
    cantidadRewars: string,
  ) => {
    setRewars({
      imageRewars: imageRewars,
      typeRewars: typeRewars,
      nameRewars: nameRewars,
      percentageRewars: percentageRewars,
      cantidadRewars: cantidadRewars,
    })
  }

  // return the Attributes of the bottle
  return (
    <AttributesContext.Provider
      value={{
        name: data.name,
        sugar: data.sugar,
        amount: data.amount,
        date: data.date,
        lote: data.lote,
        years: data.years,
        mililiters: data.mililiters,
        reference: data.reference,
        city: data.city,
        image: image.image,
        type: type.type,
        imageRewars: rewars.imageRewars,
        typeRewars: rewars.typeRewars,
        nameRewars: rewars.nameRewars,
        percentageRewars: rewars.percentageRewars,
        cantidadRewars: rewars.cantidadRewars,
        createAttributes,
        createImageAttributes,
        createTypeAttributes,
        createAttributesRewars,
      }}
    >
      {children}
    </AttributesContext.Provider>
  )
}

export { AttributesContext, AttributesProvider }
