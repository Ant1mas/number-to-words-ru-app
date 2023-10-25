import CurrencySelect from '@/components/CurrencySelect'
import DeclensionSelect from '@/components/DeclensionSelect'
import OptionRoundNumber from '@/components/OptionRoundNumber'
import OptionsCustomCurrency from '@/components/OptionsCustomCurrency'
import OptionsSwitchesBlock from '@/components/OptionsSwitchesBlock'
import { getDictionary } from '@/lib/config/i18n/functions/getDictionary'

export default async function OptionsContent() {
  const dictionary = await getDictionary()

  return (
    <div className="flex flex-col">
      <div className="w-full py-2">
        <CurrencySelect dictionary={dictionary} />
      </div>
      <OptionsCustomCurrency dictionary={dictionary} />
      <div className="w-full py-2">
        <DeclensionSelect dictionary={dictionary} />
      </div>
      <div className="w-full py-2">
        <OptionRoundNumber dictionary={dictionary} />
      </div>
      <div className="w-full py-2">
        <OptionsSwitchesBlock dictionary={dictionary} />
      </div>
    </div>
  )
}
