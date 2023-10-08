'use client'

import { Input } from '@nextui-org/input'
import cloneDeep from 'lodash/cloneDeep'
import set from 'lodash/set'

import { useTranslation } from '@/lib/config/i18n/client'
import inputRoundNumberHelperText from '@/lib/functions/inputRoundNumberHelperText'
import useOptions from '@/lib/hooks/useOptions'

export default function OptionRoundNumber() {
  const { t } = useTranslation()
  const { options, setOptions } = useOptions()

  return (
    <Input
      id="round-number"
      name="round-number"
      type="number"
      fullWidth
      placeholder="2"
      label={t('options_round_number')}
      description={inputRoundNumberHelperText(options, t)}
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
