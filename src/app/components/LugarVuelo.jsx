import React from 'react'
import Image from 'next/image'

const LugarVuelo = () => {
  return (
    <div className='trapecio-r'>
        <h2 style={{textAlign: 'center', fontSize: '40px', paddingTop:'1%', paddingBottom:'1%'}}>El Lugar del Vuelo</h2>
        
        <p className='textoLugarVuelo' style={{marginLeft: '5%'}}>A la entrada del cajón del maípo, sector suroriente de Santiago,  ubicado en Camino El Volcán 07820 – Las Vizcachas, se encuentra el centro de vuelo de Geopark.  Con un despegue a 260 metros de altura sobre cima de cerro Blanco, su amplio aterrizaje y condiciones climáticas únicas lo convierten en uno de los lugares de vuelo libre preferidos sobre cordillera de los andes en Chile. <br /> El área de vuelo consiste en el área delimitada en fotograma, faldeos lado sur-oriente de cerro Minillas hacia el valle, y por el sur camino El Volcán . 
        </p>
        
        <p className='textoLugarVuelo' style={{marginLeft: '5%'}}>La Flora-fauna de la zona de vuelo es característica de la precordillera de los andes,  en la zona central de Chile, con bosques donde encontramos especies nativas y algunas también endémicas que podemos descubrir x ej. con un treking: Quillay, Litre, Boyén, Espino, Quisco, Colliguay, entre otras, y animales como lagarto chileno, culebra de cola larga, zorro y  podemos compartir en vuelo con aves como peucos, águilas y cóndores. <br /> La cordillera de los andes en el área de vuelo y  a través de sus faldeos asciende en una precima a los 2100 msnm y finalmente en la cumbre del cerro minilla a 2465 msnm.-

        </p>
        <div className='imgLugarDelVuelo'>
            <Image 
                src={'/images/lugar_vuelo.png'}
                width={1000}
                height={400}
                alt=''
            />
        </div>
    </div>
  )
}

export default LugarVuelo