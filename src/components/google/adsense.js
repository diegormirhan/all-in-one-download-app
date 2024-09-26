"use client"
import { useEffect, useRef } from 'react'

export function AdsBanner() {
  const banner = useRef()

  const atOptions = {
    key: 'd5a2afd458e99a60cd1a38281b199144',
    format: 'iframe',
    height: 300,
    width: 250,
    params: {},
  }
  
  useEffect(() => {
    if (banner.current && !banner.current.firstChild) {
      const conf = document.createElement('script')
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `//www.topcreativeformat.com/${atOptions.key}/invoke.js`
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`

      banner.current.append(conf)
      banner.current.append(script)
    }
  }, [banner])

  return <div className="mx-auto flex my-5 flex-row justify-center items-center" ref={banner}></div>
}