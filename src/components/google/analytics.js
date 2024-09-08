"use client"
import Script from "next/script";

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        strategy='lazyOnload'
        src="https://www.googletagmanager.com/gtag/js?id=G-B65YS6ZRBK"
      />

      <Script id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-B65YS6ZRBK');
        `}
      </Script>
    </>
  );
}