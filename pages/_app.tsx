import React from 'react';
import 'styles/global.sass'
import 'prismjs/themes/prism.css';
import 'locales/i18n/i18n';
import { CssBaseline } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';

const App = ({ Component, pageProps }) => {
  // Material-ui module.
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <SnackbarProvider transitionDuration={{enter: 150, exit: 150}}>
        <CssBaseline />
        <Component {...pageProps} />
      </SnackbarProvider>
    </>
  )
}

export default App;
