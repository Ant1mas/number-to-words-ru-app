import { AppProps } from 'next/app'
import clsx from 'clsx'

import '@/styles/globals.css'
import '@/i18n'
import { roboto } from 'lib/config/fonts'
import Root from 'components/Root'
import RootProviders from 'components/RootProviders'
import ReactHotToaster from 'components/ReactHotToaster'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <div id="app" className={clsx([roboto.variable], 'flex justify-center')}>
      <ReactHotToaster />
      <RootProviders>
        <Root />
        <Component {...pageProps} />
      </RootProviders>
    </div>
  )
}
