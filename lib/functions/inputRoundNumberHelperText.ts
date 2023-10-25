import type { Dictionary } from '@/lib/config/i18n/functions/getDictionary'

/**
 * Определить текстовое значение для helper
 * у поля ввода округления числа
 * @param options Опции модуля
 * @param dictionary Словарь перевода
 * @returns Текстовое значение для helper
 */
const inputRoundNumberHelperText = (
  options: any,
  dictionary: Dictionary,
): string | undefined => {
  if (options.roundNumber <= -1) {
    return dictionary.sectionOptions.roundNumber.disabled
  }
  if (
    (options.currency === 'rub' ||
      options.currency === 'usd' ||
      options.currency === 'eur') &&
    Number(options.roundNumber) > 2
  ) {
    return dictionary.sectionOptions.roundNumber.maxValue
  }
}

export default inputRoundNumberHelperText
