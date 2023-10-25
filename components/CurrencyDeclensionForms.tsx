'use client'

import { Input } from '@nextui-org/input'
import cloneDeep from 'lodash/cloneDeep'
import set from 'lodash/set'

import DEFAULT_CURRENCY_OBJECT from '@/lib/constants/defaultCurrencyObject'
import useOptions from '@/lib/hooks/useOptions'

import type { Dictionary } from '@/lib/config/i18n/functions/getDictionary'

type Props = {
  dictionary: Dictionary
  numberPart: 'integer' | 'fractional'
}

export default function CurrencyDeclensionForms({
  dictionary,
  numberPart,
}: Props) {
  const { options, setOptions } = useOptions()

  const currencyObjectName =
    numberPart === 'integer' ? 'currencyNameCases' : 'fractionalPartNameCases'
  const currencyObjectDeclensionName =
    numberPart === 'integer'
      ? 'currencyNameDeclensions'
      : 'fractionalPartNameDeclensions'

  const fieldsList = [0, 1, 2].map((listIndex) => {
    return (
      <div className="w-full py-2 sm:w-1/3 sm:px-1" key={listIndex}>
        <Input
          name={`custom-currency-${numberPart}${listIndex + 1}`}
          type="text"
          fullWidth
          variant="bordered"
          placeholder={DEFAULT_CURRENCY_OBJECT[currencyObjectName][listIndex]}
          label={
            dictionary.sectionOptions.customCurrency.digitGroups[listIndex]
          }
          value={options.customCurrency[currencyObjectName][listIndex]}
          onChange={(event) => {
            const value = event.target.value
            const updatedObject = cloneDeep(options)
            set(
              updatedObject,
              `customCurrency[${currencyObjectName}][${listIndex}]`,
              value,
            )
            set(
              updatedObject,
              `customCurrency[${currencyObjectDeclensionName}][${
                listIndex === 0 ? 'nominative' : 'genitive'
              }][${listIndex === 2 ? 1 : 0}]`,
              value,
            )
            setOptions(updatedObject)
          }}
        />
      </div>
    )
  })

  return <>{fieldsList}</>
}
