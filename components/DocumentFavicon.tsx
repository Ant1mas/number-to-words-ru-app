import projectPath from 'lib/functions/projectPath'

export function DocumentFavicon() {
  return (
    <>
      <link rel="manifest" href={projectPath('/manifest.json')} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={projectPath('/favicon/apple-touch-icon.png')}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={projectPath('/favicon/favicon-32x32.png')}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={projectPath('/favicon/favicon-16x16.png')}
      />
      <link
        rel="mask-icon"
        href={projectPath('/favicon/safari-pinned-tab.svg')}
        color="#323232"
      />
      <meta name="msapplication-TileColor" content="#ffc40d" />
      <meta
        name="msapplication-TileImage"
        content={projectPath('/favicon/mstile-144x144.png')}
      />
    </>
  )
}

export default DocumentFavicon
