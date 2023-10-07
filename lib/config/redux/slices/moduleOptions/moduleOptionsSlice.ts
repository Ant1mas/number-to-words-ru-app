import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import set from 'lodash/set'

import type { AppState } from '@/lib/config/redux/store'
import DEFAULT_CURRENCY_OBJECT from '@/lib/constants/defaultCurrencyObject'
import DEFAULT_MODULE_OPTIONS from '@/lib/constants/defaultModuleOptions'

const moduleOptionsAdapter = createEntityAdapter()

const initialState = moduleOptionsAdapter.getInitialState({
  object: {
    ...DEFAULT_MODULE_OPTIONS,
    customCurrency: DEFAULT_CURRENCY_OBJECT,
  },
})

const moduleOptionsSlice = createSlice({
  name: 'moduleOptions',
  initialState,
  reducers: {
    moduleOptionsUpdated(state, action) {
      set(state.object, action.payload.path, action.payload.value)
    },
    moduleOptionsSet(state, action) {
      state.object = action.payload.value
    },
  },
})

export const { moduleOptionsUpdated, moduleOptionsSet } =
  moduleOptionsSlice.actions

export default moduleOptionsSlice.reducer

export const selectModuleOptions = (state: AppState) =>
  state.moduleOptions.object
