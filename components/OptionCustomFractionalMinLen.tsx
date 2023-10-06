'use client'

import { Input } from '@nextui-org/input'

import { useTranslation } from '@/lib/config/i18n/client'
import useModuleOptions from '@/lib/config/redux/slices/moduleOptions/useModuleOptions'

export default function OptionCustomFractionalMinLen() {
  const { t } = useTranslation()
  const { options, updateOptions } = useModuleOptions()

  return (
    <Input
      name="custom-currency-fractional-min-length"
      type="number"
      fullWidth
      variant="bordered"
      placeholder="2"
      label={t('options_currency_fractionalPartMinLength')}
      min={0}
      value={options.customCurrency.fractionalPartMinLength.toString()}
      onChange={updateOptions}
    />
  )
}
