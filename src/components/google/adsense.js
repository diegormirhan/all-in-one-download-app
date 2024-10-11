import Script from "next/script";

export function AdsBanner ({ adWidth = 300, adHeight = 250 }) {
  return (
    <>
    {/*<iframe
      src="//www.topcreativeformat.com/watchnew?key=d5a2afd458e99a60cd1a38281b199144"
      width={adWidth}
      height={adHeight} 
      frameBorder="0"
      scrolling="no"
      className='mx-auto flex my-5 flex-row justify-center items-center'
      title="Anúncio do Adsterra"
    ></iframe>*/}
    </>
  );
};

export function AdCash() {
  return (
    <>
    <Script id="aclib" type="text/javascript" src="//acscdn.com/script/aclib.js"></Script>
    </>
  )
}

export function AdPage() {
  <Script id="adpage" type="text/javascript" dangerouslySetInnerHTML={{
    __html: `
      aclib.runAutoTag({
        zoneId: 'in7tope7mf',
      });
    `,
  }}
  />
}