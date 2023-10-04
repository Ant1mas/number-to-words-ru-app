import { Select, SelectItem } from '@nextui-org/select'

import useModuleOptions from '@/lib/config/redux/slices/moduleOptions/useModuleOptions'
import useI18n from '@/lib/hooks/useI18n'

type Props = {
  name: string
  numberPart: 'integer' | 'fractional'
}

export default function CurrencyForm({ name, numberPart }: Props) {
  const { options, updateOptions } = useModuleOptions()
  const { t } = useI18n()
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
        onChange={updateOptions}
      >
        {forms.map((form) => (
          <SelectItem key={form.value}>{form.label}</SelectItem>
        ))}
      </Select>
    </div>
  )
}
