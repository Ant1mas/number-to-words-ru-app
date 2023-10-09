'use client'

import { useAtom } from 'jotai'
import { convert as convertNumberToWordsRu } from 'number-to-words-ru'

import { numberAtom } from '@/lib/config/jotai/numberAtom'
import useOptions from '@/lib/hooks/useOptions'

export default function ModuleResult() {
  const [number] = useAtom(numberAtom)
  const { formattedOptions } = useOptions()
  const resultText = convertNumberToWordsRu(
    number !== '' && number !== '-' ? number : '0',
    formattedOptions,
  )

  return (
    <div className="w-full text-center">
      <div className="min-h-[56px] overflow-hidden rounded-2xl bg-slate-100 p-4">
        {resultText}
      </div>
    </div>
  )
}
