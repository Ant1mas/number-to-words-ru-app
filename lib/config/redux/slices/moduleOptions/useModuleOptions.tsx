import React from 'react'
import cloneDeep from 'lodash/cloneDeep'
import get from 'lodash/get'
import set from 'lodash/set'

import { useAppSelector, useAppDispatch } from '@/lib/config/redux/store'
import {
  moduleOptionsSet,
  selectModuleOptions,
} from '@/lib/config/redux/slices/moduleOptions/moduleOptionsSlice'
import DEFAULT_MODULE_OPTIONS from '@/lib/constants/defaultModuleOptions'
import OPTIONS_NAMES_MAP from '@/lib/constants/optionsNamesMap'
import OPTIONS_VALUES_TYPE_NUMBER from '@/lib/constants/optionsValuesTypeNumber'
import OPTIONS_SYNCED_VALUES_MAP from '@/lib/constants/optionsSyncedValuesMap'
import objectsDiff from '@/lib/functions/objectsDiff'

export default function useModuleOptions() {
  const dispatch = useAppDispatch()
  const moduleOptions = useAppSelector(selectModuleOptions)
  const [formattedOptions, setFormattedOptions] = React.useState(
    DEFAULT_MODULE_OPTIONS,
  )
  const [optionsDifferences, setOptionsDifferences] = React.useState({})

  React.useEffect(() => {
    saveFormattedOptions(moduleOptions)
  }, [moduleOptions]) // eslint-disable-line

  React.useEffect(() => {
    setOptionsDifferences(objectsDiff(DEFAULT_MODULE_OPTIONS, formattedOptions))
  }, [formattedOptions]) // eslint-disable-line

  const updateOptions = (event: any) => {
    const name = event.target.name
    const value = getValue(event.target)
    updateOptionValueByPath(name, value)
  }

  const getValue = (target: any) => {
    const type = target.type
    let value = target.value
    if (type === 'number') {
      value = checkValueRange(target)
    } else if (type === 'checkbox') {
      value = Boolean(target.checked)
    }
    return value
  }

  const checkValueRange = (target: any) => {
    let value = target.value
    if (value !== '') {
      if (target.min !== '') {
        value = Number(value) >= Number(target.min) ? value : target.min
      }
      if (target.max !== '') {
        value = Number(value) <= Number(target.min) ? value : target.min
      }
    }
    return value
  }

  const updateOptionValueByPath = (name: string, newValue: string) => {
    const path = get(OPTIONS_NAMES_MAP, [name])
    if (path !== undefined) {
      let updatedOptions = cloneDeep(moduleOptions)
      updatedOptions = set(updatedOptions, path, newValue)
      updatedOptions = updateSyncedValues(updatedOptions, name, newValue)
      dispatch(moduleOptionsSet({ value: updatedOptions }))
    }
  }

  const updateSyncedValues = (
    optionsObject: any,
    name: string,
    newValue: string,
  ) => {
    const path = get(OPTIONS_SYNCED_VALUES_MAP, [name])
    if (path !== undefined) {
      let updatedOptions = cloneDeep(optionsObject)
      updatedOptions = set(updatedOptions, path, newValue)
      return updatedOptions
    }
    return optionsObject
  }

  const saveFormattedOptions = (options: any) => {
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
    options: moduleOptions,
    formattedOptions,
    optionsDifferences,
    updateOptions,
  }
}
