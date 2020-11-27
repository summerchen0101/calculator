import { Drawer, Row } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useCalculator } from '../context/CalculatorContextProvider'
import { BlueBtn, GrayBtn, DefaultBtn } from './CalculatorButton'

const Wrapper = styled.div`
  padding: 15px;
  background: linear-gradient(#84baff 0%, #0b0e1c 100%);
  @media (max-width: 768px) {
    padding: 10px;
  }
`

const NumberScreen = styled.div`
  height: 90px;
  font-size: 55px;
  letter-spacing: 1px;
  line-height: 90px;
  text-align: right;
  padding: 0 10px;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 45px;
  }
`

const Calculator: React.FC = () => {
  return (
    <Wrapper>
      <NumberScreen>232,000</NumberScreen>
      <Row gutter={16}>
        <GrayBtn color="gray">AC</GrayBtn>
        <GrayBtn>+/-</GrayBtn>
        <GrayBtn>%</GrayBtn>
        <BlueBtn>÷</BlueBtn>

        <DefaultBtn>7</DefaultBtn>
        <DefaultBtn>8</DefaultBtn>
        <DefaultBtn>9</DefaultBtn>
        <BlueBtn>x</BlueBtn>

        <DefaultBtn>4</DefaultBtn>
        <DefaultBtn>5</DefaultBtn>
        <DefaultBtn>6</DefaultBtn>
        <BlueBtn>-</BlueBtn>

        <DefaultBtn>1</DefaultBtn>
        <DefaultBtn>2</DefaultBtn>
        <DefaultBtn>3</DefaultBtn>
        <BlueBtn>+</BlueBtn>

        <DefaultBtn grow align="left">
          0
        </DefaultBtn>
        <DefaultBtn>.</DefaultBtn>
        <BlueBtn>=</BlueBtn>
      </Row>
    </Wrapper>
  )
}

export default Calculator
