import React from 'react'
import TextField from '@mui/material/TextField'
import { useTranslation } from 'next-i18next'
import { ModuleParamsContext } from 'lib/context/moduleParamsContext'

export function InputNumberField() {
  const { number, saveNumber } = React.useContext(ModuleParamsContext)
  const { t } = useTranslation('common')

  return (
    <>
      <TextField
        id="input-number"
        label={t('module_number_input_label')}
        margin="normal"
        variant="outlined"
        fullWidth
        value={number}
        placeholder="12345.6789"
        helperText={t('module_number_input_helper_text')}
        onChange={saveNumber}
      />
    </>
  )
}

export default InputNumberField
