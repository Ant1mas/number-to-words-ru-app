import React from 'react'
import _ from 'lodash'
import objectsDiff from 'lib/functions/objectsDiff'
import DEFAULT_MODULE_OPTIONS from 'lib/constants/defaultModuleOptions'
import DEFAULT_CURRENCY_OBJECT from 'lib/constants/defaultCurrencyObject'
import OPTIONS_NAMES_MAP from 'lib/constants/optionsNamesMap'
import OPTIONS_VALUES_TYPE_NUMBER from 'lib/constants/optionsValuesTypeNumber'
import OPTIONS_SYNCED_VALUES_MAP from 'lib/constants/optionsSyncedValuesMap'

const defaultOptions = _.merge(_.cloneDeep(DEFAULT_MODULE_OPTIONS), {
  customCurrency: _.cloneDeep(DEFAULT_CURRENCY_OBJECT),
})

export function useModuleOptions() {
  const [options, setOptions] = React.useState(defaultOptions)
  const [optionsForModule, setOptionsForModule] = React.useState(
    DEFAULT_MODULE_OPTIONS
  )
  const optionsDifferences = objectsDiff(
    DEFAULT_MODULE_OPTIONS,
    optionsForModule
  )

  React.useEffect(() => {
    saveOptionsForModule(options)
  }, [options])

  const updateOptions = (event) => {
    const name = event.target.name
    const value = getValue(event.target)
    updateOptionValueByPath(name, value)
  }

  const getValue = (target) => {
    const type = target.type
    let value = target.value
    if (type === 'number') {
      value = checkValueRange(target)
    } else if (type === 'checkbox') {
      value = Boolean(target.checked)
    }
    return value
  }

  const checkValueRange = (target) => {
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

  const convertValuesToTypeNumber = (object, valuesPaths) => {
    let resultObject = _.cloneDeep(object)
    valuesPaths.some((path) => {
      const valueByPath = _.get(resultObject, path)
      if (valueByPath !== undefined) {
        resultObject = _.set(resultObject, path, Number(valueByPath))
      }
    })
    return resultObject
  }

  const updateSyncedValues = (optionsObject, name, newValue) => {
    const path = _.get(OPTIONS_SYNCED_VALUES_MAP, [name])
    if (path !== undefined) {
      let updatedOptions = _.cloneDeep(optionsObject)
      updatedOptions = _.set(updatedOptions, path, newValue)
      return updatedOptions
    }
    return optionsObject
  }

  const updateOptionValueByPath = (name, newValue) => {
    const path = _.get(OPTIONS_NAMES_MAP, [name])
    if (path !== undefined) {
      let updatedOptions = _.cloneDeep(options)
      updatedOptions = _.set(updatedOptions, path, newValue)
      updatedOptions = updateSyncedValues(updatedOptions, name, newValue)
      setOptions(updatedOptions)
    }
  }

  const saveOptionsForModule = (options) => {
    let optionsResult = _.cloneDeep(options)
    delete optionsResult.customCurrency
    if (options.currency === 'custom') {
      optionsResult.currency = options.customCurrency
    }
    optionsResult = convertValuesToTypeNumber(
      optionsResult,
      OPTIONS_VALUES_TYPE_NUMBER
    )
    setOptionsForModule(optionsResult)
  }

  return {
    options,
    optionsForModule,
    optionsDifferences,
    updateOptions,
  }
}

export default useModuleOptions
