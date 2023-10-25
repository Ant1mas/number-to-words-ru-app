import 'server-only'

import { i18n } from '../config'
import { getLanguageServerComponent } from './getLanguageServerComponent'

import type { Locale } from '../config'

export type Dictionary = typeof import('../dictionaries/en.json')

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  ru: () => import('../dictionaries/ru.json').then((module) => module.default),
  en: () => import('../dictionaries/en.json').then((module) => module.default),
}

export const getDictionary = async (locale?: Locale): Promise<Dictionary> => {
  const selectedLocale = locale ?? getLanguageServerComponent()
  return (
    dictionaries[selectedLocale]?.() ?? dictionaries?.[i18n.defaultLocale]?.()
  )
}
