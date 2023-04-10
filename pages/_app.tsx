import { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline'
import { EmotionCache } from '@emotion/react'
import clsx from 'clsx'

import '@/styles/globals.css'
import '@/i18n'
import { roboto } from 'lib/config/fonts'
import createEmotionCache from 'lib/config/mui/createEmotionCache'
import Root from 'components/Root'
import RootProviders from 'components/RootProviders'

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

export default function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <div id="app" className={clsx([roboto.variable])}>
      <RootProviders emotionCache={emotionCache}>
        <CssBaseline />
        <Root />
        <Component {...pageProps} />
      </RootProviders>
    </div>
  )
}
