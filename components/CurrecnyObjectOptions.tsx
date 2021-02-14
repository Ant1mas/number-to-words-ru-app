import React from "react";
import {
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

// import styles from "./CurrecnyObjectOptions.module.sass"
import { ModuleParamsContext } from 'lib/context/moduleParamsContext'
import InputSelect from 'components/InputSelect';
import DeclensionsFields from 'components/DeclensionsFields';

const CurrecnyObjectOptions = () => {
  const { options, updateOptions } = React.useContext(ModuleParamsContext);
  const { t, i18n } = useTranslation();

  return (
    <>
      <div style={{
        borderLeft: '2px solid #98a2db',
        margin: '.5rem 0',
        padding: '0 .5rem',
      }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h5" display="block">
              {t('options_currency_custom_integer_block_title')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name='custom-currency-integer1'
              label={t('options_currency_custom_value_form1')}
              fullWidth
              placeholder="Рубль"
              value={options.customCurrency.currencyNameCases[0]}
              onChange={updateOptions}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name='custom-currency-integer2'
              label={t('options_currency_custom_value_form2')}
              fullWidth
              placeholder="Рубля"
              value={options.customCurrency.currencyNameCases[1]}
              onChange={updateOptions}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name='custom-currency-integer3'
              label={t('options_currency_custom_value_form3')}
              fullWidth
              placeholder="Рублей"
              value={options.customCurrency.currencyNameCases[2]}
              onChange={updateOptions}
            />
          </Grid>
          <DeclensionsFields numberPart='integer' declensionsObjectName='currencyNameDeclensions' />
          <Grid item xs={12}>
            <InputSelect
              name='custom-currency-form-integer'
              fullWidth
              label={t('options_currency_custom_value_currency_name_form')}
              value={options.customCurrency.currencyNounGender.integer}
              items={[
                {value: 0, name: t('options_currency_custom_value_word_form1')},
                {value: 1, name: t('options_currency_custom_value_word_form2')},
                {value: 2, name: t('options_currency_custom_value_word_form3')},
              ]}
              onChange={updateOptions}
            />
          </Grid>
          <Grid item xs={12} style={{marginTop: '1.5rem'}}>
            <Typography variant="h5" display="block">
              {t('options_currency_custom_fractional_block_title')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name='custom-currency-fractional1'
              label={t('options_currency_custom_value_form1')}
              fullWidth
              placeholder="Копейка"
              value={options.customCurrency.fractionalPartNameCases[0]}
              onChange={updateOptions}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name='custom-currency-fractional2'
              label={t('options_currency_custom_value_form2')}
              fullWidth
              placeholder="Копейки"
              value={options.customCurrency.fractionalPartNameCases[1]}
              onChange={updateOptions}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name='custom-currency-fractional3'
              label={t('options_currency_custom_value_form3')}
              fullWidth
              placeholder="Копеек"
              value={options.customCurrency.fractionalPartNameCases[2]}
              onChange={updateOptions}
            />
          </Grid>
          <DeclensionsFields numberPart='fractional' declensionsObjectName='fractionalPartNameDeclensions' />
          <Grid item xs={12}>
            <InputSelect
              name='custom-currency-form-fractional'
              fullWidth
              label={t('options_currency_custom_value_currency_name_form')}
              value={options.customCurrency.currencyNounGender.fractionalPart}
              items={[
                {value: 0, name: t('options_currency_custom_value_word_form1')},
                {value: 1, name: t('options_currency_custom_value_word_form2')},
                {value: 2, name: t('options_currency_custom_value_word_form3')},
              ]}
              onChange={updateOptions}
            />
          </Grid>
          <Grid item xs={12} style={{marginTop: '1.5rem'}}>
            <Typography variant="h5" display="block">
              {t('options_currency_custom_common_block_title')}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name='custom-currency-fractional-min-length'
              label={t('options_currency_fractionalPartMinLength')}
              fullWidth
              type="number"
              inputProps={{
                min: 0,
              }}
              placeholder="2"
              value={options.customCurrency.fractionalPartMinLength}
              onChange={updateOptions}
            />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default CurrecnyObjectOptions;
