'use client'

import { Input } from '@nextui-org/input'

import { useTranslation } from '@/lib/config/i18n/client'
import useModuleOptions from '@/lib/config/redux/slices/moduleOptions/useModuleOptions'
import inputRoundNumberHelperText from '@/lib/functions/inputRoundNumberHelperText'

export default function OptionRoundNumber() {
  const { t } = useTranslation()
  const { updateOptions } = useModuleOptions()
  const options: any = useModuleOptions().options

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
      value={options.roundNumber}
      onChange={updateOptions}
    />
  )
}
