import numberToWordsRu from 'number-to-words-ru'

type ConvertParams = Parameters<typeof numberToWordsRu.convert>
type Options = ConvertParams[1]

export const DEFAULT_MODULE_OPTIONS: Options = {
  currency: 'rub',
  declension: 'nominative',
  roundNumber: -1,
  convertMinusSignToWord: true,
  showNumberParts: {
    integer: true,
    fractional: true,
  },
  convertNumberToWords: {
    integer: true,
    fractional: false,
  },
  showCurrency: {
    integer: true,
    fractional: true,
  },
}

export default DEFAULT_MODULE_OPTIONS
