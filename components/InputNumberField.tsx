'use client'

import { Input } from '@nextui-org/input'
import { useAtom } from 'jotai'

import { formatNumber, numberAtom } from '@/lib/config/jotai/numberAtom'

import type { Dictionary } from '@/lib/config/i18n/functions/getDictionary'

type Props = {
  dictionary: Dictionary
}

export default function InputNumberField({ dictionary }: Props) {
  const [number, setNumber] = useAtom(numberAtom)

  return (
    <Input
      id="input-number"
      type="text"
      fullWidth
      placeholder="12345.6789"
      label={dictionary.sectionNumberInput.label}
      description={dictionary.sectionNumberInput.description}
      value={number}
      onValueChange={(value) => {
        setNumber(formatNumber(value))
      }}
    />
  )
}
