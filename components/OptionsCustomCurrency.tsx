'use client'

import CurrencyDeclensionForms from '@/components/CurrencyDeclensionForms'
import CurrencyForm from '@/components/CurrencyForm'
import DeclensionsFields from '@/components/DeclensionsFields'
import OptionCustomFractionalMinLen from '@/components/OptionCustomFractionalMinLen'
import { useTranslation } from '@/lib/config/i18n/client'
import useModuleOptions from '@/lib/config/redux/slices/moduleOptions/useModuleOptions'

export default function OptionsCustomCurrency() {
  const { t } = useTranslation()
  const options: any = useModuleOptions().options

  if (options.currency !== 'custom') return null

  return (
    <div className="w-full py-2">
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
    </div>
  )
}
