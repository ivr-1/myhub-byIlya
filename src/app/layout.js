import { Istok_Web, Inter, Josefin_Sans, Jockey_One, Open_Sans} from 'next/font/google'
import "./globals.css"
import NoiseEffect from './components/noiseeffect'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const istokWeb = Istok_Web({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-logo'
})

const inter = Inter({ 
  subsets: ['latin'], 
  weight: ['300','400', '600', '700'], 
  variable: '--font-primary'
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-secondary'
})

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300','400', '600', '700'], 
  display: 'swap',
  variable: '--font-highlight'
})



const jockeyOne = Jockey_One({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap', 
  variable: '--font-projectname'
})

export const metadata = {
  title: {
    default: 'by Ilya',
    template: '%s • by Ilya',
  },
  icons: {
    apple: '/apple-icon.png',
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover'
}

 

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`
      ${istokWeb.variable} 
      ${inter.variable} 
      ${josefinSans.variable}
      ${jockeyOne.variable}
      ${openSans.variable}
    `}>
      <body>
        <NoiseEffect opacity={0.15} />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}