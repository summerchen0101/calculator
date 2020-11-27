import React from 'react'
import Calculator from './components/Calculator'
import TriggerButton from './containers/TriggerButton'
import CalculatorContextProvider from './context/CalculatorContextProvider'
import styled from 'styled-components'
import BottomDrawer from './components/BottomDrawer'
import GlobalStyle from './utils/GlobalStyle'
import Draggable from './components/Draggable'

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
