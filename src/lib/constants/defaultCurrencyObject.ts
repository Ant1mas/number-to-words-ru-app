export const DEFAULT_CURRENCY_OBJECT = {
  currencyNameCases: ['рубль', 'рубля', 'рублей'],
  currencyNameDeclensions: {
    nominative: ['рубль', ''],
    genitive: ['рубля', 'рублей'],
    dative: ['рублю', 'рублям'],
    accusative: ['рубль', ''],
    instrumental: ['рублём', 'рублями'],
    prepositional: ['рубле', 'рублях'],
  },
  fractionalPartNameCases: ['копейка', 'копейки', 'копеек'],
  fractionalPartNameDeclensions: {
    nominative: ['копейка', ''],
    genitive: ['копейки', 'копеек'],
    dative: ['копейке', 'копейкам'],
    accusative: ['копейку', ''],
    instrumental: ['копейкой', 'копейками'],
    prepositional: ['копейке', 'копейках'],
  },
  currencyNounGender: {
    integer: 0,
    fractionalPart: 1,
  },
  fractionalPartMinLength: 2,
}

export default DEFAULT_CURRENCY_OBJECT
