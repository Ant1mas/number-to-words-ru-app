import { Input } from '@nextui-org/input'

import useModuleOptions from '@/lib/config/redux/slices/moduleOptions/useModuleOptions'
import useI18n from '@/lib/hooks/useI18n'
import inputRoundNumberHelperText from '@/lib/functions/inputRoundNumberHelperText'
import CurrencyObjectOptions from '@/components/CurrencyObjectOptions'
import DeclensionSelect from '@/components/DeclensionSelect'
import CurrencySelect from '@/components/CurrencySelect'
import OptionsSwitchesBlock from '@/components/OptionsSwitchesBlock'

export default function OptionsContent() {
  const { updateOptions } = useModuleOptions()
  const options: any = useModuleOptions().options
  const { t } = useI18n()

  return (
    <div className="flex flex-col">
      <div className="w-full py-2">
        <CurrencySelect />
      </div>
      {options.currency === 'custom' ? (
        <div className="w-full py-2">
          <CurrencyObjectOptions />
        </div>
      ) : null}
      <div className="w-full py-2">
        <DeclensionSelect />
      </div>
      <div className="w-full py-2">
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
      </div>
      <OptionsSwitchesBlock />
    </div>
  )
}
