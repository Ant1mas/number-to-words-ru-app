import type { Metadata } from 'next'
import { dir } from 'i18next'
import clsx from 'clsx'

import { languages } from '@/lib/config/i18n/settings'
import { roboto } from '@/lib/config/fonts'
import '@/styles/globals.css'
import { DEFAULT_METADATA } from '@/lib/config/defaultMetadata'

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }))
}

export const metadata: Metadata = {
  title: 'number-to-words-ru node module - Convert number to russian words',
  description: 'Node.js module to convert number to words in russian',
  ...DEFAULT_METADATA,
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html
      lang={lang}
      dir={dir(lang)}
      className={clsx(['light', roboto.variable])}
    >
      <head />
      <body>{children}</body>
    </html>
  )
}
