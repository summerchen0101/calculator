import React from 'react'
import Calculator from './components/Calculator'
import TriggerButton from './containers/TriggerButton'
import CalculatorContextProvider from './context/CalculatorContextProvider'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 15px;
`

const App: React.FC = () => {
  return (
    <Wrapper>
      <CalculatorContextProvider>
        <TriggerButton />
        <Calculator />
      </CalculatorContextProvider>
    </Wrapper>
  )
}

export default App
