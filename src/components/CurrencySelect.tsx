import React from 'react'

import InputSelect from 'components/InputSelect'
import { useModuleOptions } from 'features/moduleOptions/useModuleOptions'
import useI18n from 'lib/hooks/useI18n'

type Props = {}

export default function CurrencySelect({}: Props) {
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
