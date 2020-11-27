import { combineReducers } from '@reduxjs/toolkit'
import calculatorReducer from './reducers/calculatorReducer'

const rootReducer = combineReducers({
  calculator: calculatorReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
