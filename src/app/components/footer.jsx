import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const footer = () => {
  return (
    <div className='footer'>
        <div className='footerTitulo'>
            <h4>Parapente Cordillera</h4>
        </div>
        <div className='footerTitleCamp'>
            Como Llegar
            <hr className='footerHr' style={{width: '30%'}} />
            <div style={{marginTop: '2%'}}>
                <p className='footerComoLlegar'>Camino El Volcán (ruta G-25) 07820 – Las Vizcachas – Santiago – Chile</p>
            </div>
        </div>
        <div className='footerTitleCamp'>
            Contacto
            <hr className='footerHr' style={{width: '50%'}} />
            <div className='redesContacto'>
            <div>
                <Link href={"/instagram"}>
                    <Image 
                        src={'/images/instagram.png'}
                        width={50}
                        height={50}
                        alt=''
                    />          
                </Link>
            </div>
            <div>
                <Link href={"/whatsapp"}>
                    <Image 
                        src={'/images/whatsapp.png'}
                        width={50}
                        height={50}
                        alt=''
                    />          
                </Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default footer