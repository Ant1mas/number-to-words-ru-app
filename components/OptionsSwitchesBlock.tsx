'use client'

import { Switch } from '@nextui-org/switch'

import { useTranslation } from '@/lib/config/i18n/client'
import useOptions from '@/lib/hooks/useOptions'
import cloneDeep from 'lodash/cloneDeep'
import set from 'lodash/set'

export default function OptionsSwitchesBlock() {
  const { t } = useTranslation()
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
          {t('options_convert_minus_sign')}
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
          {t('options_show_integer_part')}
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
          {t('options_show_fractional_part')}
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
          {t('options_convert_integer_part')}
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
          {t('options_convert_fractional_part')}
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
          {t('options_show_currency_integer_part')}
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
          {t('options_show_currency_fractional_part')}
        </Switch>
      </div>
    </>
  )
}
