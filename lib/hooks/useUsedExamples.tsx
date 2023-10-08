import { useAtom } from 'jotai'
import cloneDeep from 'lodash/cloneDeep'
import merge from 'lodash/merge'
import { useEffect, useState } from 'react'

import { formatNumber, numberAtom } from '@/lib/config/jotai/numberAtom'
import DEFAULT_CURRENCY_OBJECT from '@/lib/constants/defaultCurrencyObject'
import DEFAULT_MODULE_OPTIONS from '@/lib/constants/defaultModuleOptions'
import USAGE_EXAMPLES_LIST from '@/lib/constants/usageExamplesList'
import useOptions from '@/lib/hooks/useOptions'

type UsageExampleNames =
  | 'justNumber'
  | 'fractionalNumber'
  | 'users'
  | 'messages'
  | 'rubles'
  | 'currencyNumber'

export default function useUsedExamples() {
  const [selectedExample, setSelectedExample] = useState('')
  const [optionsUpdatedByHook, setOptionsUpdatedByHook] = useState(false)
  const [, setNumber] = useAtom(numberAtom)
  const { options, setOptions } = useOptions()

  // Reset select field value if options have changed
  useEffect(() => {
    if (optionsUpdatedByHook) {
      setOptionsUpdatedByHook(false)
    } else {
      setSelectedExample('')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options])

  const applyExample = (usageExampleName: UsageExampleNames) => {
    const usageExampleObject = USAGE_EXAMPLES_LIST[usageExampleName]
    if (usageExampleObject) {
      setNumber(formatNumber(usageExampleObject.moduleNumber))
      const defaultOptionsObject = merge(cloneDeep(DEFAULT_MODULE_OPTIONS), {
        customCurrency: DEFAULT_CURRENCY_OBJECT,
      })
      const updatedOptions = merge(
        cloneDeep(defaultOptionsObject),
        usageExampleObject.moduleOptions,
      )
      setOptions(updatedOptions)
      setSelectedExample(usageExampleName)
      setOptionsUpdatedByHook(true)
    }
  }
  
  return {
    selectedExample,
    applyExample,
  }
}
