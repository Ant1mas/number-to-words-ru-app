import { NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages, cookieName } from '@/lib/config/i18n/settings'

acceptLanguage.languages(languages)

export const config = {
  // matcher: '/:lang*'
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|manifest.json).*)',
  ],
}

export function middleware(request: any) {
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-url', request.url)

  let lang
  if (request.cookies.has(cookieName))
    lang = acceptLanguage.get(request.cookies.get(cookieName).value)
  if (!lang) lang = acceptLanguage.get(request.headers.get('Accept-Language'))
  if (!lang) lang = fallbackLng

  // Redirect if lang in path is not supported
  if (
    !languages.some((loc) => request.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !request.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(
      new URL(`/${lang}${request.nextUrl.pathname}`, request.url),
    )
  }

  if (request.headers.has('referer')) {
    const refererUrl = new URL(request.headers.get('referer'))
    const langInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`),
    )
    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
    if (langInReferer) response.cookies.set(cookieName, langInReferer)
    return response
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}
