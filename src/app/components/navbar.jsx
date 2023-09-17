import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    const links = [
        {
          label: 'WSP',
          route: '/about'
        },
        {
          label: 'FACE',
          route: '/about'
        },
        {
          label: 'INSTA',
          route: '/about'
        }
      ]
  return (
    <header>
        <nav className='main-nav'>
            <h1>Parapente Cordillera</h1> 
            <div>
                {
                links.map( ({label, route}) => (
                    <Link className='link_main-nav' href={route}>
                    {label}
                    </Link>
                ))
                }
            </div>
        </nav>
  </header>
  )
}

export default Navbar