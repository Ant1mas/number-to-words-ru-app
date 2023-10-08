'use client'

import { Select, SelectItem } from '@nextui-org/select'
import cloneDeep from 'lodash/cloneDeep'
import set from 'lodash/set'

import { useTranslation } from '@/lib/config/i18n/client'
import useOptions from '@/lib/hooks/useOptions'

type Props = {
  name: string
  numberPart: 'integer' | 'fractional'
}

export default function CurrencyForm({ name, numberPart }: Props) {
  const { t } = useTranslation()
  const { options, setOptions } = useOptions()
  const numberPartObjectName =
    numberPart === 'integer' ? 'integer' : 'fractionalPart'
  const forms = [
    {
      value: '0',
      label: t('options_currency_custom_value_word_form1', '...'),
    },
    {
      value: '1',
      label: t('options_currency_custom_value_word_form2', '...'),
    },
    {
      value: '2',
      label: t('options_currency_custom_value_word_form3', '...'),
    },
  ]

  return (
    <div className="py-2">
      <Select
        name={name}
        label={t('options_currency_custom_value_currency_name_form')}
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
