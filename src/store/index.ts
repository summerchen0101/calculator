import { AnyAction, configureStore, ThunkDispatch } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import rootReducer from './rootReducer'

export const useAppDispatch = () =>
  useDispatch<ThunkDispatch<unknown, unknown, AnyAction>>()

export default configureStore({
  reducer: rootReducer,
})
