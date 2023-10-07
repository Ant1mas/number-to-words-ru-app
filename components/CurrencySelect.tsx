'use client'

import { Select, SelectItem } from '@nextui-org/select'

import { useTranslation } from '@/lib/config/i18n/client'
import useModuleOptions from '@/lib/config/redux/slices/moduleOptions/useModuleOptions'

export default function CurrencySelect() {
  const { options, updateOptions } = useModuleOptions()
  const { t } = useTranslation()
  const currencies = [
    { value: 'rub', label: t('options_currency_select_value_rub', '...') },
    { value: 'usd', label: t('options_currency_select_value_usd', '...') },
    { value: 'eur', label: t('options_currency_select_value_eur', '...') },
    {
      value: 'number',
      label: t('options_currency_select_value_number', '...'),
    },
    {
      value: 'custom',
      label: t('options_currency_select_value_custom', '...'),
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
      onSelectionChange={(selected: any) => {
        selected.forEach((element: string) => {
          updateOptions({
            target: { name: 'currency', value: element, type: 'text' },
          })
        })
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
