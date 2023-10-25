'use client'

import { Select, SelectItem } from '@nextui-org/select'
import { cloneDeep } from 'lodash'
import set from 'lodash/set'

import useOptions from '@/lib/hooks/useOptions'

import type { Dictionary } from '@/lib/config/i18n/functions/getDictionary'

type Props = {
  dictionary: Dictionary
}

export default function CurrencySelect({ dictionary }: Props) {
  const { options, setOptions } = useOptions()
  const currencies = [
    { value: 'rub', label: dictionary.sectionOptions.currencySelect.rub },
    { value: 'usd', label: dictionary.sectionOptions.currencySelect.usd },
    { value: 'eur', label: dictionary.sectionOptions.currencySelect.eur },
    {
      value: 'number',
      label: dictionary.sectionOptions.currencySelect.number,
    },
    {
      value: 'custom',
      label: dictionary.sectionOptions.currencySelect.custom,
    },
  ]

  return (
    <Select
      name="currency"
      label={dictionary.sectionOptions.currencyLabel}
      variant="bordered"
      selectedKeys={[options.currency as string]}
      fullWidth
      disallowEmptySelection={true}
      selectionMode="single"
      onChange={(event) => {
        const value = event.target.value
        setOptions(set(cloneDeep(options), 'currency', value))
      }}
    >
      {currencies.map((currency) => (
        <SelectItem key={currency.value} value={currency.value}>
          {currency.label}
        </SelectItem>
      ))}
    </Select>
  )
}
