import { Select, SelectItem } from '@nextui-org/select'

import useModuleOptions from 'lib/config/redux/slices/moduleOptions/useModuleOptions'
import useI18n from 'lib/hooks/useI18n'

export default function CurrencySelect() {
  const { options, updateOptions } = useModuleOptions()
  const { t } = useI18n()
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
      items={currencies}
      label={t('options_currency_select_label')}
      variant="bordered"
      selectedKeys={[options.currency as string]}
      className="w-full"
      onSelectionChange={(selected: any) => {
        selected.forEach((element) => {
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
