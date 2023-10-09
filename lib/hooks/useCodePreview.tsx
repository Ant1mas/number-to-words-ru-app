import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'

import { numberAtom } from '@/lib/config/jotai/numberAtom'
import addSpacesToString from '@/lib/functions/addSpacesToString'
import codeData from '@/lib/functions/codeDataTemplateString'
import objectToString from '@/lib/functions/objectToString'
import useOptions from '@/lib/hooks/useOptions'

export default function useCodePreview() {
  const [number] = useAtom(numberAtom)
  const { optionsDifferences } = useOptions()
  const [code, setCode] = useState(`
    const numberToWordsRu = require('number-to-words-ru');

    numberToWordsRu.convert('${number}');
  `)

  const optionsDifferencesString = addSpacesToString(
    objectToString(optionsDifferences),
    14,
  )

  useEffect(() => {
    updateCodeText()
  }, [number, optionsDifferences]) // eslint-disable-line

  const getCodeFnConvert = () => {
    if (optionsDifferencesString.length > 0) {
      return codeData(`
        numberToWordsRu('${number}', {
          ${codeData(optionsDifferencesString)}
        })
      `)
    }
    return `numberToWordsRu('${number}');`
  }

  const updateCodeText = () => {
    setCode(
      codeData(`
      import { convert as numberToWordsRu } from 'number-to-words-ru';

      ${getCodeFnConvert()}
    `),
    )
  }

  return {
    code,
  }
}
