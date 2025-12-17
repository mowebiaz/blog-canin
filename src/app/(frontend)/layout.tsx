import { AdminBar } from '@/components/AdminBar/AdminBar'
import Favicon from '@/components/Favicon/Favicon'
import { Footer } from '@/components/Footer/Footer'
import { Navigation } from '@/components/Navigation/Navigation'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { ThemeProvider } from '@/providers/Theme/ThemeProvider'
import { nunito, openSans } from '@/styles/fonts'
import '@/styles/globals.scss'

export const metadata = {
  title: {
    template: 'Lien Canin | %s',
    default: 'Lien Canin', // a default is required when creating a template
  },
  /*   description:
    'MorganeWeb - création de site internet à Grenoble. Développement sur mesure pour transformer vos idées en réalité numérique.',
  openGraph: {
    type: 'website',
    siteName: 'MorganeWeb',
    url: 'https://morganeweb.com/',
  },
  alternates: {
    canonical: 'https://morganeweb.com/',
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
    >
      <head>
        <InitTheme />
      </head>
      <body className={`${openSans.variable} ${nunito.variable}`}>
        <ThemeProvider>
          <Favicon />
          <Navigation />
          <AdminBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
