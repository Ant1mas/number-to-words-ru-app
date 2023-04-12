import { useTranslation } from 'react-i18next'

import SkeletonText from 'components/SkeletonText'

export default function useI18n(
  ns = '',
  options = {},
  hookOptions = {
    loadingComponent: <SkeletonText maxWidth={50} />,
  },
) {
  const { t, i18n } = useTranslation(ns, options)

  const tSkeleton = () => {
    return hookOptions.loadingComponent
  }

  return {
    t: i18n.resolvedLanguage ? t : tSkeleton,
    i18n,
    translationReady: i18n.resolvedLanguage ? true : false,
  }
}
