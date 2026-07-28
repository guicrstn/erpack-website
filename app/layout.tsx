import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://erpacksas.com'),
  title: {
    default: 'ERPACK SAS — Expertise en plasturgie pour l’emballage',
    template: '%s — ERPACK SAS',
  },
  description:
    'ERPACK SAS, agent commercial de Delta Engineering pour la France. 40 ans d’expertise en extrusion soufflage, injection soufflage et ISBM pour le packaging plastique industriel.',
  generator: 'v0.app',
  keywords: [
    'extrusion soufflage',
    'injection soufflage',
    'ISBM',
    'packaging plastique',
    'plasturgie',
    'ASB NISSEI',
    'AOKI',
    'Delta Engineering',
    'ERPACK SAS',
  ],
  openGraph: {
    title: 'ERPACK SAS — Expertise en plasturgie pour l’emballage',
    description:
      '40 ans d’expertise en extrusion soufflage, injection soufflage et ISBM pour le packaging plastique industriel.',
    type: 'website',
    locale: 'fr_FR',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#1a2b52',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${fraunces.variable} bg-background`}>
      <body className="antialiased font-sans">
        <SiteHeader />
        <main id="contenu">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
