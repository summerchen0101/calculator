import React, { createContext, useContext, useState } from 'react'

interface ContextStates {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const CalculatorContext = createContext<ContextStates | undefined>(undefined)

const CalculatorContextProvider: React.FC = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false)
  return (
    <CalculatorContext.Provider
      value={{
        visible,
        setVisible,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  )
}

export const useCalculator = () => {
  return useContext(CalculatorContext) as ContextStates
}
export default CalculatorContextProvider
