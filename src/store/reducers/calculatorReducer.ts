import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import numeral, { subtract } from 'numeral'

export enum OperatorOptions {
  add = 'add',
  subtract = 'subtract',
  multiply = 'multiply',
  divide = 'divide',
}

type OperatorType = keyof typeof OperatorOptions
interface IState {
  records: string[]
  number: number
  operator: OperatorType
  clearStamp: boolean
  insertedPoint: boolean
}
const initialState: IState = {
  records: [],
  number: 0,
  operator: OperatorOptions.add,
  clearStamp: false,
  insertedPoint: false,
}

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    insert: (state, action: PayloadAction<string>) => {
      if (state.clearStamp) {
        state.records.push(state.number.toString())
        state.records.push(state.operator)
        state.number = 0
        state.clearStamp = false
      }
      if (state.insertedPoint) {
        action.payload = `.${action.payload}`
        state.insertedPoint = false
      }
      state.number = numeral(state.number.toString() + action.payload).value()
    },
    equal: (state) => {
      state.records.push(state.number.toString())
      let currentOperator: OperatorType = OperatorOptions.add
      state.number = state.records.reduce((prev, next) => {
        if (Object.keys(OperatorOptions).includes(next)) {
          currentOperator = OperatorOptions[next as OperatorType]
          return prev
        }
        return numeral(prev)[currentOperator](next).value()
      }, 0)
      state.records = []
      state.clearStamp = true
    },
    clear: (state) => {
      state.records = []
      state.number = 0
    },
    setOperator: (state, action: PayloadAction<OperatorOptions>) => {
      state.operator = action.payload
      state.clearStamp = true
    },
    insertPoint: (state) => {
      state.insertedPoint = true
    },
  },
})

export const {
  insert,
  clear,
  setOperator,
  equal,
  insertPoint,
} = calculatorSlice.actions
export default calculatorSlice.reducer
