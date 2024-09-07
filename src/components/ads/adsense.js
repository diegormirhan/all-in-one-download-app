import Script from "next/script";

export function Adsense() {
    return (
        <>
            <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8038191677774356"
                crossorigin="anonymous"></Script>
        </>
    )
}