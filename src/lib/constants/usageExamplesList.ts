export const USAGE_EXAMPLES_LIST = {
  justNumber: {
    moduleNumber: '-2612702',
    moduleOptions: {
      showNumberParts: {
        fractional: false,
      },
      showCurrency: {
        integer: false,
      },
    },
  },
  fractionalNumber: {
    moduleNumber: '22/100',
    moduleOptions: {
      currency: 'number',
      convertNumbertToWords: {
        fractional: true,
      },
      showCurrency: {
        integer: false,
        fractional: false,
      },
    },
  },
  users: {
    moduleNumber: '1122',
    moduleOptions: {
      currency: 'custom',
      customCurrency: {
        currencyNameCases: ['пользователь', 'пользователя', 'пользователей'],
        currencyNameDeclensions: {
          nominative: ['пользователь', ''],
          genitive: ['пользователя', 'пользователей'],
          dative: ['пользователю', 'пользователям'],
          accusative: ['пользователя', ''],
          instrumental: ['пользователем', 'пользователями'],
          prepositional: ['пользователе', 'пользователях'],
        },
        fractionalPartNameCases: ['', '', ''],
        fractionalPartNameDeclensions: {
          nominative: ['', ''],
          genitive: ['', ''],
          dative: ['', ''],
          accusative: ['', ''],
          instrumental: ['', ''],
          prepositional: ['', ''],
        },
        currencyNounGender: {
          integer: 0,
          fractional: 0,
        },
      },
      showNumberParts: {
        fractional: false,
      },
      convertNumbertToWords: {
        fractional: true,
      },
      showCurrency: {
        fractional: false,
      },
    },
  },
  messages: {
    moduleNumber: '201',
    moduleOptions: {
      currency: 'custom',
      customCurrency: {
        currencyNameCases: ['сообщение', 'сообщения', 'сообщений'],
        currencyNameDeclensions: {
          nominative: ['сообщение', ''],
          genitive: ['сообщения', 'сообщений'],
          dative: ['сообщению', 'сообщениям'],
          accusative: ['сообщение', ''],
          instrumental: ['сообщением', 'сообщениями'],
          prepositional: ['сообщении', 'сообщениях'],
        },
        fractionalPartNameCases: ['', '', ''],
        fractionalPartNameDeclensions: {
          nominative: ['', ''],
          genitive: ['', ''],
          dative: ['', ''],
          accusative: ['', ''],
          instrumental: ['', ''],
          prepositional: ['', ''],
        },
        currencyNounGender: {
          integer: 2,
          fractional: 0,
        },
      },
      showNumberParts: {
        fractional: false,
      },
      convertNumbertToWords: {
        fractional: true,
      },
      showCurrency: {
        fractional: false,
      },
    },
  },
  rubles: {
    moduleNumber: '733,5104',
    moduleOptions: {
      convertNumbertToWords: {
        fractional: true,
      },
    },
  },
  currencyNumber: {
    moduleNumber: '622,00421',
    moduleOptions: {
      currency: 'number',
      convertNumbertToWords: {
        fractional: true,
      },
    },
  },
}

export default USAGE_EXAMPLES_LIST
