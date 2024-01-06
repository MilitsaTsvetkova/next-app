import Script from 'next/script'
import React from 'react'

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-DNJN1PF3CS'
      />
      <Script id='google-tag-manager'>
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-XXXXXXX');`}
      </Script>
    </>
  )
}

export default GoogleAnalytics
