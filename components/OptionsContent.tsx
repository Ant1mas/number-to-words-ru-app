'use client'

import React from 'react'

import useModuleOptions from '@/lib/config/redux/slices/moduleOptions/useModuleOptions'
import DeclensionSelect from '@/components/DeclensionSelect'
import CurrencySelect from '@/components/CurrencySelect'
import OptionsSwitchesBlock from '@/components/OptionsSwitchesBlock'
import OptionRoundNumber from '@/components/OptionRoundNumber'

type Props = {
  componentCurrencyObjectOptions?: React.ReactElement
}

export default function OptionsContent({
  componentCurrencyObjectOptions,
}: Props) {
  const options: any = useModuleOptions().options

  return (
    <div className="flex flex-col">
      <div className="w-full py-2">
        <CurrencySelect />
      </div>
      {options.currency === 'custom' ? (
        <div className="w-full py-2">{componentCurrencyObjectOptions}</div>
      ) : null}
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
