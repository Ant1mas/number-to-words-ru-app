'use client'

import { useAtom } from 'jotai'
import { convert as convertNumberToWordsRu } from 'number-to-words-ru'

import ButtonCopy from '@/components/ButtonCopy'
import { useTranslation } from '@/lib/config/i18n/client'
import { numberAtom } from '@/lib/config/jotai/numberAtom'
import useOptions from '@/lib/hooks/useOptions'

export default function SectionResult() {
  const { t } = useTranslation()
  const [number] = useAtom(numberAtom)
  const { formattedOptions } = useOptions()
  const resultText = convertNumberToWordsRu(
    number !== '' && number !== '-' ? number : '0',
    formattedOptions,
  )

  return (
    <div className="flex flex-col items-center">
      <h4 className="my-2 flex w-full justify-center text-center text-4xl">
        {t('result_block_title')}
      </h4>
      <div className="w-full text-center">
        <div className="min-h-[56px] overflow-hidden rounded-2xl bg-slate-100 p-4">
          {resultText}
        </div>
      </div>
      <div className="mt-3 flex w-full justify-center">
        <ButtonCopy
          text={t('result_block_button_copy')}
          toastSuccess={t('result_block_button_copy_snackbar_text')}
          contentToCopy={resultText}
        />
      </div>
    </div>
  )
}
