export function DocumentMetrics() {
  return (
    <>
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
          __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        
            ym(57320188, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true,
                trackHash:true
            });`,
        }}
      />
      <div>
        <img
          src="https://mc.yandex.ru/watch/57320188"
          style={{ position: 'absolute', left: -9999 }}
          alt=""
        />
      </div>
    </>
  )
}

export default DocumentMetrics
