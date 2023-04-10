import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

import DEFAULT_CURRENCY_OBJECT from 'lib/constants/defaultCurrencyObject'
import { useModuleOptions } from 'lib/config/redux/slices/moduleOptions/useModuleOptions'
import useI18n from 'lib/hooks/useI18n'

type Props = {
  numberPart: 'integer' | 'fractional'
}

export default function CurrencyDeclensionForms({ numberPart }: Props) {
  const { options, updateOptions } = useModuleOptions()
  const { t } = useI18n()

  const currencyObjectName =
    numberPart === 'integer' ? 'currencyNameCases' : 'fractionalPartNameCases'

  const fieldsList = [0, 1, 2].map((listIndex) => {
    return (
      <Grid item xs={12} sm={4} key={listIndex}>
        <TextField
          name={`custom-currency-${numberPart}${listIndex + 1}`}
          label={t(`options_currency_custom_value_form${listIndex + 1}`)}
          variant="standard"
          fullWidth
          placeholder={DEFAULT_CURRENCY_OBJECT[currencyObjectName][listIndex]}
          value={options.customCurrency[currencyObjectName][listIndex]}
          onChange={updateOptions}
        />
      </Grid>
    )
  })

  return <>{fieldsList}</>
}
