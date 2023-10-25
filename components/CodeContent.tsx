'use client'

import ButtonCopy from '@/components/ButtonCopy'
import CodePreview from '@/components/CodePreview'
import codeData from '@/lib/functions/codeDataTemplateString'
import useCodePreview from '@/lib/hooks/useCodePreview'

import type { Dictionary } from '@/lib/config/i18n/functions/getDictionary'

type Props = {
  dictionary: Dictionary
}

export default function CodeContent({ dictionary }: Props) {
  const { code } = useCodePreview()

  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <CodePreview code={code} language="javascript" />
      </div>
      <div className="mt-3 flex w-full justify-center">
        <ButtonCopy
          text={dictionary.sectionCode.buttonCopy}
          toastSuccess={dictionary.sectionCode.snackbarCopied}
          contentToCopy={codeData(code)}
        />
      </div>
    </div>
  )
}
