import { unstable_cache } from 'next/cache'
import Link from 'next/link'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { ArticleCardContainer } from '@/components/ArticleCardContainer/ArticleCardContainer'
import { HomeCard } from '@/components/HomeCard/HomeCard'
import { HomeHero } from '@/components/HomeHero/HomeHero'
import { ReviewCard } from '@/components/ReviewCard/ReviewCard'
import { ServicesCircle } from '@/components/ServicesCircle/ServicesCircle'
import { problems } from '@/data/problems'
import { reviews } from '@/data/reviews'
import './page.scss'

const queryLastPosts = unstable_cache(
  async () => {
    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'posts',
      overrideAccess: false,
      draft: false,
      limit: 3,
      depth: 2,
      sort: '-publishedAt',
      select: {
        title: true,
        slug: true,
        coverImage: true,
        publishedAt: true,
        doc: true,
      },
    })

    return result.docs || null
  },
  ['home-last-posts'],
  { tags: ['home-last-posts'] },
)

export default async function HomePage() {
  const lastPosts = await queryLastPosts()

  return (
    <main id="home">
      <HomeHero />

      <div className="container">
        <div>
          <p className="tagline">
            Comprendre, Guider, Grandir{' '}
            <span className="color-effect">ensemble</span>
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

        <section>
          <h2>Tu te reconnais dans l’une de ces situations ?</h2>

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
            Tu n’es pas <span className="text-italic">nul·le</span> et ton chien
            n’est pas <span className="text-italic">têtu</span>. Il a juste
            besoin d’être compris et guidé.
          </p>
        </section>

        <section>
          <h2>Des accompagnements simples et efficaces</h2>
          <p>
            On avance étape par étape, à ton rythme, avec des objectifs
            réalistes.
          </p>
          <ServicesCircle />
        </section>

        <section>
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
        </section>

        <section>
          <h2>Mes zones d&apos;interventions</h2>
          <p>
            Séances à domicile et en extérieur (parcs, ville, lieux du
            quotidien).
          </p>
          <p>Je me déplace autour de Grenoble, jusqu’à X km (voir la carte).</p>
          Bouton : Voir la zone d’intervention → /services
        </section>

        <section>
          <h2>Ils en parlent mieux que moi</h2>

          <div className="reviews">
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                review={review}
              />
            ))}
          </div>
        </section>

        <section>
          <h2>Ressources et conseils</h2>

          <p>Des articles courts, pratiques, et sans culpabiliser.</p>
          <ArticleCardContainer posts={lastPosts} />
          <Link
            className="btn btn--primary"
            href="/blog"
          >
            Voir tous les articles
          </Link>
        </section>

        <section>
          <h2>Prêt·e à avancer avec ton chien ?</h2>
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
        </section>

        {/*         <h2>3 services clés (card)</h2>
        <ul>
          <li>Éducation 1:1 (objectif, durée, lieu)</li>
          <li>Balade éducative (socialisation, milieu urbain/nature)</li>
          <li>Cours collectifs (petits groupes, niveau débutant)</li>
        </ul>
        <h2>zone couverte</h2>

        <section>plus de xx chiens accompagné xxxxx</section>
        <h2>Ce qu&apos;ils disent de moi / avis</h2>
        <p>
          Avis : 6–9 témoignages courts (photo chien si possible: photo/nom du
          chien + 1 phrase
        </p>
        <p>
          Grille de 6–9 témoignages courts, chacun avec : prénom, chien,
          avant/après en une phrase.
        </p>
        <button>CTA : Boutons “Demander un devis” / “Voir les tarifs”</button>
        <h2>Contact ?</h2>

        <h2>FAQ</h2>
        <p>
          “Quelle méthode utilisez-vous ?” → renforcement positif, respect du
          rythme “Combien de séances faut-il ?” → dépend objectif, bilan + plan
          “Vous déplacez-vous à [Commune] ?” → liste et frais éventuels
        </p> */}
      </div>
    </main>
  )
}
