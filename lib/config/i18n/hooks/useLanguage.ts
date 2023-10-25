import { usePathname, useRouter } from 'next/navigation'

import type { Locale } from '../config'

export default function useLanguage() {
  const router = useRouter()
  const pathname = usePathname()

  const getLanguage = (): string => {
    const language = pathname.split('/')[1]
    return language
  }

  const updateLanguage = (newLanguage: Locale): void => {
    const pathArray = pathname.split('/')
    pathArray[1] = newLanguage
    const updatedPath = pathArray.join('/')
    router.push(updatedPath)
  }

  return {
    getLanguage,
    updateLanguage,
  }
}
