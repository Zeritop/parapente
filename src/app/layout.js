import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './components/footer'
import Slogan from './components/Slogan'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Parapente Cordillera',
  description: 'Parapente,vuelo,biplaza',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{__html:`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-11376305852');`}} />
      </head>
      <Slogan />
      <body className={inter.className}>
      <iframe
        src={`https://www.googletagmanager.com/gtag/js?id=AW-11376305852`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      ></iframe>
        {children}
        <Footer />
      </body>
    </html>
  )
}
