import { convert as convertNumberToWordsRu } from 'number-to-words-ru'
import toast from 'react-hot-toast'

import { useAppSelector } from 'lib/config/redux/store'
import useModuleOptions from 'lib/config/redux/slices/moduleOptions/useModuleOptions'
import { selectModuleNumber } from 'lib/config/redux/slices/moduleNumber/moduleNumberSlice'
import useI18n from 'lib/hooks/useI18n'
import copyToClipboard from 'lib/functions/copyToClipboard'
import LoadingText from 'components/LoadingText'

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
      <h4 className="flex justify-center w-full my-2 text-4xl text-center">
        <LoadingText
          text={t('result_block_title')}
          skeletonWidth={200}
          skeletonHeight={40}
        />
      </h4>
      <div className="w-full text-center">
        <div className="p-4 overflow-hidden rounded-2xl bg-slate-100">
          {resultText}
        </div>
      </div>
      <div className="flex justify-center w-full mt-3">
        <button
          className="btn-outline btn"
          onClick={() => {
            copyToClipboard(resultText)
            toast.success(t('result_block_button_copy_snackbar_text'), {
              duration: 2000,
            })
          }}
        >
          <LoadingText
            text={t('result_block_button_copy')}
            skeletonWidth={160}
            skeletonHeight={20}
          />
        </button>
      </div>
    </div>
  )
}
