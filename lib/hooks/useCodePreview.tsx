import React from 'react'

import { useAppSelector } from '@/app/store'
import { selectModuleNumber } from 'features/moduleNumber/moduleNumberSlice'
import useModuleOptions from 'features/moduleOptions/useModuleOptions'
import objectToString from 'lib/functions/objectToString'
import codeData from 'lib/functions/codeDataTemplateString'
import addSpacesToString from 'lib/functions/addSpacesToString'

export function useCodePreview() {
  const moduleNumber = useAppSelector(selectModuleNumber)
  const { optionsDifferences } = useModuleOptions()
  const [code, setCode] = React.useState(`
    const numberToWordsRu = require('number-to-words-ru');

    numberToWordsRu.convert('${moduleNumber}');
  `)

  const optionsDifferencesString = addSpacesToString(
    objectToString(optionsDifferences),
    14
  )

  React.useEffect(() => {
    updateCodeText()
  }, [moduleNumber, optionsDifferences]) // eslint-disable-line

  const getCodeFnConvert = () => {
    if (optionsDifferencesString.length > 0) {
      return codeData(`
        numberToWordsRu.convert('${moduleNumber}', {
          ${codeData(optionsDifferencesString)}
        })
      `)
    }
    return `numberToWordsRu.convert('${moduleNumber}');`
  }

  const updateCodeText = () => {
    setCode(
      codeData(`
      const numberToWordsRu = require('number-to-words-ru');

      ${getCodeFnConvert()}
    `)
    )
  }

  return {
    code,
  }
}

export default useCodePreview
