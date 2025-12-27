import Link from 'next/link'
import { HomeCard } from '@/components/HomeCard/HomeCard'
import { HomeHero } from '@/components/HomeHero/HomeHero'
import { ServicesCircle } from '@/components/ServicesCircle/ServicesCircle'
import './page.scss'

const cardList = [
  {
    title: 'Tire en laisse',
    desc: 'Les balades deviennent un calvaire.',
  },
  { title: 'Rappel compliqué', desc: 'il n’écoute que quand ça l’arrange' },
  {
    title: 'Réactivité',
    desc: 'il aboie / grogne sur les autres chiens, les personnes, les vélos…',
  },
  {
    title: 'Problèmes à la maison',
    desc: 'il détruit, aboie, saute sur les invités…',
  },
  {
    title: 'Chiot',
    desc: 'il mordille, fait ses besoins partout, ne reste pas seul…',
  },
  {
    title: 'Peur',
    desc: 'il a peur de tout : bruits, objets, personnes, lieux…',
  },
]

export default function HomePage() {
  return (
    <main id="home">
      <HomeHero />

      <div className="container">
        <p className="tagline">
          Comprendre, Guider, Grandir{' '}
          <span className="color-effect">ensemble</span>
        </p>
        <p className="centered">
          Des séances concrètes, sans culpabiliser, pour retrouver un quotidien
          plus simple avec ton chien.
        </p>
        <p className="centered">
          On travaille dans la vraie vie : à la maison, en balade, en ville…
          avec des exercices faciles à refaire et un plan clair.
        </p>
        <p className="centered">
          Méthode respectueuse & positive · À domicile & en extérieur · Chiots,
          ado, adultes
        </p>

        <section>
          <h2>Tu te reconnais dans l’une de ces situations ?</h2>
          <p>
            Tu n’es pas <span className="text-italic">nul·le</span> et ton chien
            n’est pas <span className="text-italic">têtu</span>. Il a juste
            besoin d’être compris et guidé.
          </p>
          <div className="article-container">
            {cardList.map((card, index) => (
              <HomeCard
                key={index}
                title={card.title}
                desc={card.desc}
              />
            ))}
          </div>
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
          <h3>Étape 1 : On fait le point</h3>
          <p>
            On clarifie tes objectifs, ton quotidien et ce qui déclenche les
            difficultés.
          </p>
          <h3>Étape 2 : On met en place un plan</h3>
          <p>
            Des exercices simples, adaptés à ton chien et à ton emploi du temps.
          </p>
          <h3>Étape 3 : On suit et on ajuste</h3>
          <p>Tu progresses avec un cadre, des repères et un vrai suivi.</p>
          <p>
            Ici, pas de brutalité. On cherche des solutions durables, en
            respectant ton chien… et ton quotidien.
          </p>
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
          <p>
            “On a retrouvé des balades sereines en 3 semaines. Les exercices
            sont simples et ça change tout.” “Enfin une méthode respectueuse et
            efficace. On se sent accompagné·e, sans pression.” “Le plan est
            clair, et le suivi aide vraiment à tenir dans le temps.”
          </p>
        </section>

        <section>
          <h2>Ressources et conseils</h2>
          <p>Des articles courts, pratiques, et sans culpabiliser.</p>
          <p>
            3 cartes: Mon chien tire en laisse : par où commencer ? Réactivité :
            les 3 erreurs les plus fréquentes Checklist chiot : les bases du
            quotidien
          </p>
          <p>bouton: Voir tous les articles → /blog</p>
        </section>

        <section>
          <h2>Prêt·e à avancer avec ton chien ?</h2>
          <p>
            Dis-moi ce que tu vis avec ton chien et et je te dirai honnêtement
            comment je peux t’aider (et par quoi commencer).
          </p>
          <p>CTA : Me contacter → /contact</p>
          <p>Micro-texte : Réponse sous 24–48h ouvrées.</p>
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
