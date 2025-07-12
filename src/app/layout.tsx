import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import HolographicBackground from '@/components/HolographicBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Holocron Databank - Arquivo Jedi e Sith',
  description: 'Explore um banco de dados místico contendo conhecimentos Jedi e Sith, relíquias ancestrais e registros históricos da galáxia.',
  keywords: 'Star Wars, Jedi, Sith, Holocron, Força, Databank',
  authors: [{ name: 'Holocron Archive' }],
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#00d4ff',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <HolographicBackground />
        <Navbar />
        <main className="relative z-10 pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}
