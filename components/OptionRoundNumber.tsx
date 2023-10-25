'use client'

import { Input } from '@nextui-org/input'
import cloneDeep from 'lodash/cloneDeep'
import set from 'lodash/set'

import inputRoundNumberHelperText from '@/lib/functions/inputRoundNumberHelperText'
import useOptions from '@/lib/hooks/useOptions'

import type { Dictionary } from '@/lib/config/i18n/functions/getDictionary'

type Props = {
  dictionary: Dictionary
}

export default function OptionRoundNumber({ dictionary }: Props) {
  const { options, setOptions } = useOptions()

  return (
    <Input
      id="round-number"
      name="round-number"
      type="number"
      fullWidth
      placeholder="2"
      label={dictionary.sectionOptions.roundNumber.label}
      description={inputRoundNumberHelperText(options, dictionary)}
      variant="bordered"
      min={-1}
      value={options.roundNumber?.toString()}
      onChange={(event) => {
        const value = event.target.value
        setOptions(set(cloneDeep(options), 'roundNumber', value))
      }}
    />
  )
}
