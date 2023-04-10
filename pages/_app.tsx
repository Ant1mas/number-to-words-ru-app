import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { SnackbarProvider } from 'notistack'
import TagManager from 'react-gtm-module'
import clsx from 'clsx'

import '@/styles/globals.css'
import '@/i18n'
import { roboto } from 'lib/config/fonts'
import store from '@/app/store'
import theme from 'lib/config/mui/theme'
import createEmotionCache from 'lib/config/mui/createEmotionCache'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-5D952ZP' })
  }, [])

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider transitionDuration={{ enter: 150, exit: 150 }}>
          <Provider store={store}>
            <CssBaseline />
            <div id="app" className={clsx([roboto.variable])}>
              <Component {...pageProps} />
            </div>
          </Provider>
        </SnackbarProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}
