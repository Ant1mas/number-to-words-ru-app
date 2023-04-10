import Grid from '@mui/material/Grid'

import { useModuleOptions } from 'lib/config/redux/slices/moduleOptions/useModuleOptions'
import useI18n from 'lib/hooks/useI18n'
import InputSwitch from 'components/InputSwitch'

export default function OptionsSwitchesBlock() {
  const { options, updateOptions } = useModuleOptions()
  const { t } = useI18n()

  return (
    <>
      <Grid item>
        <InputSwitch
          name="convert-minus-sign"
          label={t('options_convert_minus_sign')}
          checked={options.convertMinusSignToWord}
          onChange={updateOptions}
        />
      </Grid>
      <Grid item>
        <InputSwitch
          name="show-number-part-integer"
          label={t('options_show_integer_part')}
          checked={options.showNumberParts.integer}
          onChange={updateOptions}
        />
      </Grid>
      <Grid item>
        <InputSwitch
          name="show-number-part-fractional"
          label={t('options_show_fractional_part')}
          checked={options.showNumberParts.fractional}
          onChange={updateOptions}
        />
      </Grid>
      <Grid item>
        <InputSwitch
          name="convert-number-part-integer"
          label={t('options_convert_integer_part')}
          checked={options.convertNumberToWords.integer}
          onChange={updateOptions}
        />
      </Grid>
      <Grid item>
        <InputSwitch
          name="convert-number-part-fractional"
          label={t('options_convert_fractional_part')}
          checked={options.convertNumberToWords.fractional}
          onChange={updateOptions}
        />
      </Grid>
      <Grid item>
        <InputSwitch
          name="show-currency-part-integer"
          label={t('options_show_currency_integer_part')}
          checked={options.showCurrency.integer}
          onChange={updateOptions}
        />
      </Grid>
      <Grid item>
        <InputSwitch
          name="show-currency-part-fractional"
          label={t('options_show_currency_fractional_part')}
          checked={options.showCurrency.fractional}
          onChange={updateOptions}
        />
      </Grid>
    </>
  )
}
