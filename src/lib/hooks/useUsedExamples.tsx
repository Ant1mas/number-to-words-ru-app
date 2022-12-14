import React from 'react'
import cloneDeep from 'lodash/cloneDeep'
import merge from 'lodash/merge'

import { useAppSelector, useAppDispatch } from 'src/app/store'
import { moduleNumberUpdated } from 'features/moduleNumber/moduleNumberSlice'
import {
  moduleOptionsSet,
  selectModuleOptions,
} from 'features/moduleOptions/moduleOptionsSlice'
import USAGE_EXAMPLES_LIST from 'lib/constants/usageExamplesList'
import DEFAULT_MODULE_OPTIONS from 'lib/constants/defaultModuleOptions'
import DEFAULT_CURRENCY_OBJECT from 'lib/constants/defaultCurrencyObject'

type usageExampleNames =
  | 'justNumber'
  | 'fractionalNumber'
  | 'users'
  | 'messages'
  | 'rubles'
  | 'currencyNumber'

export function useUsedExamples() {
  const dispatch = useAppDispatch()
  const moduleOptions = useAppSelector(selectModuleOptions)
  const [selectedExample, setSelectedExample] = React.useState('')
  const [optionsUpdatedByHook, setOptionsUpdatedByHook] = React.useState(false)

  // Reset select field value if options have changed
  React.useEffect(() => {
    if (optionsUpdatedByHook) {
      setOptionsUpdatedByHook(false)
    } else {
      setSelectedExample('')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moduleOptions])

  const applyExample = (usageExampleName: usageExampleNames) => {
    const usageExampleObject = USAGE_EXAMPLES_LIST[usageExampleName]
    if (usageExampleObject) {
      dispatch(moduleNumberUpdated(usageExampleObject.moduleNumber))
      const defaultOptionsObject = merge(cloneDeep(DEFAULT_MODULE_OPTIONS), {
        customCurrency: DEFAULT_CURRENCY_OBJECT,
      })
      const updatedOptions = merge(
        cloneDeep(defaultOptionsObject),
        usageExampleObject.moduleOptions
      )
      dispatch(moduleOptionsSet({ value: updatedOptions }))
      setSelectedExample(usageExampleName)
      setOptionsUpdatedByHook(true)
    }
  }

  return {
    selectedExample,
    applyExample,
  }
}

export default useUsedExamples
