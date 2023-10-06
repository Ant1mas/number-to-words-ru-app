import { useTranslation } from '@/lib/config/i18n/server'
import DeclensionsFields from '@/components/DeclensionsFields'
import CurrencyForm from '@/components/CurrencyForm'
import CurrencyDeclensionForms from '@/components/CurrencyDeclensionForms'
import OptionCustomFractionalMinLen from '@/components/OptionCustomFractionalMinLen'

export default async function CurrencyObjectOptions() {
  const { t } = await useTranslation()

  return (
    <div className="my-1 border-l-2 border-primary/50 px-2">
      <div className="flex flex-wrap">
        <h5 className="w-full text-2xl">
          {t('options_currency_custom_integer_block_title')}
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
          {t('options_currency_custom_fractional_block_title')}
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
          {t('options_currency_custom_common_block_title')}
        </h5>
        <div className="w-full">
          <OptionCustomFractionalMinLen />
        </div>
      </div>
    </div>
  )
}
