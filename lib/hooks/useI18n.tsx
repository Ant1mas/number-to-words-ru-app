import { useCallback } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

export const DEFAULT_LOADING_STATE = '[[LOADING]]'

export default function useI18n(ns = 'common') {
  const router = useRouter()
  const { t: tLib, i18n } = useTranslation(ns)

  const t = (textKey, loadingState = DEFAULT_LOADING_STATE): string => {
    return i18n.resolvedLanguage ? tLib(textKey) : loadingState
  }

  const changeLocale = useCallback(
    (newLocale: string) => {
      const { pathname, asPath, query } = router
      router.push({ pathname, query }, asPath, { locale: newLocale })
    },
    [router],
  )

  return {
    t,
    locales: router.locales,
    locale: router.locale,
    changeLocale,
  }
}
