import React from "react";
import {
  Grid,
  Hidden,
  TextField,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

// import styles from "./OptionsContent.module.sass"
import { ModuleParamsContext } from 'lib/context/moduleParamsContext'
import CurrecnyObjectOptions from "components/CurrecnyObjectOptions"
import InputSelect from "components/InputSelect"
import InputSwitch from "components/InputSwitch"

const OptionsContent = ( props ) => {
  const { options, updateOptions } = React.useContext(ModuleParamsContext);
  const { t, i18n } = useTranslation();

  return (
    <>
      <Grid container direction='column' spacing={1}>
        <Grid item xs={12} md={6}>
          <InputSelect
            name='currency'
            label={t('options_currency_select_label')}
            fullWidth
            value={options.currency}
            onChange={updateOptions}
            items={[
              {value: 'rub', name: t('options_currency_select_value_rub')},
              {value: 'usd', name: t('options_currency_select_value_usd')},
              {value: 'eur', name: t('options_currency_select_value_eur')},
              {value: 'number', name: t('options_currency_select_value_number')},
              {value: 'custom', name: t('options_currency_select_value_custom')},
            ]}
          />
        </Grid>
        <Hidden xsUp={options.currency !== 'custom'}>
          <Grid item>
            <CurrecnyObjectOptions />
          </Grid>
        </Hidden>
        <Grid item xs={12} md={6}>
          <TextField
            name='round-number'
            label={t('options_round_number')}
            margin='normal'
            fullWidth
            placeholder='2'
            type='number'
            inputProps={{
              min: -1,
            }}
            helperText={options.roundNumber == '-1' && t('options_round_number_helper_disabled')}
            value={options.roundNumber}
            onChange={updateOptions}
          />
        </Grid>
        <Grid item>
          <InputSwitch
            name='convert-minus-sign'
            label={t('options_convert_minus_sign')}
            checked={options.convertMinusSignToWord}
            onChange={updateOptions}
          />
        </Grid>
        <Grid item>
          <InputSwitch
            name='show-number-part-integer'
            label={t('options_show_integer_part')}
            checked={options.showNumberParts.integer}
            onChange={updateOptions}
          />
        </Grid>
        <Grid item>
          <InputSwitch
            name='show-number-part-fractional'
            label={t('options_show_fractional_part')}
            checked={options.showNumberParts.fractional}
            onChange={updateOptions}
          />
        </Grid>
        <Grid item>
          <InputSwitch
            name='convert-number-part-integer'
            label={t('options_convert_integer_part')}
            checked={options.convertNumbertToWords.integer}
            onChange={updateOptions}
          />
        </Grid>
        <Grid item>
          <InputSwitch
            name='convert-number-part-fractional'
            label={t('options_convert_fractional_part')}
            checked={options.convertNumbertToWords.fractional}
            onChange={updateOptions}
          />
        </Grid>
        <Grid item>
          <InputSwitch
            name='show-currency-part-integer'
            label={t('options_show_currency_integer_part')}
            checked={options.showCurrency.integer}
            onChange={updateOptions}
          />
        </Grid>
        <Grid item>
          <InputSwitch
            name='show-currency-part-fractional'
            label={t('options_show_currency_fractional_part')}
            checked={options.showCurrency.fractional}
            onChange={updateOptions}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default OptionsContent;