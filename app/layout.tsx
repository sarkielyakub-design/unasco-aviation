import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default:
      'UNASCO Aviation Limited | Air Cargo, Logistics & Aviation Services',
    template: '%s | UNASCO Aviation Limited',
  },
  description:
    'UNASCO Aviation Limited delivers world-class air cargo, freight forwarding, logistics, aviation support and Cargo services across global routes with reliability and precision.',
  keywords: [
    'UNASCO Aviation',
    'air cargo',
    'freight forwarding',
    'logistics',
    'aviation services',
   
    'cargo tracking',
  ],
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <SiteHeader />

        <main className="flex min-h-screen flex-col">
          {children}
        </main>

        <SiteFooter />

        <WhatsAppButton />

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}