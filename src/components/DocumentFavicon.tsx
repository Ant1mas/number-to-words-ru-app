import { STATIC_CDN } from 'lib/constants/cdn'

const isProduction = process.env.NODE_ENV === 'production'
const urlPrefix = isProduction ? STATIC_CDN : ''

export function DocumentFavicon() {
  return (
    <>
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
    </>
  )
}

export default DocumentFavicon
