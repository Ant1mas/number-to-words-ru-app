import { useTranslation } from 'react-i18next'

export const DEFAULT_LOADING_STATE = '[[LOADING]]'

export default function useI18n(ns = '', options = {}) {
  const { t: tLib, i18n } = useTranslation(ns, options)

  const t = (textKey, loadingState = DEFAULT_LOADING_STATE): string => {
    return i18n.resolvedLanguage ? tLib(textKey) : loadingState
  }

  return {
    t,
    i18n,
    translationReady: i18n.resolvedLanguage ? true : false,
  }
}
