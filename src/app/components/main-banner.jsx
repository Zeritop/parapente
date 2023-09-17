import React from 'react'
import { Dancing_Script, Gluten } from 'next/font/google'

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
            <img src="/images/IMG_001-removebg.png" alt="" />
        </div>
        <div className='inside-triangulo_texto'>
            <h1 className={gluten.className}>
                Parapente Cordillera
            </h1>
            <h4 className={dancingScript.className}>Vive una experiencia inolvidable!!</h4>
        </div>
    </div>
  )
}
