'use client'

import { Select, SelectItem } from '@nextui-org/select'
import cloneDeep from 'lodash/cloneDeep'
import set from 'lodash/set'

import useOptions from '@/lib/hooks/useOptions'

import type { Dictionary } from '@/lib/config/i18n/functions/getDictionary'

type Props = {
  dictionary: Dictionary
  name: string
  numberPart: 'integer' | 'fractional'
}

export default function CurrencyForm({ dictionary, name, numberPart }: Props) {
  const { options, setOptions } = useOptions()
  const numberPartObjectName =
    numberPart === 'integer' ? 'integer' : 'fractionalPart'
  const forms = [
    {
      value: '0',
      label:
        dictionary.sectionOptions.customCurrency.currencyNameForms.array[0],
    },
    {
      value: '1',
      label:
        dictionary.sectionOptions.customCurrency.currencyNameForms.array[1],
    },
    {
      value: '2',
      label:
        dictionary.sectionOptions.customCurrency.currencyNameForms.array[2],
    },
  ]

  return (
    <div className="py-2">
      <Select
        name={name}
        label={dictionary.sectionOptions.customCurrency.currencyNameForms.label}
        variant="bordered"
        fullWidth
        selectionMode="single"
        selectedKeys={[
          options.customCurrency.currencyNounGender[
            numberPartObjectName
          ].toString(),
        ]}
        onChange={(event) => {
          const value = event.target.value
          setOptions(
            set(
              cloneDeep(options),
              `customCurrency.currencyNounGender[${numberPartObjectName}]`,
              value,
            ),
          )
        }}
      >
        {forms.map((form) => (
          <SelectItem key={form.value}>{form.label}</SelectItem>
        ))}
      </Select>
    </div>
  )
}
