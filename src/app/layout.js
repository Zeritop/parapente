import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './components/footer'
import Slogan from './components/Slogan'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Parapente Cordillera',
  description: 'Parapente,vuelo,biplaza',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src='https://www.googletagmanager.com/gtag/js?id=AW-11376305852' />
        <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date()); 
          gtag('config', 'AW-11376305852');
        `}
        </Script>
      </head>
      <Slogan />
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
