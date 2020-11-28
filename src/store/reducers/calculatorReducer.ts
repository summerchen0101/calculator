import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import numeral from 'numeral'

type OperatorType = 'add' | 'subtract'
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
  operator: 'add',
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
      let currentOperator: OperatorType = 'add'
      state.number = state.records.reduce((prev, next) => {
        if (next === 'add' || next === 'subtract') {
          currentOperator = next
          return prev
        }
        return numeral(prev)[currentOperator](next).value()
      }, 0)
      state.records = []
    },
    clear: (state) => {
      state.records = []
      state.number = 0
    },
    setOperator: (state, action: PayloadAction<OperatorType>) => {
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
