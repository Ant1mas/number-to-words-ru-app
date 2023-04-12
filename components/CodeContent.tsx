import toast from 'react-hot-toast'

import useCodePreview from 'lib/hooks/useCodePreview'
import useI18n from 'lib/hooks/useI18n'
import codeData from 'lib/functions/codeDataTemplateString'
import copyToClipboard from 'lib/functions/copyToClipboard'
import CodePreview from 'components/CodePreview'

export default function CodeContent() {
  const { code } = useCodePreview()
  const { t } = useI18n()

  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <CodePreview code={code} language="javascript" />
      </div>
      <div className="mt-3 flex w-full justify-center">
        <button
          className="btn-outline btn"
          onClick={() => {
            copyToClipboard(codeData(code))
            toast.success(t('code_block_button_copy_snackbar_text'), {
              duration: 2000,
            })
          }}
        >
          {t('code_block_button_copy')}
        </button>
      </div>
    </div>
  )
}
