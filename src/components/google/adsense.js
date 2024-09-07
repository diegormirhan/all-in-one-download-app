"use client"

import React, { useEffect } from 'react';
import Script from 'next/script';

export function AdsComponent({ adSlot, adFormat = 'auto', adLayout = '' }) {

  useEffect(() => {
    // Verifica se está no lado do cliente e se o adsbygoogle está disponível
    if (typeof window !== 'undefined' && typeof window.adsbygoogle !== 'undefined') {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('Erro ao carregar anúncios: ', e);
      }
    }
  }, []);

  return (
    <>
      <div className="w-auto h-auto">
        <ins className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-8038191677774356"
          data-ad-slot={adSlot}
          data-ad-format={adFormat}
          data-ad-layout={adLayout}></ins>
      </div>
    </>
  )
}

export default function GoogleAdsense() {
  return (
    <>
        <Script 
        async 
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8038191677774356" 
        crossOrigin="anonymous"
        strategy="lazyOnload"
        />
    </>
  )
}