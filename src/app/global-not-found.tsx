// Import global styles and fonts
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import './global-not-found.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function GlobalNotFound() {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <main id='global-not-found'>
        <h1>404</h1>

        <Image
          src={'/images/not-found.webp'}
          alt="Page not found"
          width={350}
          height={233}
          priority
        />
        <p>Cette page n&apos;existe pas</p>
        <Link href="/">Retourner à l&apos;accueil</Link>
        </main>
      </body>
    </html>
  )
}
