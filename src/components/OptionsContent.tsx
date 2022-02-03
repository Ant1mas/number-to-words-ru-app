import React from 'react'
import Grid from '@mui/material/Grid'
import Hidden from '@mui/material/Hidden'
import TextField from '@mui/material/TextField'
import { useTranslation } from 'react-i18next'

import { useModuleOptions } from 'features/moduleOptions/useModuleOptions'
import CurrencyObjectOptions from 'components/CurrencyObjectOptions'
import InputSelect from 'components/InputSelect'
import InputSwitch from 'components/InputSwitch'
import inputRoundNumberHelperText from 'lib/functions/inputRoundNumberHelperText'

export function OptionsContent() {
  const { options, updateOptions } = useModuleOptions()
  const { t } = useTranslation('translation', { useSuspense: false })

  return (
    <>
      <Grid container direction="column" spacing={1}>
        <Grid item xs={12} md={6}>
          <InputSelect
            name="currency"
            label={t('options_currency_select_label')}
            fullWidth
            value={options.currency as string}
            onChange={updateOptions}
            items={[
              { value: 'rub', name: t('options_currency_select_value_rub') },
              { value: 'usd', name: t('options_currency_select_value_usd') },
              { value: 'eur', name: t('options_currency_select_value_eur') },
              {
                value: 'number',
                name: t('options_currency_select_value_number'),
              },
              {
                value: 'custom',
                name: t('options_currency_select_value_custom'),
              },
            ]}
          />
        </Grid>
        <Hidden xsUp={options.currency !== 'custom'}>
          <Grid item>
            <CurrencyObjectOptions />
          </Grid>
        </Hidden>
        <Grid item xs={12} md={6}>
          <InputSelect
            name="declension"
            label={t('options_declension_label')}
            fullWidth
            value={options.declension}
            onChange={updateOptions}
            items={[
              {
                value: 'nominative',
                name: t('options_declension_select_value_nominative'),
              },
              {
                value: 'genitive',
                name: t('options_declension_select_value_genitive'),
              },
              {
                value: 'dative',
                name: t('options_declension_select_value_dative'),
              },
              {
                value: 'accusative',
                name: t('options_declension_select_value_accusative'),
              },
              {
                value: 'instrumental',
                name: t('options_declension_select_value_instrumental'),
              },
              {
                value: 'prepositional',
                name: t('options_declension_select_value_prepositional'),
              },
            ]}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="round-number"
            label={t('options_round_number')}
            variant="standard"
            fullWidth
            placeholder="2"
            type="number"
            inputProps={{
              min: -1,
            }}
            helperText={inputRoundNumberHelperText(options, t)}
            value={options.roundNumber}
            onChange={updateOptions}
          />
        </Grid>
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
            checked={options.convertNumbertToWords.integer}
            onChange={updateOptions}
          />
        </Grid>
        <Grid item>
          <InputSwitch
            name="convert-number-part-fractional"
            label={t('options_convert_fractional_part')}
            checked={options.convertNumbertToWords.fractional}
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
      </Grid>
    </>
  )
}

export default OptionsContent
