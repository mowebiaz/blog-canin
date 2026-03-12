import Link from 'next/link'
import { AnimatedSection } from '@/components/AnimatedSection/AnimatedSection'
import { ArticleCardContainer } from '@/components/ArticleCardContainer/ArticleCardContainer'
import { HomeCard } from '@/components/HomeCard/HomeCard'
import { HomeHero } from '@/components/HomeHero/HomeHero'
import { ReviewCardContainer } from '@/components/ReviewCardContainer/ReviewCardContainer'
import { ServicesCircle } from '@/components/ServicesCircle/ServicesCircle'
import { problems } from '@/data/problems'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { queryLastPosts } from '@/utilities/queryLastPosts'
import './page.scss'

export const metadata = {
  title: 'Éducatrice canine à Grenoble',
  description:
    'Caniliane – éducatrice canine positive à Grenoble. Comprendre, guider et grandir ensemble pour un quotidien serein avec votre chien.',
  openGraph: mergeOpenGraph({
    title: 'Caniliane – Éducatrice canine à Grenoble',
    description:
      'Comprendre, guider et grandir ensemble pour un quotidien serein avec votre chien.',
    url: '/',
  }),
  alternates: { canonical: '/' },
}

const jsonLdHome = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Caniliane',
    url: 'https://caniliane.morganeweb.com',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Caniliane',
    description:
      'Éducatrice canine positive à Grenoble. Méthode bienveillante et respectueuse pour accompagner chiens et propriétaires.',
    url: 'https://caniliane.morganeweb.com',
    email: 'contact@caniliane.fr',
    telephone: '06 00 00 00 00',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Grenoble',
      addressRegion: 'Auvergne-Rhône-Alpes',
      postalCode: '38000',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.18587458715183,
      longitude: 5.736610765941948,
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 45.18587458715183,
        longitude: 5.736610765941948,
      },
      geoRadius: '30000',
    },
    founder: {
      '@type': 'Person',
      name: 'Liane',
    },
  },
]

export default async function HomePage() {
  const lastPosts = await queryLastPosts()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHome) }}
      />
      <main id="home">
        <HomeHero />

        <div className="container">
          <p className="tagline">
            Comprendre, Guider, Grandir{' '}
            <span className="color-effect color-effect--underlined">
              ensemble
            </span>
          </p>
          <p className="centered">
            Des séances concrètes, sans culpabiliser, pour retrouver un
            quotidien plus simple avec ton chien.
          </p>
          <p className="centered">
            On travaille dans la vraie vie : à la maison, en balade, en ville…
            avec des exercices faciles à refaire et un plan clair.
          </p>
          <p className="centered">
            Méthode respectueuse & positive · À domicile & en extérieur ·
            Chiots, ado, adultes
          </p>
        </div>

        <AnimatedSection className="container">
          <h2>Tu te reconnais dans l&apos;une de ces situations ?</h2>

          <div className="article-container">
            {problems.map((card, index) => (
              <HomeCard
                key={index}
                title={card.title}
                desc={card.desc}
              />
            ))}
          </div>
          <p>
            Tu n&apos;es pas <span className="text-italic">nul·le</span> et ton
            chien n&apos;est pas <span className="text-italic">têtu</span>. Il a
            juste besoin d&apos;être compris et guidé.
          </p>
        </AnimatedSection>

        <AnimatedSection className="container">
          <h2>Des accompagnements simples et efficaces</h2>
          <p>
            On avance étape par étape, à ton rythme, avec des objectifs
            réalistes.
          </p>
          <ServicesCircle />
        </AnimatedSection>

        <AnimatedSection className="container">
          <h2>Comment ça se passe ?</h2>
          <div className="how-it-works">
            <div>
              <h3>
                <span className="color-effect">Étape 1 :</span> On fait le point
              </h3>
              <p>
                On clarifie tes objectifs, ton quotidien et ce qui déclenche les
                difficultés.
              </p>
            </div>

            <div>
              <h3>
                <span className="color-effect">Étape 2 :</span> On met en place
                un plan
              </h3>
              <p>
                Des exercices simples, adaptés à ton chien et à ton emploi du
                temps.
              </p>
            </div>

            <div>
              <h3>
                <span className="color-effect">Étape 3 :</span> On suit et on
                ajuste
              </h3>
              <p>Tu progresses avec un cadre, des repères et un vrai suivi.</p>
              <p>
                Ici, pas de brutalité. On cherche des solutions durables, en
                respectant ton chien… et ton quotidien.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="container">
          <h2>Mes zones d&apos;interventions</h2>
          <p>
            Les accompagnements ont lieu à domicile ou en extérieur : parc,
            quartier, centre-ville ou autres lieux du quotidien. L’objectif est
            de travailler là où votre chien évolue vraiment, pour des progrès
            concrets et utiles au jour le jour. Je me déplace autour de Grenoble
            jusqu’à 30km (
            <Link
              href="/services#map-section"
              className="link-router"
            >
              voir la carte
            </Link>
            ).
          </p>
        </AnimatedSection>

        <ReviewCardContainer />

        <AnimatedSection className="container">
          <h2>Ressources et conseils</h2>

          <p>Des articles courts, pratiques, et sans culpabiliser.</p>
          <ArticleCardContainer posts={lastPosts} />
          <Link
            className="btn btn--primary"
            href="/blog"
          >
            Voir tous les articles
          </Link>
        </AnimatedSection>

        <AnimatedSection className="container">
          <h2>Prêt·e à avancer avec ton chien&nbsp;?</h2>
          <p>
            Dis-moi ce que tu vis avec ton chien et et je te dirai honnêtement
            comment je peux t’aider (et par quoi commencer).
          </p>
          <Link
            className="btn btn--primary"
            href="/contact"
          >
            Me contacter
          </Link>
          <p className="micro-text">Réponse sous 24–48h ouvrées.</p>
        </AnimatedSection>
      </main>
    </>
  )
}
