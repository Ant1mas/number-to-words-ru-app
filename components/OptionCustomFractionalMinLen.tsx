'use client'

import { Input } from '@nextui-org/input'
import cloneDeep from 'lodash/cloneDeep'
import set from 'lodash/set'

import useOptions from '@/lib/hooks/useOptions'

import type { Dictionary } from '@/lib/config/i18n/functions/getDictionary'

type Props = {
  dictionary: Dictionary
}

export default function OptionCustomFractionalMinLen({ dictionary }: Props) {
  const { options, setOptions } = useOptions()

  return (
    <Input
      name="custom-currency-fractional-min-length"
      type="number"
      fullWidth
      variant="bordered"
      placeholder="2"
      label={dictionary.sectionOptions.customCurrency.fractionalPartMinLength}
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
