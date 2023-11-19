import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ComoLlegar = () => {
  return (
    <div className='trapecio-r'>
        <div className='containerComoLlegar'>
            <h2>Donde estamos? Cómo llegar?</h2>
            <p style={{textAlign: 'center'}}>Camino El Volcán (ruta G-25) 07820 – Las Vizcachas – Santiago – Chile</p>
            <p> 
                Puedes llegar de 2 maneras tomando como referencia de inicio Metro – Tobalaba (Providencia): 
            </p>
            <ul>
                <li><b>En auto :</b> Ruta celeste en mapa. En dirección al sur-oriente vía Av. Tobalaba – Av. Ossa – Vespucio – Av. La Florida – Av. Camilo Henríquez – Camino El Volcán (ruta G-25) ( Usa App. Waze y busca Geopark Vizcachas).-</li>
                <li><b>En metro – taxi colectivo – bus  :</b> <br /> <b>opción 1 :</b> vía línea 4 del metro (color azul) – Desde estación terminal “Tobalaba” hasta estación “Las Mercedes”, desde aquí tomar colectivo hacia cajón del maipo líneas 4010  o 4014, o bus local MB72,  que te dejarán afuera de Geopark. <br />
	            <b>opción 2:</b> vía línea 4 del metro (color azul) – Desde estación terminal “Tobalaba” hasta estación terminal “Plaza Puente Alto”, luego tomar bus F11 (en PF88-Parada 1 / (M) Plaza De Puente Alto) hasta PF896-Parada / Hacienda El Peñón, luego caminas 10 min y llegas a Geopark.-</li>
            </ul>
             <br />
            
            <p>
            Al aproximar al parque te llamara la atención el muro escalada y la grúa amarilla del bungee, y el vuelo o aterrizaje de parapentes en el área. El Geopark dispone de estacionamientos.
            </p>
            <div>
              <a className='goTarifas' href="#tarifas">Ver Tarifas</a>
              <Link className='reservaTuVuelo' href={"/whatsapp"}>
                <div className='reservaTuVuelo-content'>
                    Agenda tu vuelo
                    <Image 
                        src={'/images/whatsapp.png'}
                        width={25}
                        height={25}
                        alt=''
                    />          
                </div>
              </Link>
            </div>
        </div>
            <div className='imgComoLlegar'>
                <Image 
                    src={'/images/como_llegar.png'}
                    fill
                    alt=""
                />
            </div>
    </div>
  )
}

export default ComoLlegar