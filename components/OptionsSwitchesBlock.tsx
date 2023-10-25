'use client'

import { Switch } from '@nextui-org/switch'

import useOptions from '@/lib/hooks/useOptions'
import cloneDeep from 'lodash/cloneDeep'
import set from 'lodash/set'

import type { Dictionary } from '@/lib/config/i18n/functions/getDictionary'

type Props = {
  dictionary: Dictionary
}

export default function OptionsSwitchesBlock({ dictionary }: Props) {
  const { options, setOptions } = useOptions()

  return (
    <>
      <div className="p-1">
        <Switch
          name="convert-minus-sign"
          isSelected={options.convertMinusSignToWord}
          onChange={(event: any) => {
            const checked: boolean = event.target.checked
            setOptions(
              set(cloneDeep(options), 'convertMinusSignToWord', checked),
            )
          }}
        >
          {dictionary.sectionOptions.switches.convertSignMinus}
        </Switch>
      </div>
      <div className="p-1">
        <Switch
          name="show-number-part-integer"
          isSelected={options.showNumberParts?.integer}
          onChange={(event: any) => {
            const checked: boolean = event.target.checked
            setOptions(
              set(cloneDeep(options), 'showNumberParts.integer', checked),
            )
          }}
        >
          {dictionary.sectionOptions.switches.showIntegerPart}
        </Switch>
      </div>
      <div className="p-1">
        <Switch
          name="show-number-part-fractional"
          isSelected={options.showNumberParts?.fractional}
          onChange={(event: any) => {
            const checked: boolean = event.target.checked
            setOptions(
              set(cloneDeep(options), 'showNumberParts.fractional', checked),
            )
          }}
        >
          {dictionary.sectionOptions.switches.showFractionalPart}
        </Switch>
      </div>
      <div className="p-1">
        <Switch
          name="convert-number-part-integer"
          isSelected={options.convertNumberToWords?.integer}
          onChange={(event: any) => {
            const checked: boolean = event.target.checked
            setOptions(
              set(cloneDeep(options), 'convertNumberToWords.integer', checked),
            )
          }}
        >
          {dictionary.sectionOptions.switches.convertIntegerPart}
        </Switch>
      </div>
      <div className="p-1">
        <Switch
          name="convert-number-part-fractional"
          isSelected={options.convertNumberToWords?.fractional}
          onChange={(event: any) => {
            const checked: boolean = event.target.checked
            setOptions(
              set(
                cloneDeep(options),
                'convertNumberToWords.fractional',
                checked,
              ),
            )
          }}
        >
          {dictionary.sectionOptions.switches.convertFractionalPart}
        </Switch>
      </div>
      <div className="p-1">
        <Switch
          name="show-currency-part-integer"
          isSelected={options.showCurrency?.integer}
          onChange={(event: any) => {
            const checked: boolean = event.target.checked
            setOptions(set(cloneDeep(options), 'showCurrency.integer', checked))
          }}
        >
          {dictionary.sectionOptions.switches.showCurrencyIntegerPart}
        </Switch>
      </div>
      <div className="p-1">
        <Switch
          name="show-currency-part-fractional"
          isSelected={options.showCurrency?.fractional}
          onChange={(event: any) => {
            const checked: boolean = event.target.checked
            setOptions(
              set(cloneDeep(options), 'showCurrency.fractional', checked),
            )
          }}
        >
          {dictionary.sectionOptions.switches.showCurrencyFractionalPart}
        </Switch>
      </div>
    </>
  )
}
