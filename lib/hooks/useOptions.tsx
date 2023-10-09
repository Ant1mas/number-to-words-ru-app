import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'

import { optionsAtom } from '@/lib/config/jotai/optionsAtom'
import { DEFAULT_MODULE_OPTIONS } from '@/lib/constants/defaultModuleOptions'
import OPTIONS_VALUES_TYPE_NUMBER from '@/lib/constants/optionsValuesTypeNumber'
import objectsDiff from '@/lib/functions/objectsDiff'
import cloneDeep from 'lodash/cloneDeep'
import get from 'lodash/get'
import set from 'lodash/set'

export default function useOptions() {
  const [optionsJotai, setOptionsJotai] = useAtom(optionsAtom)
  const [formattedOptions, setFormattedOptions] = useState(undefined)
  const [optionsDifferences, setOptionsDifferences] = useState({})

  useEffect(() => {
    formatOptions(optionsJotai)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(optionsJotai)])

  useEffect(() => {
    setOptionsDifferences(objectsDiff(DEFAULT_MODULE_OPTIONS, formattedOptions))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(formattedOptions)])

  const formatOptions = (options: any) => {
    let optionsResult = cloneDeep(options)
    delete optionsResult.customCurrency
    if (options.currency === 'custom') {
      optionsResult.currency = options.customCurrency
    }
    optionsResult = convertValuesToTypeNumber(
      optionsResult,
      OPTIONS_VALUES_TYPE_NUMBER,
    )
    setFormattedOptions(optionsResult)
  }

  const convertValuesToTypeNumber = (object: any, valuesPaths: any) => {
    let resultObject = cloneDeep(object)
    valuesPaths.some((path: any) => {
      const valueByPath = get(resultObject, path)
      if (valueByPath !== undefined) {
        resultObject = set(resultObject, path, Number(valueByPath))
      }
    })
    return resultObject
  }

  return {
    options: optionsJotai,
    formattedOptions,
    optionsDifferences,
    setOptions: setOptionsJotai,
  }
}
