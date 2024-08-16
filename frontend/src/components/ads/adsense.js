import Script from "next/script";
import React from "react";

export function Adsense(pId) {
    return (
        <>
        <Script 
            async 
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}`}
            crossorigin="anonymous"
            strategy="afterInteractive">
        </Script>
        </>
    )
}