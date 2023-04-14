import DEFAULT_CURRENCY_OBJECT from 'lib/constants/defaultCurrencyObject'
import useModuleOptions from 'lib/config/redux/slices/moduleOptions/useModuleOptions'
import useI18n from 'lib/hooks/useI18n'
import InputField from 'components/InputField'

type Props = {
  numberPart: 'integer' | 'fractional'
}

export default function CurrencyDeclensionForms({ numberPart }: Props) {
  const { options, updateOptions } = useModuleOptions()
  const { t } = useI18n()

  const currencyObjectName =
    numberPart === 'integer' ? 'currencyNameCases' : 'fractionalPartNameCases'

  const fieldsList = [0, 1, 2].map((listIndex) => {
    return (
      <div className="w-full sm:w-1/3 sm:px-1" key={listIndex}>
        <InputField
          name={`custom-currency-${numberPart}${listIndex + 1}`}
          label={t(`options_currency_custom_value_form${listIndex + 1}`)}
          placeholder={DEFAULT_CURRENCY_OBJECT[currencyObjectName][listIndex]}
          value={options.customCurrency[currencyObjectName][listIndex]}
          onChange={updateOptions}
        />
      </div>
    )
  })

  return <>{fieldsList}</>
}
