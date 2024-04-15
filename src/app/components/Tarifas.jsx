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
      <div style={{width: '100%', height: '100%'}}>
        {/* <h2 style={{textAlign: 'center', fontSize: '40px'}}>Tarifas producto - paquetes</h2> */}
        <Image
            src={'/images/img_tarifas_3.png'}
            layout='responsive'
            width={1000}
            height={600}
            alt=''
        />
      </div>
        <div className='containerVideoTarifas'>
            <ReactPlayer url={'/videos/video-plano-web.MP4'} controls width='100%' />
            <ReactPlayer url={'/videos/video360web.MP4'} controls width='100%' />
        </div>
        <br />
        <div style={{width: '100%'}}>
          <h2 style={{textAlign: 'center', fontSize: '40px', marginTop: '1%', marginBottom: '1%'}}>Vuelos Especiales</h2>
          <Image
              src={'/images/vuelos_esp.png'}
              layout='responsive'
              width={1000}
              height={600}
              alt=''
          />
        </div>
    </div>
  )
}

export default Tarifas