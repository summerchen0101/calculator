import { Drawer, Row } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { useCalculator } from '../context/CalculatorContextProvider'
import { useTypedSelector } from '../store'
import {
  insert,
  clear,
  setOperator,
  equal,
} from '../store/reducers/calculatorReducer'
import { BlueBtn, GrayBtn, DefaultBtn } from './CalculatorButton'
import numeral from 'numeral'

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
  const number = useTypedSelector((state) => state.calculator.number)
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <NumberScreen>{numeral(number).format('0,0')}</NumberScreen>
      <Row gutter={16}>
        <GrayBtn color="gray" onClick={(e) => dispatch(clear())}>
          AC
        </GrayBtn>
        <GrayBtn>+/-</GrayBtn>
        <GrayBtn>%</GrayBtn>
        <BlueBtn>÷</BlueBtn>

        <DefaultBtn onClick={(e) => dispatch(insert('7'))}>7</DefaultBtn>
        <DefaultBtn onClick={(e) => dispatch(insert('8'))}>8</DefaultBtn>
        <DefaultBtn onClick={(e) => dispatch(insert('9'))}>9</DefaultBtn>
        <BlueBtn>x</BlueBtn>

        <DefaultBtn onClick={(e) => dispatch(insert('4'))}>4</DefaultBtn>
        <DefaultBtn onClick={(e) => dispatch(insert('5'))}>5</DefaultBtn>
        <DefaultBtn onClick={(e) => dispatch(insert('6'))}>6</DefaultBtn>
        <BlueBtn onClick={(e) => dispatch(setOperator('subtract'))}>-</BlueBtn>

        <DefaultBtn onClick={(e) => dispatch(insert('1'))}>1</DefaultBtn>
        <DefaultBtn onClick={(e) => dispatch(insert('2'))}>2</DefaultBtn>
        <DefaultBtn onClick={(e) => dispatch(insert('3'))}>3</DefaultBtn>
        <BlueBtn onClick={(e) => dispatch(setOperator('add'))}>+</BlueBtn>

        <DefaultBtn grow align="left" onClick={(e) => dispatch(insert('0'))}>
          0
        </DefaultBtn>
        <DefaultBtn onClick={(e) => dispatch(insert('.'))}>.</DefaultBtn>
        <BlueBtn onClick={(e) => dispatch(equal())}>=</BlueBtn>
      </Row>
    </Wrapper>
  )
}

export default Calculator
