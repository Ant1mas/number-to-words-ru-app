import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import clsx from 'clsx'

import { roboto } from 'lib/config/fonts'
import i18nextConfig from '@/next-i18next.config'

export default class MyDocument extends Document {
  render() {
    const currentLocale =
      this.props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale
    return (
      <Html lang={currentLocale} className={clsx(['light', roboto.variable])}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
