export const DEFAULT_CURRENCY_OBJECT = {
  currencyNameCases: ['рубль', 'рубля', 'рублей'],
  currencyNameDeclensions: {
    nominative: ['рубль', 'рубли'],
    genitive: ['рубля', 'рублей'],
    dative: ['рублю', 'рублям'],
    accusative: ['рубль', 'рубли'],
    instrumental: ['рублём', 'рублями'],
    prepositional: ['рубле', 'рублях'],
  },
  fractionalPartNameCases: ['копейка', 'копейки', 'копеек'],
  fractionalPartNameDeclensions: {
    nominative: ['копейка', 'копейки'],
    genitive: ['копейки', 'копеек'],
    dative: ['копейке', 'копейкам'],
    accusative: ['копейку', 'копейки'],
    instrumental: ['копейкой', 'копейками'],
    prepositional: ['копейке', 'копейках'],
  },
  currencyNounGender: {
    integer: 0,
    fractionalPart: 1,
  },
  fractionalPartMinLength: 2,
};

export default DEFAULT_CURRENCY_OBJECT;
