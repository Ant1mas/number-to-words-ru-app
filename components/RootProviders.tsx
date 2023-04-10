import { CacheProvider as EmotionCacheProvider } from '@emotion/react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { SnackbarProvider } from 'notistack'
import { Provider as ReduxProvider } from 'react-redux'

import theme from 'lib/config/mui/theme'
import store from '@/app/store'

type Props = {
  emotionCache?: any
  children: React.ReactElement | React.ReactElement[]
}

export default function RootProviders({ emotionCache, children }: Props) {
  return (
    <EmotionCacheProvider value={emotionCache}>
      <SnackbarProvider transitionDuration={{ enter: 150, exit: 150 }}>
        <MuiThemeProvider theme={theme}>
          <ReduxProvider store={store}>{children}</ReduxProvider>
        </MuiThemeProvider>
      </SnackbarProvider>
    </EmotionCacheProvider>
  )
}
