import { Input } from '@nextui-org/input'

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
    <Input
      id="input-number"
      type="text"
      fullWidth
      placeholder="12345.6789"
      label={t('module_number_input_label')}
      description={t('module_number_input_helper_text')}
      value={moduleNumber}
      onValueChange={(event) => {
        dispatch(moduleNumberUpdated(event))
      }}
    />
  )
}
