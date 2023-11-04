'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './components/footer'
import Slogan from './components/Slogan'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Parapente Cordillera',
  description: 'Parapente,vuelo,biplaza',
}

export default function RootLayout({ children }) {
  const [tarScript, setTarScript] = useState(`gtag('event', 'conversion', {'send_to': ''});`);
  useEffect(() => {
    window.onscroll = function() {
      let url = window.location.href;
      let urlHastag = url.split("#");
      let y = window.scrollY;

      if (y == 5500 || urlHastag[1] == 'tarifas') {
        setTarScript(`gtag('event', 'conversion', {'send_to': 'AW-11376305852/N9c-CNOA2fIYELzN0rAq'});`)
      }

    };
  }, [])

  return (
    <html lang="en">
      <head>
        <script async src='https://www.googletagmanager.com/gtag/js?id=AW-11376305852'></script>
        <script dangerouslySetInnerHTML={{__html:`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-11376305852');`}} />
        <script dangerouslySetInnerHTML={{__html: `gtag('event', 'conversion', {'send_to': 'AW-11376305852/FYRICLme7_EYELzN0rAq'})`}} />
        <script dangerouslySetInnerHTML={{__html:tarScript}} />
      </head>
      <Slogan />
      <body className={inter.className}>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/gtag/js?id=AW-11376305852`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
        {children}
        <Footer />
      </body>
    </html>
  )
}
