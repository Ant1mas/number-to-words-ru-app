import useModuleOptions from 'lib/config/redux/slices/moduleOptions/useModuleOptions'
import useI18n from 'lib/hooks/useI18n'
import CurrencyObjectOptions from 'components/CurrencyObjectOptions'
import DeclensionSelect from 'components/DeclensionSelect'
import CurrencySelect from 'components/CurrencySelect'
import OptionsSwitchesBlock from 'components/OptionsSwitchesBlock'
import InputField from 'components/InputField'
import inputRoundNumberHelperText from 'lib/functions/inputRoundNumberHelperText'

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
        <InputField
          name="round-number"
          type="number"
          placeholder="2"
          value={options.roundNumber}
          onChange={updateOptions}
          min={-1}
          label={t('options_round_number')}
          helperText={inputRoundNumberHelperText(options, t)}
        />
      </div>
      <OptionsSwitchesBlock />
    </div>
  )
}
