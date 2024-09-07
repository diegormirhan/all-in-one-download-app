"use client"

import React, { useEffect } from 'react';
import Script from 'next/script';

export function AdsComponent({ adSlot, adFormat = 'auto', adLayout = '' }) {

  useEffect(() => {
    try {
      (window).adsbygoogle = (window).adsbygoogle || [];
      (window).adsbygoogle.push({});
    } catch (e) {
      console.error('Error loading ads:', e);
    }
  }, []);

  return (
    <>
      <div>
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

export function GoogleAdsense() {
  return (
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8038191677774356"
        crossorigin="anonymous"></Script>
  )
}