import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { headers } from 'next/headers'
import { initReactI18next } from 'react-i18next/initReactI18next'

import { getOptions } from './settings'

const initI18next = async (lang: string, ns?: string) => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`),
      ),
    )
    .init(getOptions(lang, ns))
  return i18nInstance
}

export async function useTranslation(ns?: string, options: any = {}) {
  const headersList = headers()
  const url = headersList.get('x-url') || ''
  const pathname = new URL(url).pathname.split('/')
  const pathLang = pathname[1]
  const lang = pathLang

  const i18nextInstance = await initI18next(lang, ns)
  return {
    t: i18nextInstance.getFixedT(
      lang,
      Array.isArray(ns) ? ns[0] : ns,
      options.keyPrefix,
    ),
    i18n: i18nextInstance,
  }
}
