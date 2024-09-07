"use client"

import React, { useEffect } from 'react';

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
          data-ad-client={process.env.GOOGLE_ADSENSE_CLIENT}
          data-ad-slot={adSlot}
          data-ad-format={adFormat}
          data-ad-layout={adLayout}></ins>
      </div>
    </>
  )
}