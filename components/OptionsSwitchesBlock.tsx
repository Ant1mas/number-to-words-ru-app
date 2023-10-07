'use client'

import { Switch } from '@nextui-org/switch'

import { useTranslation } from '@/lib/config/i18n/client'
import useModuleOptions from '@/lib/config/redux/slices/moduleOptions/useModuleOptions'

export default function OptionsSwitchesBlock() {
  const { options, updateOptions } = useModuleOptions()
  const { t } = useTranslation()

  return (
    <>
      <div className="p-1">
        <Switch
          name="convert-minus-sign"
          isSelected={options.convertMinusSignToWord}
          onChange={updateOptions}
        >
          {t('options_convert_minus_sign')}
        </Switch>
      </div>
      <div className="p-1">
        <Switch
          name="show-number-part-integer"
          isSelected={options.showNumberParts?.integer}
          onChange={updateOptions}
        >
          {t('options_show_integer_part')}
        </Switch>
      </div>
      <div className="p-1">
        <Switch
          name="show-number-part-fractional"
          isSelected={options.showNumberParts?.fractional}
          onChange={updateOptions}
        >
          {t('options_show_fractional_part')}
        </Switch>
      </div>
      <div className="p-1">
        <Switch
          name="convert-number-part-integer"
          isSelected={options.convertNumberToWords?.integer}
          onChange={updateOptions}
        >
          {t('options_convert_integer_part')}
        </Switch>
      </div>
      <div className="p-1">
        <Switch
          name="convert-number-part-fractional"
          isSelected={options.convertNumberToWords?.fractional}
          onChange={updateOptions}
        >
          {t('options_convert_fractional_part')}
        </Switch>
      </div>
      <div className="p-1">
        <Switch
          name="show-currency-part-integer"
          isSelected={options.showCurrency?.integer}
          onChange={updateOptions}
        >
          {t('options_show_currency_integer_part')}
        </Switch>
      </div>
      <div className="p-1">
        <Switch
          name="show-currency-part-fractional"
          isSelected={options.showCurrency?.fractional}
          onChange={updateOptions}
        >
          {t('options_show_currency_fractional_part')}
        </Switch>
      </div>
    </>
  )
}
