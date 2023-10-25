'use client'

import { useAtom } from 'jotai'
import { convert as convertNumberToWordsRu } from 'number-to-words-ru'

import ButtonCopy from '@/components/ButtonCopy'
import { numberAtom } from '@/lib/config/jotai/numberAtom'
import useOptions from '@/lib/hooks/useOptions'

import type { Dictionary } from '@/lib/config/i18n/functions/getDictionary'

type Props = {
  dictionary: Dictionary
}

export default function ButtonCopyResultText({ dictionary }: Props) {
  const [number] = useAtom(numberAtom)
  const { formattedOptions } = useOptions()
  const resultText = convertNumberToWordsRu(
    number !== '' && number !== '-' ? number : '0',
    formattedOptions,
  )

  return (
    <ButtonCopy
      text={dictionary.sectionResult.buttonCopy}
      toastSuccess={dictionary.sectionResult.snackbarCopied}
      contentToCopy={resultText}
    />
  )
}
