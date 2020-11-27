import { createSlice } from '@reduxjs/toolkit'

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
})

export default calculatorSlice.reducer
