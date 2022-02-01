import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'next-i18next'

import { useModuleOptions } from 'features/moduleOptions/useModuleOptions'
import InputSelect from 'components/InputSelect'
import DeclensionsFields from 'components/DeclensionsFields'

export function CurrencyObjectOptions() {
  const { options, updateOptions } = useModuleOptions()
  const { t } = useTranslation('common')

  return (
    <>
      <Box
        sx={{
          borderLeft: 2,
          borderColor: 'rgb(85, 108, 214, 0.5)',
          marginY: 1,
          paddingX: 1,
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h5" display="block">
              {t('options_currency_custom_integer_block_title')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name="custom-currency-integer1"
              label={t('options_currency_custom_value_form1')}
              variant="standard"
              fullWidth
              placeholder="Рубль"
              value={options.customCurrency.currencyNameCases[0]}
              onChange={updateOptions}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name="custom-currency-integer2"
              label={t('options_currency_custom_value_form2')}
              variant="standard"
              fullWidth
              placeholder="Рубля"
              value={options.customCurrency.currencyNameCases[1]}
              onChange={updateOptions}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name="custom-currency-integer3"
              label={t('options_currency_custom_value_form3')}
              variant="standard"
              fullWidth
              placeholder="Рублей"
              value={options.customCurrency.currencyNameCases[2]}
              onChange={updateOptions}
            />
          </Grid>
          <DeclensionsFields
            numberPart="integer"
            declensionsObjectName="currencyNameDeclensions"
          />
          <Grid item xs={12}>
            <InputSelect
              name="custom-currency-form-integer"
              fullWidth
              label={t('options_currency_custom_value_currency_name_form')}
              value={options.customCurrency.currencyNounGender.integer}
              items={[
                {
                  value: 0,
                  name: t('options_currency_custom_value_word_form1'),
                },
                {
                  value: 1,
                  name: t('options_currency_custom_value_word_form2'),
                },
                {
                  value: 2,
                  name: t('options_currency_custom_value_word_form3'),
                },
              ]}
              onChange={updateOptions}
            />
          </Grid>
          <Grid item xs={12} style={{ marginTop: '1.5rem' }}>
            <Typography variant="h5" display="block">
              {t('options_currency_custom_fractional_block_title')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name="custom-currency-fractional1"
              label={t('options_currency_custom_value_form1')}
              variant="standard"
              fullWidth
              placeholder="Копейка"
              value={options.customCurrency.fractionalPartNameCases[0]}
              onChange={updateOptions}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name="custom-currency-fractional2"
              label={t('options_currency_custom_value_form2')}
              variant="standard"
              fullWidth
              placeholder="Копейки"
              value={options.customCurrency.fractionalPartNameCases[1]}
              onChange={updateOptions}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name="custom-currency-fractional3"
              label={t('options_currency_custom_value_form3')}
              variant="standard"
              fullWidth
              placeholder="Копеек"
              value={options.customCurrency.fractionalPartNameCases[2]}
              onChange={updateOptions}
            />
          </Grid>
          <DeclensionsFields
            numberPart="fractional"
            declensionsObjectName="fractionalPartNameDeclensions"
          />
          <Grid item xs={12}>
            <InputSelect
              name="custom-currency-form-fractional"
              fullWidth
              label={t('options_currency_custom_value_currency_name_form')}
              value={options.customCurrency.currencyNounGender.fractionalPart}
              items={[
                {
                  value: 0,
                  name: t('options_currency_custom_value_word_form1'),
                },
                {
                  value: 1,
                  name: t('options_currency_custom_value_word_form2'),
                },
                {
                  value: 2,
                  name: t('options_currency_custom_value_word_form3'),
                },
              ]}
              onChange={updateOptions}
            />
          </Grid>
          <Grid item xs={12} style={{ marginTop: '1.5rem' }}>
            <Typography variant="h5" display="block">
              {t('options_currency_custom_common_block_title')}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="custom-currency-fractional-min-length"
              label={t('options_currency_fractionalPartMinLength')}
              variant="standard"
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
      </Box>
    </>
  )
}

export default CurrencyObjectOptions
