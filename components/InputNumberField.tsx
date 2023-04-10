import TextField from '@mui/material/TextField'

import { useAppSelector, useAppDispatch } from 'lib/config/redux/store'
import {
  moduleNumberUpdated,
  selectModuleNumber,
} from 'lib/config/redux/slices/moduleNumber/moduleNumberSlice'
import useI18n from 'lib/hooks/useI18n'

export default function InputNumberField() {
  const dispatch = useAppDispatch()
  const moduleNumber = useAppSelector(selectModuleNumber)
  const { t } = useI18n()

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
        onChange={(event) => {
          dispatch(moduleNumberUpdated(event.target.value))
        }}
      />
    </>
  )
}
