import { AdminBar } from '@/components/AdminBar/AdminBar'
import Favicon from '@/components/Favicon/Favicon'
import { Footer } from '@/components/Footer/Footer'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { ThemeProvider } from '@/providers/Theme/ThemeProvider'
import '@/styles/globals.scss'
import { playfair, raleway } from '@/styles/fonts'

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
      <body className={`${playfair.variable} ${raleway.variable}`}>
        <ThemeProvider>
          <Favicon />
          <AdminBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
