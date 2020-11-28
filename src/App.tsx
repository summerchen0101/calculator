import React from 'react'
import styled from 'styled-components'
import Draggable from './components/Draggable'
import Calculator from './containers/Calculator'
import TriggerButton from './containers/TriggerButton'
import CalculatorContextProvider from './context/CalculatorContextProvider'
import GlobalStyle from './utils/GlobalStyle'

const Wrapper = styled.div`
  padding: 15px;
`

const App: React.FC = () => {
  return (
    <Wrapper>
      <CalculatorContextProvider>
        <TriggerButton />
        <Draggable>
          <Calculator />
        </Draggable>
      </CalculatorContextProvider>
      <GlobalStyle />
    </Wrapper>
  )
}

export default App
