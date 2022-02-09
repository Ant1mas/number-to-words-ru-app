import React from 'react'
import { useTranslation } from 'react-i18next'
import Skeleton from '@mui/material/Skeleton'

export function useI18n(
  ns = '',
  options = {},
  hookOptions = {
    loadingComponent: (<Skeleton sx={{minWidth: 50}} variant="text" />),
  }
) {
  const [translationReady, setTranslationReady] = React.useState(false)
  const { t, i18n } = useTranslation(ns, options)

  React.useEffect(() => {
    if (i18n.resolvedLanguage) {
      setTranslationReady(true)
    }
  }, [i18n.resolvedLanguage]) // eslint-disable-line

  const tSkeleton = () => {
    return hookOptions.loadingComponent
  }

  return {
    t: translationReady ? t : tSkeleton,
    i18n,
    translationReady,
  }
}

export default useI18n
