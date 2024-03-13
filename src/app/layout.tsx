import type { Metadata } from 'next'
import { Turret_Road } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import "./globals.css";
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const turret = Turret_Road({
  subsets: ['latin'],
  weight: ['400', '800', '700'],
})

export const metadata: Metadata = {
  title: 'BlockTOPlus',
  description: 'Projeto do hackathon da NearX',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen flex flex-col justify-between ${turret.className}`}
      >
        <Navbar />
        <div className=" h-full">{children}</div>
        <Footer />
      </body>
    </html>
  )
}

// turret road
