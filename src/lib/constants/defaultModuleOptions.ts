import numberToWordsRu from 'number-to-words-ru'

type convertParams = Parameters<typeof numberToWordsRu.convert>
type options = convertParams[1]

export const DEFAULT_MODULE_OPTIONS: options = {
  currency: 'rub',
  declension: 'nominative',
  roundNumber: -1,
  convertMinusSignToWord: true,
  showNumberParts: {
    integer: true,
    fractional: true,
  },
  convertNumbertToWords: {
    integer: true,
    fractional: false,
  },
  showCurrency: {
    integer: true,
    fractional: true,
  },
}

export default DEFAULT_MODULE_OPTIONS
