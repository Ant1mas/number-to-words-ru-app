/**
 * Определить текстовое значение для helper
 * у поля ввода округления числа
 * @param options Опции модуля
 * @param translation Переменная "t" из хука "useTranslation"
 * @returns Текстовое значение для helper
 */
const inputRoundNumberHelperText = (
  options: any,
  translation: any,
): string | undefined => {
  if (options.roundNumber <= -1) {
    return translation('options_round_number_helper_disabled')
  }
  if (
    (options.currency === 'rub' ||
      options.currency === 'usd' ||
      options.currency === 'eur') &&
    Number(options.roundNumber) > 2
  ) {
    return translation('options_round_number_helper_currency_max')
  }
}

export default inputRoundNumberHelperText
