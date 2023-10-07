'use client'

import { Input } from '@nextui-org/input'

import { useTranslation } from '@/lib/config/i18n/client'
import {
  moduleNumberUpdated,
  selectModuleNumber,
} from '@/lib/config/redux/slices/moduleNumber/moduleNumberSlice'
import { useAppDispatch, useAppSelector } from '@/lib/config/redux/store'

export default function InputNumberField() {
  const dispatch = useAppDispatch()
  const moduleNumber = useAppSelector(selectModuleNumber)
  const { t } = useTranslation()

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
