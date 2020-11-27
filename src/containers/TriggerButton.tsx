import { Button } from 'antd'
import React from 'react'
import { CalculatorOutlined } from '@ant-design/icons'
import { useCalculator } from '../context/CalculatorContextProvider'

const TriggerButton: React.FC = () => {
  const { setVisible } = useCalculator()
  return (
    <Button type="primary" onClick={(e) => setVisible(true)} size="large">
      Open
    </Button>
  )
}

export default TriggerButton
