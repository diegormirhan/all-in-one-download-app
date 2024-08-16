"use client";
import { useEffect } from 'react';

export function VerticalAds() {
    return (
        <>
            <div className="hidden lg:flex bg-gray-300 h-96 w-40 items-center justify-center rounded-lg font-semibold">
                GOOGLE ADS
            </div>
        </>
    )
}


export function HorizontalAds() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("Adsbygoogle push error:", e);
      }
    }
  }, []);

  return (
    <ins className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-8038191677774356"
      data-ad-slot="5378381076"
      data-ad-format="auto"
      data-adtest="on"
      data-full-width-responsive="true">
    </ins>
  );
}
