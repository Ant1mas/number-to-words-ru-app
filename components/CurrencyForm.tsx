import  useModuleOptions from 'lib/config/redux/slices/moduleOptions/useModuleOptions'
import useI18n from 'lib/hooks/useI18n'
import InputSelect from 'components/InputSelect'

type Props = {
  name: string
  numberPart: 'integer' | 'fractional'
}

export default function CurrencyForm({ name, numberPart }: Props) {
  const { options, updateOptions } = useModuleOptions()
  const { t } = useI18n()
  const numberPartObjectName =
    numberPart === 'integer' ? 'integer' : 'fractionalPart'

  return (
    <InputSelect
      name={name}
      fullWidth
      label={t('options_currency_custom_value_currency_name_form')}
      value={options.customCurrency.currencyNounGender[numberPartObjectName]}
      items={[
        {
          value: 0,
          name: t('options_currency_custom_value_word_form1'),
        },
        {
          value: 1,
          name: t('options_currency_custom_value_word_form2'),
        },
        {
          value: 2,
          name: t('options_currency_custom_value_word_form3'),
        },
      ]}
      onChange={updateOptions}
    />
  )
}
