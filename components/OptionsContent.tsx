import CurrencySelect from '@/components/CurrencySelect'
import DeclensionSelect from '@/components/DeclensionSelect'
import OptionRoundNumber from '@/components/OptionRoundNumber'
import OptionsCustomCurrency from '@/components/OptionsCustomCurrency'
import OptionsSwitchesBlock from '@/components/OptionsSwitchesBlock'

export default function OptionsContent() {
  return (
    <div className="flex flex-col">
      <div className="w-full py-2">
        <CurrencySelect />
      </div>
      <OptionsCustomCurrency />
      <div className="w-full py-2">
        <DeclensionSelect />
      </div>
      <div className="w-full py-2">
        <OptionRoundNumber />
      </div>
      <div className="w-full py-2">
        <OptionsSwitchesBlock />
      </div>
    </div>
  )
}
