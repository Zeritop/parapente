'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import ReactPlayer from 'react-player'

const Tarifas = () => {
  useEffect(() => {
    const scriptTar = document.createElement('script');
    scriptTar.text = "gtag('event', 'conversion', {'send_to': 'AW-11376305852/N9c-CNOA2fIYELzN0rAq'});";
    document.head.appendChild(scriptTar);
  }, [])
  return (
    <div className='container_tarifas' id='tarifas'>
        <h2 style={{textAlign: 'center', fontSize: '40px'}}>Tarifas producto - paquetes</h2>
        <Image
            src={'/images/tarifas.png'}
            width={1000}
            height={600}
            alt=''
        />
        <div className='containerVideoTarifas'>
            <ReactPlayer url={'/videos/Opción gopro.MP4'} controls width='100%' />
            <ReactPlayer url={'/videos/Opción insta.MP4'} controls width='100%' />
        </div>
        <br />
        <h2 style={{textAlign: 'center', fontSize: '40px', marginTop: '1%', marginBottom: '1%'}}>Vuelos Especiales</h2>
        <Image
            src={'/images/vuelos_esp.png'}
            width={1000}
            height={600}
            alt=''
        />
    </div>
  )
}

export default Tarifas