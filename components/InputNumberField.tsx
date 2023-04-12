import { useAppSelector, useAppDispatch } from 'lib/config/redux/store'
import {
  moduleNumberUpdated,
  selectModuleNumber,
} from 'lib/config/redux/slices/moduleNumber/moduleNumberSlice'
import useI18n from 'lib/hooks/useI18n'

import InputField from 'components/InputField'

export default function InputNumberField() {
  const dispatch = useAppDispatch()
  const moduleNumber = useAppSelector(selectModuleNumber)
  const { t } = useI18n()

  return (
    <InputField
      id="input-number"
      type="text"
      placeholder="12345.6789"
      value={moduleNumber}
      onChange={(event) => {
        dispatch(moduleNumberUpdated(event.target.value))
      }}
      label={t('module_number_input_label')}
      helperText={t('module_number_input_helper_text')}
    />
  )
}
