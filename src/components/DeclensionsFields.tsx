import PropTypes from 'prop-types'
import React from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

import { useModuleOptions } from 'features/moduleOptions/useModuleOptions'
import DEFAULT_CURRENCY_OBJECT from 'lib/constants/defaultCurrencyObject'
import useI18n from 'lib/hooks/useI18n'

type numberParts = 'integer' | 'fractional'

type declensionsObjectName =
  | 'currencyNameDeclensions'
  | 'fractionalPartNameDeclensions'

interface props {
  numberPart: numberParts
  declensionsObjectName: declensionsObjectName
}

export function DeclensionsFields(props: props) {
  const { numberPart, declensionsObjectName } = props
  const { options, updateOptions } = useModuleOptions()
  const { t } = useI18n()

  return (
    <>
      <Grid item xs={12} sm={6}>
        <TextField
          name={`custom-currency-${numberPart}-declension-nominative-singular`}
          label={t(
            'options_currency_custom_value_declension_nominative_singular'
          )}
          variant="standard"
          fullWidth
          placeholder={
            DEFAULT_CURRENCY_OBJECT[declensionsObjectName].nominative[0]
          }
          value={options.customCurrency[declensionsObjectName].nominative[0]}
          onChange={updateOptions}
          sx={{
            input: {
              color: options.declension === 'nominative' ? 'primary.main' : '',
            },
          }}
          helperText={
            options.declension === 'nominative'
              ? t('options_currency_custom_value_declension_used')
              : ''
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name={`custom-currency-${numberPart}-declension-nominative-plural`}
          label={t(
            'options_currency_custom_value_declension_nominative_plural'
          )}
          variant="standard"
          fullWidth
          disabled
          placeholder={
            DEFAULT_CURRENCY_OBJECT[declensionsObjectName].nominative[1]
          }
          value={t('options_currency_custom_value_declension_disabled')}
          onChange={updateOptions}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name={`custom-currency-${numberPart}-declension-genitive-singular`}
          label={t(
            'options_currency_custom_value_declension_genitive_singular'
          )}
          variant="standard"
          fullWidth
          placeholder={
            DEFAULT_CURRENCY_OBJECT[declensionsObjectName].genitive[0]
          }
          value={options.customCurrency[declensionsObjectName].genitive[0]}
          onChange={updateOptions}
          sx={{
            input: {
              color:
                options.declension === 'nominative' ||
                options.declension === 'genitive' ||
                options.declension === 'accusative'
                  ? 'primary.main'
                  : '',
            },
          }}
          helperText={
            options.declension === 'nominative' ||
            options.declension === 'genitive' ||
            options.declension === 'accusative'
              ? t('options_currency_custom_value_declension_used')
              : ''
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name={`custom-currency-${numberPart}-declension-genitive-plural`}
          label={t('options_currency_custom_value_declension_genitive_plural')}
          variant="standard"
          fullWidth
          placeholder={
            DEFAULT_CURRENCY_OBJECT[declensionsObjectName].genitive[1]
          }
          value={options.customCurrency[declensionsObjectName].genitive[1]}
          onChange={updateOptions}
          sx={{
            input: {
              color: 'primary.main',
            },
          }}
          helperText={t('options_currency_custom_value_declension_used')}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name={`custom-currency-${numberPart}-declension-dative-singular`}
          label={t('options_currency_custom_value_declension_dative_singular')}
          variant="standard"
          fullWidth
          placeholder={DEFAULT_CURRENCY_OBJECT[declensionsObjectName].dative[0]}
          value={options.customCurrency[declensionsObjectName].dative[0]}
          onChange={updateOptions}
          sx={{
            input: {
              color: options.declension === 'dative' ? 'primary.main' : '',
            },
          }}
          helperText={
            options.declension === 'dative'
              ? t('options_currency_custom_value_declension_used')
              : ''
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name={`custom-currency-${numberPart}-declension-dative-plural`}
          label={t('options_currency_custom_value_declension_dative_plural')}
          variant="standard"
          fullWidth
          placeholder={DEFAULT_CURRENCY_OBJECT[declensionsObjectName].dative[1]}
          value={options.customCurrency[declensionsObjectName].dative[1]}
          onChange={updateOptions}
          sx={{
            input: {
              color: options.declension === 'dative' ? 'primary.main' : '',
            },
          }}
          helperText={
            options.declension === 'dative'
              ? t('options_currency_custom_value_declension_used')
              : ''
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name={`custom-currency-${numberPart}-declension-accusative-singular`}
          label={t(
            'options_currency_custom_value_declension_accusative_singular'
          )}
          variant="standard"
          fullWidth
          placeholder={
            DEFAULT_CURRENCY_OBJECT[declensionsObjectName].accusative[0]
          }
          value={options.customCurrency[declensionsObjectName].accusative[0]}
          onChange={updateOptions}
          sx={{
            input: {
              color: options.declension === 'accusative' ? 'primary.main' : '',
            },
          }}
          helperText={
            options.declension === 'accusative'
              ? t('options_currency_custom_value_declension_used')
              : ''
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name={`custom-currency-${numberPart}-declension-accusative-plural`}
          label={t(
            'options_currency_custom_value_declension_accusative_plural'
          )}
          variant="standard"
          fullWidth
          disabled
          placeholder={
            DEFAULT_CURRENCY_OBJECT[declensionsObjectName].accusative[1]
          }
          value={t('options_currency_custom_value_declension_disabled')}
          onChange={updateOptions}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name={`custom-currency-${numberPart}-declension-instrumental-singular`}
          label={t(
            'options_currency_custom_value_declension_instrumental_singular'
          )}
          variant="standard"
          fullWidth
          placeholder={
            DEFAULT_CURRENCY_OBJECT[declensionsObjectName].instrumental[0]
          }
          value={options.customCurrency[declensionsObjectName].instrumental[0]}
          onChange={updateOptions}
          sx={{
            input: {
              color:
                options.declension === 'instrumental' ? 'primary.main' : '',
            },
          }}
          helperText={
            options.declension === 'instrumental'
              ? t('options_currency_custom_value_declension_used')
              : ''
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name={`custom-currency-${numberPart}-declension-instrumental-plural`}
          label={t(
            'options_currency_custom_value_declension_instrumental_plural'
          )}
          variant="standard"
          fullWidth
          placeholder={
            DEFAULT_CURRENCY_OBJECT[declensionsObjectName].instrumental[1]
          }
          value={options.customCurrency[declensionsObjectName].instrumental[1]}
          onChange={updateOptions}
          sx={{
            input: {
              color:
                options.declension === 'instrumental' ? 'primary.main' : '',
            },
          }}
          helperText={
            options.declension === 'instrumental'
              ? t('options_currency_custom_value_declension_used')
              : ''
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name={`custom-currency-${numberPart}-declension-prepositional-singular`}
          label={t(
            'options_currency_custom_value_declension_prepositional_singular'
          )}
          variant="standard"
          fullWidth
          placeholder={
            DEFAULT_CURRENCY_OBJECT[declensionsObjectName].prepositional[0]
          }
          value={options.customCurrency[declensionsObjectName].prepositional[0]}
          onChange={updateOptions}
          sx={{
            input: {
              color:
                options.declension === 'prepositional' ? 'primary.main' : '',
            },
          }}
          helperText={
            options.declension === 'prepositional'
              ? t('options_currency_custom_value_declension_used')
              : ''
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name={`custom-currency-${numberPart}-declension-prepositional-plural`}
          label={t(
            'options_currency_custom_value_declension_prepositional_plural'
          )}
          variant="standard"
          fullWidth
          placeholder={
            DEFAULT_CURRENCY_OBJECT[declensionsObjectName].prepositional[1]
          }
          value={options.customCurrency[declensionsObjectName].prepositional[1]}
          onChange={updateOptions}
          sx={{
            input: {
              color:
                options.declension === 'prepositional' ? 'primary.main' : '',
            },
          }}
          helperText={
            options.declension === 'prepositional'
              ? t('options_currency_custom_value_declension_used')
              : ''
          }
        />
      </Grid>
    </>
  )
}

DeclensionsFields.propTypes = {
  numberPart: PropTypes.string,
  declensionsObjectName: PropTypes.string,
}

DeclensionsFields.defaultProps = {
  numberPart: 'integer',
  declensionsObjectName: 'currencyNameDeclensions',
}

export default DeclensionsFields
