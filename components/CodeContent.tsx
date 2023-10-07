'use client'

import ButtonCopy from '@/components/ButtonCopy'
import CodePreview from '@/components/CodePreview'
import { useTranslation } from '@/lib/config/i18n/client'
import codeData from '@/lib/functions/codeDataTemplateString'
import useCodePreview from '@/lib/hooks/useCodePreview'

export default function CodeContent() {
  const { code } = useCodePreview()
  const { t } = useTranslation()

  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <CodePreview code={code} language="javascript" />
      </div>
      <div className="mt-3 flex w-full justify-center">
        <ButtonCopy
          text={t('code_block_button_copy')}
          toastSuccess={t('code_block_button_copy_snackbar_text')}
          contentToCopy={codeData(code)}
        />
      </div>
    </div>
  )
}
