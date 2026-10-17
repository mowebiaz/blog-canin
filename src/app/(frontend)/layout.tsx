import { AdminBar } from '@/components/AdminBar/AdminBar'
import { Footer } from '@/components/Footer/Footer'
import { Navigation } from '@/components/Navigation/Navigation'
import { nunito, openSans } from '@/styles/fonts'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { getServerSideURL } from '@/utilities/getURL'
import '@/styles/globals.scss'

export const metadata = {
  metadataBase: new URL(getServerSideURL()),
  title: {
    template: 'Caniliane | %s',
    default: 'Caniliane',
  },
  description:
    'Caniliane – éducatrice canine à Grenoble. Éducation positive à domicile et en extérieur, pour chiots, adolescents et chiens adultes.',
  openGraph: mergeOpenGraph({
    url: '/',
  }),
  alternates: {
    canonical: '/',
  },
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
