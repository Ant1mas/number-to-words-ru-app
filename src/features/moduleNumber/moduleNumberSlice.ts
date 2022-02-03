import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

import type { AppState } from 'app/store'

const moduleNumberAdapter = createEntityAdapter()

const initialState = moduleNumberAdapter.getInitialState({
  number: '-18451302.01',
})

const moduleNumberSlice = createSlice({
  name: 'moduleNumber',
  initialState,
  reducers: {
    moduleNumberUpdated(state, action) {
      const newNumber = action.payload.replace(/[^\d.,/-]/g, '')
      state.number = newNumber
    },
  },
})

export const { moduleNumberUpdated } = moduleNumberSlice.actions

export default moduleNumberSlice.reducer

export const selectModuleNumber = (state: AppState) => state.moduleNumber.number
