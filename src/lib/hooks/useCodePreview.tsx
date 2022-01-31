import React from 'react'
import objectToString from 'lib/functions/objectToString'
import codeData from 'lib/functions/codeDataTemplateString'
import { ModuleParamsContext } from 'lib/context/moduleParamsContext'
import addSpacesToString from 'lib/functions/addSpacesToString'

export function useCodePreview() {
  const { number, optionsDifferences } = React.useContext(ModuleParamsContext)
  const [code, setCode] = React.useState(`
    const numberToWordsRu = require('number-to-words-ru');

    numberToWordsRu.convert('${number}');
  `)

  const optionsDifferencesString = addSpacesToString(
    objectToString(optionsDifferences),
    14
  )

  React.useEffect(() => {
    updateCodeText()
  }, [number, optionsDifferences]) // eslint-disable-line

  const getCodeFnConvert = () => {
    if (optionsDifferencesString.length > 0) {
      return codeData(`
        numberToWordsRu.convert('${number}', {
          ${codeData(optionsDifferencesString)}
        })
      `)
    }
    return `numberToWordsRu.convert('${number}');`
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
