import InputSelect from 'components/InputSelect'
import { useModuleOptions } from 'lib/config/redux/slices/moduleOptions/useModuleOptions'
import useI18n from 'lib/hooks/useI18n'

export default function CurrencySelect() {
  const { options, updateOptions } = useModuleOptions()
  const { t } = useI18n()

  return (
    <InputSelect
      name="currency"
      label={t('options_currency_select_label')}
      fullWidth
      value={options.currency as string}
      onChange={updateOptions}
      items={[
        { value: 'rub', name: t('options_currency_select_value_rub') },
        { value: 'usd', name: t('options_currency_select_value_usd') },
        { value: 'eur', name: t('options_currency_select_value_eur') },
        {
          value: 'number',
          name: t('options_currency_select_value_number'),
        },
        {
          value: 'custom',
          name: t('options_currency_select_value_custom'),
        },
      ]}
    />
  )
}
