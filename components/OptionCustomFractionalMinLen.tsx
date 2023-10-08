'use client'

import { Input } from '@nextui-org/input'
import cloneDeep from 'lodash/cloneDeep'
import set from 'lodash/set'

import { useTranslation } from '@/lib/config/i18n/client'
import useOptions from '@/lib/hooks/useOptions'

export default function OptionCustomFractionalMinLen() {
  const { t } = useTranslation()
  const { options, setOptions } = useOptions()

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
      onChange={(event) => {
        const value = event.target.value
        setOptions(
          set(
            cloneDeep(options),
            'customCurrency.fractionalPartMinLength',
            value,
          ),
        )
      }}
    />
  )
}
