'use client'
import { Gallery } from 'next-gallery'
import { Gluten } from 'next/font/google'
import Link from 'next/link'

const gluten = Gluten({
  weight: ['400'],
  subsets: ['latin']
})

export default function Imagenes() {
  const aspect_ratio = 16/9
  const aspect_vertical = 20/25
  
  const images = [
    {src: "/images/IMG_001.JPG", aspect_ratio: aspect_ratio},
    {src: "/images/IMG_002.JPG", aspect_ratio: aspect_ratio},
    {src: "/images/IMG_003.JPG", aspect_ratio: aspect_ratio},
    {src: "/images/IMG_004.JPG", aspect_ratio: aspect_ratio},
    {src: "/images/IMG_005.JPG", aspect_ratio: aspect_ratio},
    {src: "/images/IMG_006.JPG", aspect_ratio: aspect_ratio},
    {src: "/images/IMG_007.JPG", aspect_ratio: aspect_ratio},
    {src: "/images/IMG_008.JPG", aspect_ratio: aspect_ratio},
    {src: "/images/IMG_009.JPG", aspect_ratio: aspect_ratio},
    {src: "/images/IMG_010.JPG", aspect_ratio: aspect_ratio},
    {src: "/images/IMG_011.JPG", aspect_ratio: aspect_vertical},
    {src: "/images/IMG_012.JPG", aspect_ratio: aspect_vertical},
    {src: "/images/IMG_013.JPG", aspect_ratio: aspect_vertical  },
    {src: "/images/IMG_014.JPG", aspect_ratio: aspect_ratio},
    {src: "/images/IMG_015.JPG", aspect_ratio: aspect_ratio},
    {src: "/images/IMG_016.JPG", aspect_ratio: aspect_vertical},
    {src: "/images/IMG_017.JPG", aspect_ratio: aspect_vertical},
    {src: "/images/IMG_018.JPG", aspect_ratio: aspect_vertical},
    {src: "/images/IMG_019.JPG", aspect_ratio: aspect_vertical},
    {src: "/images/IMG_020.JPG", aspect_ratio: aspect_vertical},
    {src: "/images/IMG_021.JPG", aspect_ratio: aspect_ratio},
    {src: "/images/IMG_022.JPG", aspect_ratio: aspect_vertical},
    {src: "/images/IMG_024.JPG", aspect_ratio: aspect_vertical},
    {src: "/images/IMG_025.JPG", aspect_ratio: aspect_vertical},
    {src: "/images/IMG_026.JPG", aspect_ratio: aspect_vertical},
    {src: "/images/IMG_027.JPG", aspect_ratio: aspect_vertical},
    {src: "/images/IMG_028.JPG", aspect_ratio: aspect_ratio},
    {src: "/images/IMG_029.JPG", aspect_ratio: aspect_ratio},
    {src: "/images/IMG_030.JPG", aspect_ratio: aspect_ratio},
    {src: "/images/IMG_031.JPG", aspect_ratio: aspect_vertical},
    {src: "/images/IMG_032.JPG", aspect_ratio: aspect_ratio}
  ]
  const widths = [ 500, 1000, 1600 ]
  const ratios = [ 2.2, 4, 6, 8 ] 
  return (
    <main>
     <div className='trapecio-l'>
      <div className='container-portafolio_header'>
        <h1 className={gluten.className} >Imágenes</h1>
      </div>
     </div>
      <Gallery {...{images, widths, ratios}} />
      <div className='container_botones_ver' style={{display: 'flex', justifyContent: 'center'}}>
          <Link href={"/"}>Volver</Link>
      </div>
    </main>
  )
}
