import { BASE_PATH } from 'lib/constants/basePath'
import pwaManifest from 'public/manifest.json'

export default function DefaultMetadata() {
  const colorPrimary = pwaManifest.theme_color

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="manifest" href={BASE_PATH + '/manifest.json'} />
      <meta name="theme-color" content="#efecf4" />
      <meta name="msapplication-TileColor" content={colorPrimary} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={BASE_PATH + '/favicon/apple-touch-icon.png'}
      />
      <link
        rel="icon"
        type="image/x-icon"
        href={BASE_PATH + '/favicon/favicon.ico'}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={BASE_PATH + '/favicon/favicon-16x16.png'}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={BASE_PATH + '/favicon/favicon-32x32.png'}
      />
      <link
        rel="mask-icon"
        href={BASE_PATH + '/favicon/safari-pinned-tab.svg'}
        color="#323232"
      />
      <meta
        name="msapplication-TileImage"
        content={BASE_PATH + '/favicon/mstile-144x144.png'}
      />
    </>
  )
}
