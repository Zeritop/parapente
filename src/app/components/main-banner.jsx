import React from 'react'
import { Dancing_Script, Gluten } from 'next/font/google'
import Image from 'next/image'

const dancingScript = Dancing_Script({
    weight: ['400'],
    subsets: ['latin']
})

const gluten = Gluten({
    weight: ['400'],
    subsets: ['latin']
})

export const MainBanner = () => {
  return (
    <div className="trapecio-l">
        <div className='inside-triangulo_img'>
            <Image src="/images/background_portada.png" alt="" width={1000} height={10}/>
        </div>
        <div className='inside-triangulo_texto'>
            <h1 className={gluten.className}>
                Parapente Cordillera
            </h1>
            <h4 className={gluten.className} >Vive una experiencia inolvidable!!</h4>
        </div>
    </div>
  )
}
