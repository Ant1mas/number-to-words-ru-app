import { Input } from '@nextui-org/input'

import useModuleOptions from 'lib/config/redux/slices/moduleOptions/useModuleOptions'
import useI18n from 'lib/hooks/useI18n'
import LoadingText from 'components/LoadingText'
import DeclensionsFields from 'components/DeclensionsFields'
import CurrencyForm from 'components/CurrencyForm'
import CurrencyDeclensionForms from 'components/CurrencyDeclensionForms'

export default function CurrencyObjectOptions() {
  const { options, updateOptions } = useModuleOptions()
  const { t } = useI18n()

  return (
    <div className="my-1 border-l-2 border-primary/50 px-2">
      <div className="flex flex-wrap">
        <h5 className="w-full text-2xl">
          <LoadingText
            text={t('options_currency_custom_integer_block_title')}
            skeletonWidth={320}
            skeletonHeight={32}
          />
        </h5>
        <CurrencyDeclensionForms numberPart="integer" />
        <DeclensionsFields
          numberPart="integer"
          declensionsObjectName="currencyNameDeclensions"
        />
        <div className="w-full">
          <CurrencyForm
            name="custom-currency-form-integer"
            numberPart="integer"
          />
        </div>
        <h5 className="mt-4 w-full text-2xl">
          <LoadingText
            text={t('options_currency_custom_fractional_block_title')}
            skeletonWidth={320}
            skeletonHeight={32}
          />
        </h5>
        <CurrencyDeclensionForms numberPart="fractional" />
        <DeclensionsFields
          numberPart="fractional"
          declensionsObjectName="fractionalPartNameDeclensions"
        />
        <div className="w-full">
          <CurrencyForm
            name="custom-currency-form-fractional"
            numberPart="fractional"
          />
        </div>
        <h5 className="mt-4 w-full text-2xl">
          <LoadingText
            text={t('options_currency_custom_common_block_title')}
            skeletonWidth={320}
            skeletonHeight={32}
          />
        </h5>
        <div className="w-full">
          <Input
            name="custom-currency-fractional-min-length"
            type="number"
            fullWidth
            variant="bordered"
            placeholder="2"
            label={t('options_currency_fractionalPartMinLength')}
            min={0}
            value={options.customCurrency.fractionalPartMinLength.toString()}
            onChange={updateOptions}
          />
        </div>
      </div>
    </div>
  )
}
