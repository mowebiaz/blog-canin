import { AdminBar } from '@/components/AdminBar/AdminBar'
import { Footer } from '@/components/Footer/Footer'
import { Navigation } from '@/components/Navigation/Navigation'
import { nunito, openSans } from '@/styles/fonts'
import '@/styles/globals.scss'

export const metadata = {
  title: {
    template: 'Caniliane | %s',
    default: 'Caniliane', // a default is required when creating a template
  },
  /*   description:
    'Caniliane - création de site internet à Grenoble. Développement sur mesure pour transformer vos idées en réalité numérique.',
  openGraph: {
    type: 'website',
    siteName: 'Caniliane',
    url: 'https://caniliane.com/',
  },
  alternates: {
    canonical: 'https://caniliane.com/',
  }, */
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning={true}
      data-scroll-behavior="smooth"
    >
      <body className={`${openSans.variable} ${nunito.variable}`}>
        <Navigation />
        <AdminBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
