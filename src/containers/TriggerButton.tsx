import { Button } from 'antd'
import React from 'react'
import { CalculatorOutlined } from '@ant-design/icons'
import { useCalculator } from '../context/CalculatorContextProvider'

const TriggerButton: React.FC = () => {
  const { visible, setVisible } = useCalculator()
  return (
    <Button type="primary" onClick={(e) => setVisible(!visible)} size="large">
      Toggle Calculator
    </Button>
  )
}

export default TriggerButton
