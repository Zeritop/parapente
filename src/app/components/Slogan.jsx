import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Slogan = () => {
  return (
    <div className='slogan'>
        <div style={{position: 'absolute', top: 0, left: 10, zIndex: '999999999999'}}>
            <Image 
                src={'/images/logo_f_n-removebg-hd.png'}
                width={60}
                height={60}
                alt=''
            />
          </div>
        <p style={{textAlign: 'center', width: '100%', color: '#fff'}}>Vive una experiencia inolvidable!!</p>
        <div style={{position: 'absolute', right: 10, top: 0}}>
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
  )
}

export default Slogan