import React from 'react'
import TextField from '@mui/material/TextField'
import { useTranslation } from 'react-i18next'

import { useAppSelector, useAppDispatch } from 'app/store'
import { moduleNumberUpdated, selectModuleNumber } from 'features/moduleNumber/moduleNumberSlice'

export function InputNumberField() {
  const dispatch = useAppDispatch()
  const moduleNumber = useAppSelector(selectModuleNumber)
  const { t } = useTranslation('common', { useSuspense: false })

  return (
    <>
      <TextField
        id="input-number"
        label={t('module_number_input_label')}
        margin="normal"
        variant="outlined"
        fullWidth
        value={moduleNumber}
        placeholder="12345.6789"
        helperText={t('module_number_input_helper_text')}
        onChange={(event) => {dispatch(moduleNumberUpdated(event.target.value))}}
      />
    </>
  )
}

export default InputNumberField
