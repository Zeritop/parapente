'use client'
import React from 'react'
import Image from 'next/image'
import ReactPlayer from 'react-player'

const Tarifas = () => {
  return (
    <div className='container_tarifas'>
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
            src={'/images/vuelos_especiales.png'}
            width={1000}
            height={600}
            alt=''
        />
    </div>
  )
}

export default Tarifas