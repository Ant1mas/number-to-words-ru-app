import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { SnackbarProvider } from 'notistack'

import '../../i18n'
import store from 'app/store'
import theme from 'lib/config/mui/theme'
import createEmotionCache from 'lib/config/mui/createEmotionCache'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <SnackbarProvider transitionDuration={{ enter: 150, exit: 150 }}>
          <Provider store={store}>
            <CssBaseline />
            <Component {...pageProps} />
          </Provider>
        </SnackbarProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
