import React from 'react'
import { useTranslation } from 'react-i18next'
import Skeleton from '@mui/material/Skeleton'

export function useI18n(
  ns = '',
  options = {},
  hookOptions = {
    loadingComponent: <Skeleton sx={{ minWidth: 50 }} variant="text" />,
  }
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

export default useI18n
