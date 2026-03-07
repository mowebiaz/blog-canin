'use client'

import Script from 'next/script'

const clientId = process.env.NEXT_PUBLIC_AXEPTIO_CLIENT_ID
const cookiesVersion = process.env.NEXT_PUBLIC_AXEPTIO_COOKIES_VERSION

export function AxeptioScript() {
  if (!clientId || !cookiesVersion) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        '[Axeptio] Variables NEXT_PUBLIC_AXEPTIO_CLIENT_ID et NEXT_PUBLIC_AXEPTIO_COOKIES_VERSION manquantes.',
      )
    }
    return null
  }

  return (
    <Script
      id="axeptio"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.axeptioSettings = {
            clientId: "${clientId}",
            cookiesVersion: "${cookiesVersion}",
          };
          (function(d, s) {
            var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
            e.async = true;
            e.src = "//static.axept.io/sdk.js";
            t.parentNode.insertBefore(e, t);
          })(document, "script");
        `,
      }}
    />
  )
}
