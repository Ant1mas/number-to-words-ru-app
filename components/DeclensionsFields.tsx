'use client'

import { Input } from '@nextui-org/input'
import clsx from 'clsx'

import DEFAULT_CURRENCY_OBJECT from '@/lib/constants/defaultCurrencyObject'
import useOptions from '@/lib/hooks/useOptions'
import cloneDeep from 'lodash/cloneDeep'
import set from 'lodash/set'

import type { Dictionary } from '@/lib/config/i18n/functions/getDictionary'
import type { Declension } from '@/lib/types/Declension'

type NumberParts = 'integer' | 'fractional'
type FieldObject = {
  form: 'singular' | 'plural'
  declension: Declension
}

type declensionsObjectName =
  | 'currencyNameDeclensions'
  | 'fractionalPartNameDeclensions'

type Props = {
  dictionary: Dictionary
  numberPart: NumberParts
  declensionsObjectName: declensionsObjectName
}

export default function DeclensionsFields({
  dictionary,
  numberPart = 'integer',
  declensionsObjectName = 'currencyNameDeclensions',
}: Props) {
  const { options, setOptions } = useOptions()

  const objectNameCurrencyNameCases =
    numberPart === 'integer' ? 'currencyNameCases' : 'fractionalPartNameCases'
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
  const fieldsJSX = fieldsObjects.map((fieldObject: FieldObject) => {
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
      value = dictionary.sectionOptions.customCurrency.declensions.useless
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

    const declensionFormIndex: 0 | 1 = fieldObject.form === 'singular' ? 0 : 1

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
            ][declensionFormIndex]
          }
          label={
            dictionary.sectionOptions.customCurrency.declensions[
              fieldObject.form
            ][fieldObject.declension]
          }
          description={
            selected
              ? dictionary.sectionOptions.customCurrency.declensions.used
              : ''
          }
          value={value}
          onChange={(event) => {
            const value = event.target.value
            const updatedObject = cloneDeep(options)
            set(
              updatedObject,
              `customCurrency[${declensionsObjectName}][${fieldObject.declension}][${declensionFormIndex}]`,
              value,
            )
            if (
              fieldObject.declension === 'nominative' &&
              declensionFormIndex === 0
            ) {
              set(
                updatedObject,
                `customCurrency[${objectNameCurrencyNameCases}][0]`,
                value,
              )
            }
            if (
              fieldObject.declension === 'genitive' &&
              declensionFormIndex === 0
            ) {
              set(
                updatedObject,
                `customCurrency[${objectNameCurrencyNameCases}][1]`,
                value,
              )
            }
            if (
              fieldObject.declension === 'genitive' &&
              declensionFormIndex === 1
            ) {
              set(
                updatedObject,
                `customCurrency[${objectNameCurrencyNameCases}][2]`,
                value,
              )
            }
            setOptions(updatedObject)
          }}
          isDisabled={disabled}
          className={clsx(selected && 'text-primary')}
        />
      </div>
    )
  })

  return <>{fieldsJSX}</>
}
