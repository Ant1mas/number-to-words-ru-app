import { Input } from '@nextui-org/input'

import DEFAULT_CURRENCY_OBJECT from '@/lib/constants/defaultCurrencyObject'
import useModuleOptions from '@/lib/config/redux/slices/moduleOptions/useModuleOptions'
import useI18n from '@/lib/hooks/useI18n'

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
      <div className="w-full py-2 sm:w-1/3 sm:px-1" key={listIndex}>
        <Input
          name={`custom-currency-${numberPart}${listIndex + 1}`}
          type="text"
          fullWidth
          variant="bordered"
          placeholder={DEFAULT_CURRENCY_OBJECT[currencyObjectName][listIndex]}
          label={t(`options_currency_custom_value_form${listIndex + 1}`)}
          value={options.customCurrency[currencyObjectName][listIndex]}
          onChange={updateOptions}
        />
      </div>
    )
  })

  return <>{fieldsList}</>
}
