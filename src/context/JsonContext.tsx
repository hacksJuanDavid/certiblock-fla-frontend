import { createContext, useState } from 'react'

// Context object to bottles the JSON data
const JsonContext = createContext({
  json: {},
  createJson: async (json: {}) => {},
})

// interface props children components
interface props {
  children: JSX.Element
}

// Json Provider component to create the JSON data
const JsonProvider = ({ children }: props) => {
  const [json, setJson] = useState({})

  // create json data
  const createJson = async (json: {}) => {
    setJson(json)
  }

  return (
    <JsonContext.Provider value={{ json, createJson }}>
      {children}
    </JsonContext.Provider>
  )
}

export { JsonContext, JsonProvider }
