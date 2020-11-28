import React from 'react'
import styled from 'styled-components'
import BottomDrawer from './components/BottomDrawer'
import Draggable from './components/Draggable'
import Calculator from './containers/Calculator'
import TriggerButton from './containers/TriggerButton'
import CalculatorContextProvider from './context/CalculatorContextProvider'
import GlobalStyle from './utils/GlobalStyle'
import useDevice from './utils/useDevice'

const Wrapper = styled.div`
  padding: 15px;
`

const App: React.FC = () => {
  const { isMobile } = useDevice()
  return (
    <Wrapper>
      <CalculatorContextProvider>
        <TriggerButton />
        {isMobile ? (
          <BottomDrawer>
            <Calculator />
          </BottomDrawer>
        ) : (
          <Draggable>
            <Calculator />
          </Draggable>
        )}
      </CalculatorContextProvider>
      <GlobalStyle />
    </Wrapper>
  )
}

export default App
