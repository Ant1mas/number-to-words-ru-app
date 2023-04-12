import { convert as convertNumberToWordsRu } from 'number-to-words-ru'
import toast from 'react-hot-toast'

import { useAppSelector } from 'lib/config/redux/store'
import useModuleOptions from 'lib/config/redux/slices/moduleOptions/useModuleOptions'
import { selectModuleNumber } from 'lib/config/redux/slices/moduleNumber/moduleNumberSlice'
import useI18n from 'lib/hooks/useI18n'
import copyToClipboard from 'lib/functions/copyToClipboard'

export default function ResultBlock() {
  const moduleNumber = useAppSelector(selectModuleNumber)
  const { formattedOptions } = useModuleOptions()
  const { t } = useI18n()
  const resultText = convertNumberToWordsRu(
    moduleNumber !== '' && moduleNumber !== '-' ? moduleNumber : '0',
    formattedOptions,
  )

  return (
    <div className="flex flex-col items-center">
      <h4 className="my-2 w-full text-center text-4xl">
        {t('result_block_title')}
      </h4>
      <div className="w-full text-center">
        <div className="overflow-hidden rounded-2xl bg-slate-100 p-4">
          {resultText}
        </div>
      </div>
      <div className="mt-3 flex w-full justify-center">
        <button
          className="btn-outline btn"
          onClick={() => {
            copyToClipboard(resultText)
            toast.success(t('result_block_button_copy_snackbar_text'), {
              duration: 2000,
            })
          }}
        >
          {t('result_block_button_copy')}
        </button>
      </div>
    </div>
  )
}
