'use client'

import { Select, SelectItem } from '@nextui-org/select'
import { cloneDeep } from 'lodash'
import set from 'lodash/set'

import { useTranslation } from '@/lib/config/i18n/client'
import useOptions from '@/lib/hooks/useOptions'

export default function CurrencySelect() {
  const { t } = useTranslation()
  const { options, setOptions } = useOptions()
  const currencies = [
    { value: 'rub', label: t('options_currency_select_value_rub') },
    { value: 'usd', label: t('options_currency_select_value_usd') },
    { value: 'eur', label: t('options_currency_select_value_eur') },
    {
      value: 'number',
      label: t('options_currency_select_value_number'),
    },
    {
      value: 'custom',
      label: t('options_currency_select_value_custom'),
    },
  ]

  return (
    <Select
      name="currency"
      label={t('options_currency_select_label')}
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
