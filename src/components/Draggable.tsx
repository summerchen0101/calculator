import React from 'react'
import { default as ReactDraggable } from 'react-draggable'
import styled from 'styled-components'

const Box = styled.div`
  width: 480px;
  cursor: move;
  padding: 30px;
  background: #7086ada1;
  border-radius: 5px;
  box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 10%);
  .no-cursor {
    cursor: auto;
  }
  @media (max-width: 768px) {
    padding: 15px;
    width: 360px;
  }
`

const Draggable: React.FC = ({ children, ...props }) => {
  return (
    <ReactDraggable cancel="strong">
      <Box {...props}>
        <strong className="no-cursor">{children}</strong>
      </Box>
    </ReactDraggable>
  )
}

export default Draggable
