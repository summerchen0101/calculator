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
  insertPoint,
  OperatorOptions,
} from '../store/reducers/calculatorReducer'
import { BlueBtn, GrayBtn, DefaultBtn } from '../components/CalculatorButton'
import numeral from 'numeral'
import NumberScreen from '../components/NumberScreen'

const Wrapper = styled.div`
  padding: 15px;
  background: linear-gradient(#84baff 0%, #0b0e1c 100%);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 20%);
  @media (max-width: 768px) {
    padding: 10px;
  }
`

const Calculator: React.FC = () => {
  const number = useTypedSelector((state) => state.calculator.number)
  const dispatch = useDispatch()
  return (
    <Wrapper className="calculator">
      <NumberScreen>{numeral(number).value()}</NumberScreen>
      <Row gutter={16}>
        <GrayBtn color="gray" onClick={(e) => dispatch(clear())}>
          AC
        </GrayBtn>
        <GrayBtn>+/-</GrayBtn>
        <GrayBtn>%</GrayBtn>
        <BlueBtn onClick={(e) => dispatch(setOperator(OperatorOptions.divide))}>
          ÷
        </BlueBtn>

        <DefaultBtn onClick={(e) => dispatch(insert('7'))}>7</DefaultBtn>
        <DefaultBtn onClick={(e) => dispatch(insert('8'))}>8</DefaultBtn>
        <DefaultBtn onClick={(e) => dispatch(insert('9'))}>9</DefaultBtn>
        <BlueBtn
          onClick={(e) => dispatch(setOperator(OperatorOptions.multiply))}
        >
          x
        </BlueBtn>

        <DefaultBtn onClick={(e) => dispatch(insert('4'))}>4</DefaultBtn>
        <DefaultBtn onClick={(e) => dispatch(insert('5'))}>5</DefaultBtn>
        <DefaultBtn onClick={(e) => dispatch(insert('6'))}>6</DefaultBtn>
        <BlueBtn
          onClick={(e) => dispatch(setOperator(OperatorOptions.subtract))}
        >
          -
        </BlueBtn>

        <DefaultBtn onClick={(e) => dispatch(insert('1'))}>1</DefaultBtn>
        <DefaultBtn onClick={(e) => dispatch(insert('2'))}>2</DefaultBtn>
        <DefaultBtn onClick={(e) => dispatch(insert('3'))}>3</DefaultBtn>
        <BlueBtn onClick={(e) => dispatch(setOperator(OperatorOptions.add))}>
          +
        </BlueBtn>

        <DefaultBtn grow align="left" onClick={(e) => dispatch(insert('0'))}>
          0
        </DefaultBtn>
        <DefaultBtn onClick={(e) => dispatch(insertPoint())}>.</DefaultBtn>
        <BlueBtn onClick={(e) => dispatch(equal())}>=</BlueBtn>
      </Row>
    </Wrapper>
  )
}

export default Calculator
