'use client'

import clsx from 'clsx'
import { Input } from '@nextui-org/input'

import useModuleOptions from '@/lib/config/redux/slices/moduleOptions/useModuleOptions'
import DEFAULT_CURRENCY_OBJECT from '@/lib/constants/defaultCurrencyObject'
import { useTranslation } from '@/lib/config/i18n/client'

type numberParts = 'integer' | 'fractional'

type declensionsObjectName =
  | 'currencyNameDeclensions'
  | 'fractionalPartNameDeclensions'

type Props = {
  numberPart: numberParts
  declensionsObjectName: declensionsObjectName
}

export default function DeclensionsFields({
  numberPart = 'integer',
  declensionsObjectName = 'currencyNameDeclensions',
}: Props) {
  const { options, updateOptions } = useModuleOptions()
  const { t } = useTranslation()

  const declensions = Object.keys(
    DEFAULT_CURRENCY_OBJECT.currencyNameDeclensions,
  )
  let fieldsObjects: any[] = []
  declensions.forEach((declension) => {
    fieldsObjects.push(
      {
        declension: declension,
        form: 'singular',
      },
      {
        declension: declension,
        form: 'plural',
      },
    )
  })
  const fieldsJSX = fieldsObjects.map((fieldObject) => {
    const disabled =
      (fieldObject.declension === 'nominative' &&
        fieldObject.form === 'plural') ||
      (fieldObject.declension === 'accusative' && fieldObject.form === 'plural')
        ? true
        : false
    let value: any =
      // @ts-ignore
      options.customCurrency[declensionsObjectName][fieldObject.declension][
        fieldObject.form === 'singular' ? 0 : 1
      ]
    if (disabled) {
      value = t('options_currency_custom_value_declension_disabled', '')
    }
    let selected = false
    if (
      fieldObject.declension === 'nominative' &&
      fieldObject.form === 'singular'
    ) {
      selected = options.declension === 'nominative' ? true : false
    } else if (
      fieldObject.declension === 'genitive' &&
      fieldObject.form === 'singular'
    ) {
      selected =
        options.declension === 'nominative' ||
        options.declension === 'genitive' ||
        options.declension === 'accusative'
          ? true
          : false
    } else if (
      fieldObject.declension === 'genitive' &&
      fieldObject.form === 'plural'
    ) {
      selected = true
    } else if (fieldObject.declension === 'dative') {
      selected = options.declension === 'dative' ? true : false
    } else if (
      fieldObject.declension === 'accusative' &&
      fieldObject.form === 'singular'
    ) {
      selected = options.declension === 'accusative' ? true : false
    } else if (fieldObject.declension === 'instrumental') {
      selected = options.declension === 'instrumental' ? true : false
    } else if (fieldObject.declension === 'prepositional') {
      selected = options.declension === 'prepositional' ? true : false
    }

    return (
      <div
        className="w-full py-2 sm:w-1/2 sm:px-1"
        key={`${fieldObject.declension}-${fieldObject.form}`}
      >
        <Input
          name={`custom-currency-${numberPart}-declension-${fieldObject.declension}-${fieldObject.form}`}
          type="text"
          fullWidth
          variant="bordered"
          placeholder={
            // @ts-ignore
            DEFAULT_CURRENCY_OBJECT[declensionsObjectName][
              fieldObject.declension
            ][fieldObject.form === 'singular' ? 0 : 1]
          }
          label={t(
            `options_currency_custom_value_declension_${fieldObject.declension}_${fieldObject.form}`,
          )}
          description={
            selected ? t('options_currency_custom_value_declension_used') : ''
          }
          value={value}
          onChange={updateOptions}
          isDisabled={disabled}
          className={clsx(selected && 'text-primary')}
        />
      </div>
    )
  })

  return <>{fieldsJSX}</>
}
