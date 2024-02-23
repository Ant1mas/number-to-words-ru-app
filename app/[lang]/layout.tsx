import clsx from 'clsx'
import type { Metadata, Viewport } from 'next'

import { DEFAULT_METADATA } from '@/lib/config/defaultMetadata'
import { roboto } from '@/lib/config/fonts'
import { i18n } from '@/lib/config/i18n/config'
import pwaManifest from '@/public/manifest.json'
import '@/styles/globals.css'

const colorPrimary = pwaManifest.theme_color

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export const metadata: Metadata = {
  title: 'number-to-words-ru node module - Convert number to russian words',
  description: 'Node.js module to convert number to words in russian',
  ...DEFAULT_METADATA,
}

export const viewport: Viewport = {
  themeColor: colorPrimary,
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={lang} className={clsx(['light', roboto.variable])}>
      <head />
      <body>{children}</body>
    </html>
  )
}
