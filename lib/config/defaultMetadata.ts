import type { Metadata } from 'next'

import { BASE_PATH } from '@/lib/constants/basePath'
import pwaManifest from '@/public/manifest.json'

const colorPrimary = pwaManifest.theme_color

export const DEFAULT_METADATA: Metadata = {
  manifest: BASE_PATH + '/manifest.json',
  themeColor: colorPrimary,
  icons: {
    icon: [
      {
        type: 'image/x-icon',
        url: BASE_PATH + '/assets/images/favicon/favicon.ico',
      },
      {
        type: 'image/png',
        sizes: '16x16',
        url: BASE_PATH + '/assets/images/favicon/favicon-16x16.png',
      },
      {
        type: 'image/png',
        sizes: '32x32',
        url: BASE_PATH + '/assets/images/favicon/favicon-32x32.png',
      },
    ],
    apple: [
      {
        sizes: '180x180',
        url: BASE_PATH + '/assets/images/favicon/apple-touch-icon.png',
      },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: BASE_PATH + '/assets/images/favicon/safari-pinned-tab.svg',
      },
    ],
  },
}
