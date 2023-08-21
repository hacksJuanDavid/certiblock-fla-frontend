import { createContext, useState } from 'react'

//State of context states of the steps
const StepsContext = createContext({
  step1: false,
  step2: false,
  step3: false,
  step4: false,
  step5: false,
  step6: false,
  step7: false,
  createStateSteps1: async (step1: boolean) => {},
  createStateSteps2: async (step2: boolean) => {},
  createStateSteps3: async (step3: boolean) => {},
  createStateSteps4: async (step4: boolean) => {},
  createStateSteps5: async (step5: boolean) => {},
  createStateSteps6: async (step6: boolean) => {},
  createStateSteps7: async (step7: boolean) => {},
})

// interface props children components
interface props {
  children: JSX.Element
}

// Steps Provider component to create the state of the steps
const StepsProvider = ({ children }: props) => {
  // Create state of the steps
  const [data, setData] = useState({
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
    step6: false,
    step7: false,
  })

  // Create state of the steps 1
  const createStateSteps1 = async (step1: boolean) => {
    setData({
      ...data,
      step1,
    })
  }

  // Create state of the steps 2
  const createStateSteps2 = async (step2: boolean) => {
    setData({
      ...data,
      step2,
    })
  }

  // Create state of the steps 3
  const createStateSteps3 = async (step3: boolean) => {
    setData({
      ...data,
      step3,
    })
  }

  // Create state of the steps 4
  const createStateSteps4 = async (step4: boolean) => {
    setData({
      ...data,
      step4,
    })
  }

  // Create state of the steps 5
  const createStateSteps5 = async (step5: boolean) => {
    setData({
      ...data,
      step5,
    })
  }

  // Create state of the steps 6
  const createStateSteps6 = async (step6: boolean) => {
    setData({
      ...data,
      step6,
    })
  }

  // Create state of the steps 7
  const createStateSteps7 = async (step7: boolean) => {
    setData({
      ...data,
      step7,
    })
  }

  return (
    <StepsContext.Provider
      value={{
        step1: data.step1,
        step2: data.step2,
        step3: data.step3,
        step4: data.step4,
        step5: data.step5,
        step6: data.step6,
        step7: data.step7,
        createStateSteps1,
        createStateSteps2,
        createStateSteps3,
        createStateSteps4,
        createStateSteps5,
        createStateSteps6,
        createStateSteps7,
      }}
    >
      {children}
    </StepsContext.Provider>
  )
}

export { StepsContext, StepsProvider }

