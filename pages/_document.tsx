import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import clsx from 'clsx'

import { roboto } from 'lib/config/fonts'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className={clsx([roboto.variable])} data-theme="light">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
