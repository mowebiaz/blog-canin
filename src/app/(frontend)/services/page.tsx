import Link from 'next/link'
import { AnimatedSection } from '@/components/AnimatedSection/AnimatedSection'
import { FaqComponent } from '@/components/FaqComponent/FaqComponent'
import { GoogleMap } from '@/components/GoogleMap/GoogleMap'
import { ServiceCardContainer } from '@/components/ServiceCardContainer/ServiceCardContainer'
import { faqServices } from '@/data/faqs'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import './Services.scss'

export const metadata = {
  title: 'Services',
  description:
    'Services en éducation canine à Grenoble : séances individuelles, bilans comportementaux, balades éducatives et garde à domicile.',
  openGraph: mergeOpenGraph({
    title: 'Services – Caniliane',
    description:
      'Séances individuelles, bilans comportementaux, balades éducatives et garde à domicile à Grenoble.',
    url: '/services',
  }),
  alternates: { canonical: '/services' },
}

const jsonLdServices = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Services – Caniliane',
    description:
      'Services en éducation canine à Grenoble : séances individuelles, bilans comportementaux, balades éducatives et garde à domicile.',
    url: 'https://caniliane.morganeweb.com/services',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Caniliane',
      url: 'https://caniliane.morganeweb.com',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: "Services d'éducation canine – Caniliane",
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Service',
          name: 'Éducation individuelle',
          description:
            "Un accompagnement sur mesure pour travailler ce qui compte vraiment dans votre quotidien avec votre chien. Séance d'environ 1h, à domicile et/ou en extérieur.",
          url: 'https://caniliane.morganeweb.com/services#seance-individuelle',
          provider: {
            '@type': 'LocalBusiness',
            name: 'Caniliane',
            url: 'https://caniliane.morganeweb.com',
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
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Service',
          name: 'Éducation collective',
          description:
            "Des séances en petit groupe pour apprendre avec d'autres chiens, dans un cadre progressif et rassurant.",
          url: 'https://caniliane.morganeweb.com/services#education-collective',
          provider: {
            '@type': 'LocalBusiness',
            name: 'Caniliane',
            url: 'https://caniliane.morganeweb.com',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Service',
          name: 'Bilan comportemental',
          description:
            'Rendez-vous de 1h30 à 2h pour observer, échanger et comprendre la situation dans son ensemble. Idéal pour réactivité, peurs, anxiété, aboiements ou adoption récente.',
          url: 'https://caniliane.morganeweb.com/services#bilan',
          provider: {
            '@type': 'LocalBusiness',
            name: 'Caniliane',
            url: 'https://caniliane.morganeweb.com',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'Service',
          name: 'Balades éducatives',
          description:
            'Une balade éducative pour progresser ensemble, en situation réelle.',
          url: 'https://caniliane.morganeweb.com/services#balades-educatives',
          provider: {
            '@type': 'LocalBusiness',
            name: 'Caniliane',
            url: 'https://caniliane.morganeweb.com',
          },
        },
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'À partir de quel âge on peut commencer ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Dès l'arrivée à la maison. Avec un chiot, on mise surtout sur la prévention (solitude, mordillements, socialisation, propreté…).",
        },
      },
      {
        '@type': 'Question',
        name: 'Je ne sais pas quoi choisir : bilan ou séance ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Si le comportement vous inquiète (peur, réactivité, gros stress), le bilan est souvent le meilleur départ. Sinon, une séance individuelle suffit pour un objectif précis.',
        },
      },
      {
        '@type': 'Question',
        name: 'Combien de séances faut-il ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Tout dépend de l'objectif et de votre régularité entre les séances. Parfois 1–2 séances suffisent, parfois on fait un suivi plus progressif.",
        },
      },
      {
        '@type': 'Question',
        name: 'Mon chien est réactif : est-ce possible en collectif ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "On en parle avant : parfois oui avec un groupe adapté, parfois on fait d'abord quelques séances individuelles.",
        },
      },
      {
        '@type': 'Question',
        name: 'Que faut-il prévoir ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Friandises appétentes, harnais confortable, longe si vous en avez (sinon je vous conseille).',
        },
      },
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdServices) }}
      />
      <main id="services">
        <h1>Mes services d’éducation canine à Grenoble et alentours</h1>

        <div className="container">
          <p>
            Vivre avec son chien au quotidien, ce n’est pas chercher la
            perfection : c’est apprendre à mieux se comprendre, avancer pas à
            pas, et retrouver plus de sérénité ensemble. Je vous accompagne avec
            une approche bienveillante, concrète et adaptée à votre chien, à
            votre rythme et à votre réalité.
          </p>
        </div>

        <section className="container">
          <ServiceCardContainer />

          <AnimatedSection as="div">
            <h2>Accompagnements complémentaires</h2>

            <div>
              <h3>Garde à domicile</h3>
              <p>
                Pour que votre chien reste dans son environnement habituel, avec
                ses repères et sa routine.
              </p>
              <ul>
                <li>visites régulières et rythme respecté</li>
                <li>nouvelles et photos pendant votre absence</li>
                <li>possibilité de réactiver quelques bases si besoin</li>
              </ul>
            </div>

            <div>
              <h3>Visites en votre absence</h3>
              <p>Pour les journées chargées ou les absences ponctuelles.</p>
              <ul>
                <li>sortie hygiène, jeux, repas, présence</li>
                <li>idéal chiots / chiens seniors</li>
              </ul>
            </div>

            <div>
              <h3>Vous avez une demande particulière ?</h3>
              <p>
                Cohabitation chien/chat, arrivée d’un bébé, adoption en refuge,
                déménagement, changement de rythme, présentation à un congénère…
              </p>
              <p>CTA : &quot;Me décrire votre situation&quot;</p>
            </div>
          </AnimatedSection>

          <div className="note">
            <h2>Et si on commençait par en parler ? </h2>
            <p>
              Si vous avez un doute, si vous ne savez pas trop &quot;dans quelle
              case&quot; vous êtes, c’est normal. Le plus simple, c’est souvent
              de faire un premier échange pour comprendre la situation et voir
              ce qui serait le plus adapté : bilan comportemental, séances
              individuelles, séances collectives, ou balades éducatives.
              <br />
              👉{' '}
              <Link
                href="/contact"
                className="link-router"
              >
                Contactez-moi
              </Link>{' '}
              et on fait le point ensemble.
            </p>
          </div>

          <AnimatedSection as="div">
            <p>
              Chaque chien est différent, et chaque humain aussi. Mon objectif
              n’est pas d’appliquer une méthode toute faite, mais de vous
              proposer un accompagnement clair, progressif et respectueux de
              votre duo.
            </p>
            <p>
              On avance avec des exercices concrets, des explications simples et
              des objectifs réalistes, pour que les progrès soient vraiment
              utiles dans votre vie de tous les jours.
            </p>
          </AnimatedSection>
        </section>

        <AnimatedSection
          className="container"
          id="map-section"
        >
          <h2>Zone d’intervention autour de Grenoble</h2>
          <p>
            J’interviens à Grenoble et dans un rayon d’environ 30 km, à domicile
            ou en extérieur selon vos besoins et les objectifs de la séance.
          </p>
          <p>
            Cela comprend notamment Grenoble, Échirolles, Saint-Martin-d’Hères,
            Meylan, Fontaine, Sassenage, Seyssinet-Pariset, Gières, Eybens, La
            Tronche, Claix, Domène, Vif, Vizille… et parfois un peu plus loin
            selon l’accès.
          </p>
          <p>
            Si vous êtes à la limite du secteur, envoyez-moi simplement votre
            commune : je vous confirme rapidement si je peux me déplacer.
          </p>

          <GoogleMap />
        </AnimatedSection>

        <AnimatedSection className="container">
          <h2>Vos questions</h2>
          <FaqComponent
            className="faq"
            items={faqServices}
          />
        </AnimatedSection>
      </main>
    </>
  )
}
