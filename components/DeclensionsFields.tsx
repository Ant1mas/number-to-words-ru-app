import PropTypes from 'prop-types';
import React from "react";
import {
  Grid,
  TextField,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

// import styles from "./DeclensionsFields.module.sass"
import { ModuleParamsContext } from 'lib/context/moduleParamsContext'
import DEFAULT_CURRENCY_OBJECT from 'lib/constants/defaultCurrencyObject';

const DeclensionsFields = ({ numberPart, declensionsObjectName }) => {
  const { options, updateOptions } = React.useContext(ModuleParamsContext);
  const { t, i18n } = useTranslation();

  return (
    <>
      <Grid item xs={12} sm={6}>
        <TextField
          name={`custom-currency-${numberPart}-declension-nominative-singular`}
          label={t('options_currency_custom_value_declension_nominative_singular')}
          fullWidth
          placeholder={DEFAULT_CURRENCY_OBJECT[declensionsObjectName].nominative[0]}
          value={options.customCurrency[declensionsObjectName].nominative[0]}
          onChange={updateOptions}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name={`custom-currency-${numberPart}-declension-nominative-plural`}
          label={t('options_currency_custom_value_declension_nominative_plural')}
          fullWidth
          placeholder={DEFAULT_CURRENCY_OBJECT[declensionsObjectName].nominative[1]}
          value={options.customCurrency[declensionsObjectName].nominative[1]}
          onChange={updateOptions}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name={`custom-currency-${numberPart}-declension-genitive-singular`}
          label={t('options_currency_custom_value_declension_genitive_singular')}
          fullWidth
          placeholder={DEFAULT_CURRENCY_OBJECT[declensionsObjectName].genitive[0]}
          value={options.customCurrency[declensionsObjectName].genitive[0]}
          onChange={updateOptions}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name={`custom-currency-${numberPart}-declension-genitive-plural`}
          label={t('options_currency_custom_value_declension_genitive_plural')}
          fullWidth
          placeholder={DEFAULT_CURRENCY_OBJECT[declensionsObjectName].genitive[1]}
          value={options.customCurrency[declensionsObjectName].genitive[1]}
          onChange={updateOptions}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name={`custom-currency-${numberPart}-declension-dative-singular`}
          label={t('options_currency_custom_value_declension_dative_singular')}
          fullWidth
          placeholder={DEFAULT_CURRENCY_OBJECT[declensionsObjectName].dative[0]}
          value={options.customCurrency[declensionsObjectName].dative[0]}
          onChange={updateOptions}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name={`custom-currency-${numberPart}-declension-dative-plural`}
          label={t('options_currency_custom_value_declension_dative_plural')}
          fullWidth
          placeholder={DEFAULT_CURRENCY_OBJECT[declensionsObjectName].dative[1]}
          value={options.customCurrency[declensionsObjectName].dative[1]}
          onChange={updateOptions}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name={`custom-currency-${numberPart}-declension-accusative-singular`}
          label={t('options_currency_custom_value_declension_accusative_singular')}
          fullWidth
          placeholder={DEFAULT_CURRENCY_OBJECT[declensionsObjectName].accusative[0]}
          value={options.customCurrency[declensionsObjectName].accusative[0]}
          onChange={updateOptions}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name={`custom-currency-${numberPart}-declension-accusative-plural`}
          label={t('options_currency_custom_value_declension_accusative_plural')}
          fullWidth
          placeholder={DEFAULT_CURRENCY_OBJECT[declensionsObjectName].accusative[1]}
          value={options.customCurrency[declensionsObjectName].accusative[1]}
          onChange={updateOptions}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name={`custom-currency-${numberPart}-declension-instrumental-singular`}
          label={t('options_currency_custom_value_declension_instrumental_singular')}
          fullWidth
          placeholder={DEFAULT_CURRENCY_OBJECT[declensionsObjectName].instrumental[0]}
          value={options.customCurrency[declensionsObjectName].instrumental[0]}
          onChange={updateOptions}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name={`custom-currency-${numberPart}-declension-instrumental-plural`}
          label={t('options_currency_custom_value_declension_instrumental_plural')}
          fullWidth
          placeholder={DEFAULT_CURRENCY_OBJECT[declensionsObjectName].instrumental[1]}
          value={options.customCurrency[declensionsObjectName].instrumental[1]}
          onChange={updateOptions}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name={`custom-currency-${numberPart}-declension-prepositional-singular`}
          label={t('options_currency_custom_value_declension_prepositional_singular')}
          fullWidth
          placeholder={DEFAULT_CURRENCY_OBJECT[declensionsObjectName].prepositional[0]}
          value={options.customCurrency[declensionsObjectName].prepositional[0]}
          onChange={updateOptions}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name={`custom-currency-${numberPart}-declension-prepositional-plural`}
          label={t('options_currency_custom_value_declension_prepositional_plural')}
          fullWidth
          placeholder={DEFAULT_CURRENCY_OBJECT[declensionsObjectName].prepositional[1]}
          value={options.customCurrency[declensionsObjectName].prepositional[1]}
          onChange={updateOptions}
        />
      </Grid>
    </>
  )
}

DeclensionsFields.propTypes = {
  numberPart: PropTypes.string,
  declensionsObjectName: PropTypes.string,
};

DeclensionsFields.defaultProps = {
  numberPart: 'integer',
  declensionsObjectName: 'currencyNameDeclensions',
};

export default DeclensionsFields;
