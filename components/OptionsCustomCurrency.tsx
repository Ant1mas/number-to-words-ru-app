'use client'

import CurrencyDeclensionForms from '@/components/CurrencyDeclensionForms'
import CurrencyForm from '@/components/CurrencyForm'
import DeclensionsFields from '@/components/DeclensionsFields'
import OptionCustomFractionalMinLen from '@/components/OptionCustomFractionalMinLen'
import useOptions from '@/lib/hooks/useOptions'

import type { Dictionary } from '@/lib/config/i18n/functions/getDictionary'

type Props = {
  dictionary: Dictionary
}

export default function OptionsCustomCurrency({ dictionary }: Props) {
  const { options }: { options: any } = useOptions()

  if (options.currency !== 'custom') return null

  return (
    <div className="w-full py-2">
      <div className="my-1 border-l-2 border-primary/50 px-2">
        <div className="flex flex-wrap">
          <h5 className="w-full text-2xl">
            {dictionary.sectionOptions.customCurrency.blocks.integerBlockTitle}
          </h5>
          <CurrencyDeclensionForms
            dictionary={dictionary}
            numberPart="integer"
          />
          <DeclensionsFields
            dictionary={dictionary}
            numberPart="integer"
            declensionsObjectName="currencyNameDeclensions"
          />
          <div className="w-full">
            <CurrencyForm
              dictionary={dictionary}
              name="custom-currency-form-integer"
              numberPart="integer"
            />
          </div>
          <h5 className="mt-4 w-full text-2xl">
            {
              dictionary.sectionOptions.customCurrency.blocks
                .fractionalBlockTitle
            }
          </h5>
          <CurrencyDeclensionForms
            dictionary={dictionary}
            numberPart="fractional"
          />
          <DeclensionsFields
            dictionary={dictionary}
            numberPart="fractional"
            declensionsObjectName="fractionalPartNameDeclensions"
          />
          <div className="w-full">
            <CurrencyForm
              dictionary={dictionary}
              name="custom-currency-form-fractional"
              numberPart="fractional"
            />
          </div>
          <h5 className="mt-4 w-full text-2xl">
            {dictionary.sectionOptions.customCurrency.blocks.generalBlockTitle}
          </h5>
          <div className="w-full">
            <OptionCustomFractionalMinLen dictionary={dictionary} />
          </div>
        </div>
      </div>
    </div>
  )
}
