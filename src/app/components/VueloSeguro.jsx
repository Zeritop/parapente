'use client'
import React, { useEffect } from 'react'

const VueloSeguro = () => {
    useEffect(()=>{
        const scriptTar = document.createElement('script');
        scriptTar.text = "gtag('event', 'conversion', {'send_to': 'AW-11376305852/i8g_CO-RifQYELzN0rAq'});";
        document.head.appendChild(scriptTar);
    },[])
  return (
    <div style={{width: '100%'}} id='vuelo-seguro'>
        <h2 style={{textAlign: 'center', fontSize: '40px'}}>Vuelo Seguro</h2>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', justifyContent: 'center'}}>
            <p style={{width: '80%', marginBottom: '5%'}}>En materia de seguridad, PARAPENTE CORDILLERA cuenta con asesoría permanente en Prevención de Riesgos. Considerando en esta materia, los aspectos  antes, durante y después del vuelo.
            </p>
            <h3 style={{fontSize: '25px'}}>
            ANTES DEL VUELO:
            </h3>
            <ul style={{width: '80%', marginBottom: '5%'}}>
                <li style={{fontSize: '20px'}}>Contamos con equipos de excelente calidad, con sus respectivos chequeos y testeos reglamentarios, de acuerdo a las normas y horas de vuelo.</li>
                <li style={{fontSize: '20px'}}>Nuestros pilotos cuentan con una vasta experiencia en pilotaje, sus credenciales y documentación al día, de acuerdo a las exigencias de la dirección general de aeronáutica civil (DGAC).</li>
                <li style={{fontSize: '20px'}}>Antes del despegue, nuestros pilotos, realizan un chequeo general del equipo de vuelo, una inducción al pasajero, indicando las medidas de seguridad y las maniobras necesarias para un despegue agradable y seguro.</li>
            </ul>
            <h3 style={{fontSize: '25px'}}>
                DURANTE EL VUELO:
            </h3>
            <p style={{width: '80%',marginBottom: '5%'}}>
                Nuestros pilotos se adecuan a tipo de pasajero, a sus expectativas respecto al vuelo (distancias, alturas y rutas propuestas por el instructor de vuelo, Etc.). Se interactúa permanente mente con el pasajero con el fin de trasmitir tranquilidad, una experiencia única, agradable y segura.
            </p>
            <h3 style={{fontSize: '25px'}}>
                DESPUES DEL VUELO:
            </h3>
            <ul style={{width: '80%', marginBottom: '5%'}}>
                <li style={{fontSize: '20px'}}>Se verifica el estado del pasajero y se realizan las últimas fotos y videos acordados con anterioridad.</li>
                <li style={{fontSize: '20px'}}>Se verifica el estado del equipo, estructura alar, líneas de suspensión, silla de pasajero y paracaídas de reserva.</li>
            </ul>
            <a className='goTarifas' href="#tarifas">Ver Tarifas</a>
        </div> 
    </div>
  )
}

export default VueloSeguro