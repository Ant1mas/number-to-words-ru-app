import { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import clsx from 'clsx'

import '@/styles/globals.css'
import { roboto } from '@/lib/config/fonts'
import Root from '@/components/Root'
import RootProviders from '@/components/RootProviders'
import ReactHotToaster from '@/components/ReactHotToaster'

export function App({ Component, pageProps }: AppProps) {
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

export default appWithTranslation(App)
