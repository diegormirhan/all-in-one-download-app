"use client"

import Script from "next/script";
import { useEffect } from "react";
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
  useEffect(() => {
    // Cria um novo elemento de script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      aclib.runAutoTag({
        zoneId: 'in7tope7mf',
      });
    `;

    // Adiciona o script ao body
    document.body.appendChild(script);

  }, []);

  return (
    <div>
      {/* Aqui você pode renderizar qualquer conteúdo relacionado ao anúncio */}
      <p>Anúncio Adcash</p>
    </div>
  );
}