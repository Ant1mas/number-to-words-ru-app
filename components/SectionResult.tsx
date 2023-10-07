'use client'

import { convert as convertNumberToWordsRu } from 'number-to-words-ru'

import ButtonCopy from '@/components/ButtonCopy'
import { useTranslation } from '@/lib/config/i18n/client'
import { selectModuleNumber } from '@/lib/config/redux/slices/moduleNumber/moduleNumberSlice'
import useModuleOptions from '@/lib/config/redux/slices/moduleOptions/useModuleOptions'
import { useAppSelector } from '@/lib/config/redux/store'

export default function SectionResult() {
  const moduleNumber = useAppSelector(selectModuleNumber)
  const { formattedOptions } = useModuleOptions()
  const { t } = useTranslation()
  const resultText = convertNumberToWordsRu(
    moduleNumber !== '' && moduleNumber !== '-' ? moduleNumber : '0',
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
