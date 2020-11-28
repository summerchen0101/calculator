import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import numeral from 'numeral'

type OperatorType = 'add' | 'subtract'
interface IState {
  records: string[]
  number: number
  operator: OperatorType
}
const initialState: IState = {
  records: [],
  number: 0,
  operator: 'add',
}

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    insert: (state, action: PayloadAction<string>) => {
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
      state.operator = 'add'
      state.number = 0
    },
    setOperator: (state, action: PayloadAction<OperatorType>) => {
      state.records.push(state.number.toString())
      state.records.push(action.payload)
      state.number = 0
    },
  },
})

export const { insert, clear, setOperator, equal } = calculatorSlice.actions
export default calculatorSlice.reducer
