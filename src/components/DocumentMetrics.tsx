import Script from 'next/script'

export function DocumentMetrics() {
  return (
    <>
      {/* google analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-153779400-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-153779400-1');
        `}
      </Script>
      {/* yandex metrika */}
      <Script id="yandex-metrika" strategy="afterInteractive">
        {`
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
          ym(57320188, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true,
              trackHash:true
          });
        `}
      </Script>
      <div>
        <img // eslint-disable-line @next/next/no-img-element
          src="https://mc.yandex.ru/watch/57320188"
          style={{ position: 'absolute', left: '-9999px' }}
          alt=""
        />
      </div>
    </>
  )
}

export default DocumentMetrics
