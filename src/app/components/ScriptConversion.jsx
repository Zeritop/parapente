'use client'
import React, { useEffect, useState } from 'react'

const ScriptConversion = () => {
    const [tarScript, setTarScript] = useState(`gtag('event', 'conversion', {'send_to': ''});`);
    useEffect(() => {
        window.onscroll = function() {
        let url = window.location.href;
        let urlHastag = url.split("#");
        let y = window.scrollY;

        if (y == 5500 || urlHastag[1] == 'tarifas') {
            setTarScript(`gtag('event', 'conversion', {'send_to': 'AW-11376305852/N9c-CNOA2fIYELzN0rAq'});`)
        }

        };
    }, [])
  return (
    <>
        <script dangerouslySetInnerHTML={{__html:tarScript}} />
    </>
  )
}

export default ScriptConversion