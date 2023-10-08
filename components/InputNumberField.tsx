'use client'

import { Input } from '@nextui-org/input'
import { useAtom } from 'jotai'

import { useTranslation } from '@/lib/config/i18n/client'
import { formatNumber, numberAtom } from '@/lib/config/jotai/numberAtom'

export default function InputNumberField() {
  const [number, setNumber] = useAtom(numberAtom)
  const { t } = useTranslation()

  return (
    <Input
      id="input-number"
      type="text"
      fullWidth
      placeholder="12345.6789"
      label={t('module_number_input_label')}
      description={t('module_number_input_helper_text')}
      value={number}
      onValueChange={(value) => {
        setNumber(formatNumber(value))
      }}
    />
  )
}
