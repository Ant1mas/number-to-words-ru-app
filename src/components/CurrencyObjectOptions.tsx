import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { useModuleOptions } from 'features/moduleOptions/useModuleOptions'
import useI18n from 'lib/hooks/useI18n'
import DeclensionsFields from 'components/DeclensionsFields'
import CurrencyForm from 'components/CurrencyForm'
import CurrencyDeclensionForms from 'components/CurrencyDeclensionForms'

export function CurrencyObjectOptions() {
  const { options, updateOptions } = useModuleOptions()
  const { t } = useI18n()

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
          <CurrencyDeclensionForms numberPart="integer" />
          <DeclensionsFields
            numberPart="integer"
            declensionsObjectName="currencyNameDeclensions"
          />
          <Grid item xs={12}>
            <CurrencyForm
              name="custom-currency-form-integer"
              numberPart="integer"
            />
          </Grid>
          <Grid item xs={12} style={{ marginTop: '1.5rem' }}>
            <Typography variant="h5" display="block">
              {t('options_currency_custom_fractional_block_title')}
            </Typography>
          </Grid>
          <CurrencyDeclensionForms numberPart="fractional" />
          <DeclensionsFields
            numberPart="fractional"
            declensionsObjectName="fractionalPartNameDeclensions"
          />
          <Grid item xs={12}>
            <CurrencyForm
              name="custom-currency-form-fractional"
              numberPart="fractional"
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
