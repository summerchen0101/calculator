import { Drawer } from 'antd'
import React from 'react'
import { useCalculator } from '../context/CalculatorContextProvider'

const BottomDrawer: React.FC = ({ children }) => {
  const { visible, setVisible } = useCalculator()
  return (
    <Drawer
      placement="bottom"
      closable={false}
      onClose={() => setVisible(false)}
      visible={visible}
      height="50vh"
      bodyStyle={{ padding: 0 }}
    >
      {children}
    </Drawer>
  )
}

export default BottomDrawer
