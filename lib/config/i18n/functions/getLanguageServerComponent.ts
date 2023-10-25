import { headers } from 'next/headers'
import 'server-only'

import { i18n } from '../config'

import type { Locale } from '../config'

export const getLanguageServerComponent = (): Locale => {
  const headersList = headers()
  const url = headersList.get('x-url') || ''
  const pathname = new URL(url).pathname.split('/')
  const pathLang = pathname[1]
  // @ts-ignore
  const lang: Locale = i18n.locales.includes(pathLang)
    ? pathLang
    : i18n.defaultLocale
  return lang
}
