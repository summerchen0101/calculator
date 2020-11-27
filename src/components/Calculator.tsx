import { Drawer } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useCalculator } from '../context/CalculatorContextProvider'

const Wrapper = styled.div`
  width: 100vw;
  height: 50vh;
  background: #eee;
`

const Calculator: React.FC = () => {
  const { visible, setVisible } = useCalculator()
  return (
    <Drawer
      placement="bottom"
      closable={false}
      onClose={() => setVisible(false)}
      visible={visible}
      height="50vh"
    >
      {[...Array(15)].map((t, i) => (
        <p key={i}>Some contents...</p>
      ))}
    </Drawer>
  )
}

export default Calculator
