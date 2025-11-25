import Link from 'next/link'
import './page.scss'
import { HomeHero } from '@/components/HomeHero/HomeHero'

export default function HomePage() {
  return (
    <main id="home">
      <HomeHero />
      <h1>Hero + Éducatrice canine positive à Grenoble + CTA</h1>
      <h1>
        Visualize Your <span className="color-effect">Colors</span> & <span className='font-effect'>Fonts</span> On a Real Site
        </h1>
        <Link href="/blog" className='secondary-button'>How does it work?</Link>
        <Link href="/blog" className='primary-button'>How does it work?</Link>
      <h2>Comprendre, guider, grandir ensemble</h2>
      <p>
        Accroche (2-3 phrases) : “J’aide les humains… méthodes bienveillantes…
        séances à domicile ou en extérieur.”
      </p>
      <h2>3 services clés (card)</h2>
      <ul>
        <li>Éducation 1:1 (objectif, durée, lieu)</li>
        <li>Balade éducative (socialisation, milieu urbain/nature)</li>
        <li>Cours collectifs (petits groupes, niveau débutant)</li>
      </ul>
      <h2>zone couverte</h2>

      <section>
        plus de xx chiens accompagné
        xxxxx
      </section>
      <h2>Ce qu&apos;ils disent de moi / avis</h2>
      <p>
        Avis : 6–9 témoignages courts (photo chien si possible: photo/nom du
        chien + 1 phrase
      </p>
      <p>Grille de 6–9 témoignages courts, chacun avec : prénom, chien, avant/après en une phrase.</p>
      <button>CTA : Boutons “Demander un devis” / “Voir les tarifs”</button>
      <h2>Contact ?</h2>

      <h2>FAQ</h2>
      <p>
        “Quelle méthode utilisez-vous ?” → renforcement positif, respect du
        rythme “Combien de séances faut-il ?” → dépend objectif, bilan + plan
        “Vous déplacez-vous à [Commune] ?” → liste et frais éventuels
      </p>
    </main>
  )
}
