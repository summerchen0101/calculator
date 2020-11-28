import React from 'react'
import { default as ReactDraggable } from 'react-draggable'
import styled from 'styled-components'
import cs from 'classnames'
import { useCalculator } from '../context/CalculatorContextProvider'
const Box = styled.div`
  width: 480px;
  cursor: move;
  padding: 20px;
  margin: 15px;
  background: linear-gradient(#7086ad 50%, #3c495e 100%);
  border-radius: 10px;
  box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 10%);
  .no-cursor {
    cursor: auto;
  }
  .calculator {
    border-radius: 10px;
  }
  @media (max-width: 768px) {
    padding: 15px;
    width: 360px;
  }
`

const Draggable: React.FC = ({ children, ...props }) => {
  const { visible } = useCalculator()
  return (
    <div className={cs({ hidden: !visible })}>
      <ReactDraggable cancel="strong">
        <Box {...props}>
          <strong className="no-cursor">{children}</strong>
        </Box>
      </ReactDraggable>
    </div>
  )
}

export default Draggable
