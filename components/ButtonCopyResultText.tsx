'use client'

import { useAtom } from 'jotai'
import { convert as convertNumberToWordsRu } from 'number-to-words-ru'

import ButtonCopy from '@/components/ButtonCopy'
import { useTranslation } from '@/lib/config/i18n/client'
import { numberAtom } from '@/lib/config/jotai/numberAtom'
import useOptions from '@/lib/hooks/useOptions'

export default function ButtonCopyResultText() {
  const { t } = useTranslation()
  const [number] = useAtom(numberAtom)
  const { formattedOptions } = useOptions()
  const resultText = convertNumberToWordsRu(
    number !== '' && number !== '-' ? number : '0',
    formattedOptions,
  )

  return (
    <ButtonCopy
      text={t('result_block_button_copy')}
      toastSuccess={t('result_block_button_copy_snackbar_text')}
      contentToCopy={resultText}
    />
  )
}
