import React from 'react'
import Image from 'next/image'

const Profile = () => {
  return (
    <div className='trapecio-r'>
        <h2 className='profile_title'>Sobre mí</h2>
        <div className='container_profile'>
            <Image 
                src={"/images/profile_parapente.png"}
                width={300}
                height={400}
            />
            <p>David Durán Garrido: Ingeniero Civil  Químico – UdeC, fundador y director www.parapentecordillera.cl, piloto parapente con 15 años de experiencia licencia DGAC – 1713, entrega a sus vuelos seguridad ante todo, pasión y técnica. “-el parapente es una forma de vida, puedes ver y sentir el mundo como las aves, disfrutar la emoción de volar junto a un águila o un cóndor”.-
            </p>
        </div>
    </div>
  )
}

export default Profile