import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import moduleNumberReducer from 'lib/config/redux/slices/moduleNumber/moduleNumberSlice'
import moduleOptionsReducer from 'lib/config/redux/slices/moduleOptions/moduleOptionsSlice'

const store = configureStore({
  reducer: {
    moduleNumber: moduleNumberReducer,
    moduleOptions: moduleOptionsReducer,
  },
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

export default store
