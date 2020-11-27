import React from 'react'
import styled from 'styled-components'
import cs from 'classnames'
import { Col } from 'antd'

interface Props {
  grow?: boolean
  color?: string
  align?: 'left' | 'right' | 'center'
  size?: 'small' | 'default'
}

const CalculatorButton: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Col span={props.grow ? 12 : 6} {...props}>
      <div className="circle">{children}</div>
    </Col>
  )
}

export const DefaultBtn = styled(CalculatorButton)`
  margin: 10px 0;
  @media (max-width: 768px) {
    margin: 6px 0;
  }
  .circle {
    background-color: #333;
    color: #fff;
    padding: 0 10px;
    font-size: 23px;
    height: 65px;
    border-radius: 35px;
    text-align: ${(props) => props.align || 'center'};
    line-height: 65px;
    cursor: pointer;
    box-shadow: 0 0 2px 1px rgba(255, 255, 255, 10%);
  }
`
export const BlueBtn = styled(DefaultBtn)`
  .circle {
    background-color: #3091fd;
    color: #fff;
  }
`
export const GrayBtn = styled(DefaultBtn)`
  .circle {
    background-color: #afafaf;
    color: #333;
  }
`
