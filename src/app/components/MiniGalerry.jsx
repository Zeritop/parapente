import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const MiniGalerry = () => {
  return (
    <div className='container-mini-gallery'>
        <h2>Galería de Fotos</h2>
        <div className='mini-gallery'>
            <Image src="/images/IMG_003.JPG" alt="" />
            <Image src="/images/IMG_007.JPG" alt="" />
            <Image src="/images/IMG_008.JPG" alt="" />
        </div>
        <video width="500" height="400" poster='/images/thumbnail.png' controls>
            <source src='/images/1ocomercial.webm' type='video/webm' />
        </video>
        <div className='container_botones_ver'>
          <Link href={"/portafolio_imagenes"}>Ver Imagénes</Link>
          <Link href={"/portafolio_videos"}>Ver Videos</Link>
        </div>
    </div>
  )
}

export default MiniGalerry