import React from 'react';
import _ from 'lodash';
import objectsDiff from 'lib/functions/objectsDiff'

const defaultCurrencyObject = {
  currencyNameCases: ['рубль', 'рубля', 'рублей'],
  fractionalPartNameCases: ['копейка', 'копейки', 'копеек'],
  currencyNounGender: {
    integer: 0,
    fractionalPart: 1,
  },
  fractionalPartMinLength: 2,
};

const defaultModuleOptions = {
  currency: 'rub',
  roundNumber: -1,
  convertMinusSignToWord: true,
  showNumberParts: {
    integer: true,
    fractional: true,
  },
  convertNumbertToWords: {
    integer: true,
    fractional: false,
  },
  showCurrency: {
    integer: true,
    fractional: true,
  },
};

const defaultOptions = _.merge(_.cloneDeep(defaultModuleOptions), {
  customCurrency: _.cloneDeep(defaultCurrencyObject),
});

const optionsValuesTypeNumber = [
  'roundNumber',
  'currency.currencyNounGender.integer',
  'currency.currencyNounGender.fractionalPart',
  'currency.fractionalPartMinLength',
];

const optionsNamesMap = {
  'currency': 'currency',
  'custom-currency-integer1': 'customCurrency.currencyNameCases[0]',
  'custom-currency-integer2': 'customCurrency.currencyNameCases[1]',
  'custom-currency-integer3': 'customCurrency.currencyNameCases[2]',
  'custom-currency-fractional1': 'customCurrency.fractionalPartNameCases[0]',
  'custom-currency-fractional2': 'customCurrency.fractionalPartNameCases[1]',
  'custom-currency-fractional3': 'customCurrency.fractionalPartNameCases[2]',
  'custom-currency-form-integer': 'customCurrency.currencyNounGender.integer',
  'custom-currency-form-fractional': 'customCurrency.currencyNounGender.fractionalPart',
  'custom-currency-fractional-min-length': 'customCurrency.fractionalPartMinLength',
  'round-number': 'roundNumber',
  'convert-minus-sign': 'convertMinusSignToWord',
  'show-number-part-integer': 'showNumberParts.integer',
  'show-number-part-fractional': 'showNumberParts.fractional',
  'convert-number-part-integer': 'convertNumbertToWords.integer',
  'convert-number-part-fractional': 'convertNumbertToWords.fractional',
  'show-currency-part-integer': 'showCurrency.integer',
  'show-currency-part-fractional': 'showCurrency.fractional',
}

export const useModuleOptions = () => {
  const [options, setOptions] = React.useState(defaultOptions);
  const [optionsForModule, setOptionsForModule] = React.useState(defaultModuleOptions);
  const optionsDifferences = objectsDiff(defaultModuleOptions, optionsForModule);

  React.useEffect(() => {
    saveOptionsForModule(options);
  }, [options])

  const updateOptions = (event) => {
    const name = event.target.name;
    const value = getValue(event.target);
    const path = getOptionPath(name);
    (path !== null) && updateOptionValueByPath(path, value);
  };

  const getValue = (target) => {
    const type = target.type;
    let value = target.value;
    if (type === 'number') {
      value = checkValueRange(target);
    } else if (type === 'checkbox') {
      value = Boolean(target.checked);
    }
    return value;
  }

  const checkValueRange = (target) => {
    let value = target.value;
    if (value !== '') {
      if (target.min !== '') {
        value = Number(value) >= Number(target.min) ? value : target.min;
      }
      if (target.max !== '') {
        value = Number(value) <= Number(target.min) ? value : target.min;
      }
    }
    return value
  };

  const getOptionPath = (name) => {
    if (optionsNamesMap[name] !== undefined) {
      return optionsNamesMap[name];
    }
    return null;
  };

  const convertValuesToTypeNumber = (object, valuesPaths) => {
    let resultObject = _.cloneDeep(object);
    valuesPaths.some((path) => {
      const valueByPath = _.get(resultObject, path);
      if (valueByPath !== undefined) {
        resultObject = _.set(resultObject, path, Number(valueByPath));
      }
    })
    return resultObject
  }

  const updateOptionValueByPath = (path, newValue) => {
    let updatedOptions = _.cloneDeep(options);
    updatedOptions = _.set(updatedOptions, path, newValue);
    setOptions(updatedOptions);
  };

  const saveOptionsForModule = (options) => {
    let optionsResult = _.cloneDeep(options);
    delete optionsResult.customCurrency;
    if (options.currency === 'custom') {
      optionsResult.currency = options.customCurrency;
    }
    optionsResult = convertValuesToTypeNumber(optionsResult, optionsValuesTypeNumber);
    setOptionsForModule(optionsResult);
  };

  return {
    options,
    optionsForModule,
    optionsDifferences,
    updateOptions,
  }
}

export default useModuleOptions;
