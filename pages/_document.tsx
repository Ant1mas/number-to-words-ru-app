import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'
import theme from 'lib/config/mui/theme'
import createEmotionCache from 'lib/config/mui/createEmotionCache'
import { staticCdn } from 'lib/constants/cdn'

const isProduction = process.env.NODE_ENV === 'production'
const urlPrefix = isProduction ? staticCdn : ''

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={urlPrefix + '/favicon/apple-touch-icon.png'}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={urlPrefix + '/favicon/favicon-32x32.png'}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={urlPrefix + '/favicon/favicon-16x16.png'}
          />
          <link rel="manifest" href={urlPrefix + '/favicon/site.webmanifest'} />
          <link
            rel="mask-icon"
            href={urlPrefix + '/favicon/safari-pinned-tab.svg'}
            color="#323232"
          />
          <meta name="msapplication-TileColor" content="#ffc40d" />
          <meta
            name="msapplication-TileImage"
            content={urlPrefix + '/favicon/mstile-144x144.png'}
          />
          <meta name="theme-color" content={theme.palette.primary.main} />
          {/* fonts */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          {/* google analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-153779400-1"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","UA-153779400-1");`,
            }}
          />
          {/* yandex metrika */}
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(e,t,a,c,n,m,r){e.ym=e.ym||function(){(e.ym.a=e.ym.a||[]).push(arguments)},e.ym.l=1*new Date,m=t.createElement(a),r=t.getElementsByTagName(a)[0],m.async=1,m.src="https://mc.yandex.ru/metrika/tag.js",r.parentNode.insertBefore(m,r)}(window,document,"script"),ym(57320188,"init",{clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0,trackHash:!0});`,
            }}
          />
        </Head>
        <body>
          {/* yandex metrika */}
          <div>
            <img
              src="https://mc.yandex.ru/watch/57320188"
              style={{ position: 'absolute', left: -9999 }}
              alt=""
            />
          </div>
          {/* /yandex metrika */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage
  const cache = createEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)
  ctx.renderPage = () =>
    originalRenderPage({
      // eslint-disable-next-line react/display-name
      enhanceApp: (App: any) => (props) =>
        <App emotionCache={cache} {...props} />,
    })
  const initialProps = await Document.getInitialProps(ctx)
  const emotionStyles = extractCriticalToChunks(initialProps.html)
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ))

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      ...emotionStyleTags,
    ],
  }
}
