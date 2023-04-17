import { useState, useEffect } from 'react'

import { useAppSelector } from 'lib/config/redux/store'
import { selectModuleNumber } from 'lib/config/redux/slices/moduleNumber/moduleNumberSlice'
import useModuleOptions from 'lib/config/redux/slices/moduleOptions/useModuleOptions'
import objectToString from 'lib/functions/objectToString'
import codeData from 'lib/functions/codeDataTemplateString'
import addSpacesToString from 'lib/functions/addSpacesToString'

export default function useCodePreview() {
  const moduleNumber = useAppSelector(selectModuleNumber)
  const { optionsDifferences } = useModuleOptions()
  const [code, setCode] = useState(`
    const numberToWordsRu = require('number-to-words-ru');

    numberToWordsRu.convert('${moduleNumber}');
  `)

  const optionsDifferencesString = addSpacesToString(
    objectToString(optionsDifferences),
    14,
  )

  useEffect(() => {
    updateCodeText()
  }, [moduleNumber, optionsDifferences]) // eslint-disable-line

  const getCodeFnConvert = () => {
    if (optionsDifferencesString.length > 0) {
      return codeData(`
        numberToWordsRu('${moduleNumber}', {
          ${codeData(optionsDifferencesString)}
        })
      `)
    }
    return `numberToWordsRu('${moduleNumber}');`
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
