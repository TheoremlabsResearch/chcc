import type { Metadata } from 'next'
import { Playfair_Display, Inter, Noto_Serif_Devanagari } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const devanagari = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  variable: '--font-devanagari',
  display: 'swap',
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'Charlotte Hindu Community Center (CHCC) | Where Heritage Meets Harmony',
    template: '%s | CHCC Charlotte',
  },
  description:
    'The Charlotte Hindu Community Center (CHCC) is a 501(c)(3) nonprofit building Charlotte\'s first dedicated Hindu community center — a hub for yoga, Aum School, Gaushala, cultural arts, and sewa.',
  keywords: [
    'Hindu Community Center Charlotte',
    'CHCC',
    'Yoga Charlotte',
    'Aum School',
    'Gaushala Charlotte',
    'Indian Community Charlotte',
    'Hindu Temple Charlotte',
    'Bharatanatyam Charlotte',
    'Sanskrit classes Charlotte',
    '501c3 nonprofit',
  ],
  authors: [{ name: 'Charlotte Hindu Community Center' }],
  creator: 'CHCC',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chcc.org',
    siteName: 'Charlotte Hindu Community Center',
    title: 'CHCC | Where Heritage Meets Harmony',
    description:
      'Building Charlotte\'s first Hindu Community Center — a 5-acre campus for yoga, education, culture, and seva.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Charlotte Hindu Community Center',
    description: 'Building Charlotte\'s first Hindu Community Center.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${devanagari.variable}`}>
      <body className="font-body bg-cream text-charcoal antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
