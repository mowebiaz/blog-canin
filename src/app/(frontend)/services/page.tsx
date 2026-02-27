import Link from 'next/link'
import { AreaCircle } from '@/components/AreaCircle/AreaCircle'
import { FaqComponent } from '@/components/FaqComponent/FaqComponent'
import { GoogleMap } from '@/components/GoogleMap/GoogleMap'
import { faqServices } from '@/data/faqs'
import './Services.scss'

export default function ServicesPage() {
  return (
    <main id="services">
      <h1>Mes services d’éducation canine à Grenoble et alentours</h1>

      <div className="container">
        <p>
          Un chien agréable au quotidien, ce n’est pas “un chien parfait” :
          c’est un chien compris, guidé, et des humains outillés. Je vous
          accompagne avec une méthode bienveillante et concrète, adaptée à votre
          chien, votre rythme et vos objectifs.
        </p>
      </div>

      <section className="container">
        <div>
          <h2>Éducation individuelle</h2>
          <p>Pour avancer sur vos objectifs, à votre rythme.</p>
          <ul>
            <li>
              <span className="text-accent">Idéal pour : </span>
              marche en laisse, rappel, sauts, mordillements, gestion des
              émotions, solitude, voitures/vélos, ...
            </li>
            <li>
              <span className="text-accent">Format : </span>séance 1h (à
              domicile + extérieur selon besoin)
            </li>
            <li>
              Vous repartez avec : exercices simples, plan d’entraînement,
              ajustements personnalisés
            </li>
          </ul>
          <p>CTA : “Réserver une séance”</p>
        </div>

        <div>
          <h2>Éducation collective (en petit groupe)</h2>
          <p>Apprendre avec d’autres… sans se sentir débordé.</p>
          <ul>
            <li>
              <span className="text-accent">Idéal pour : </span>socialisation
              encadrée, focus, marche en groupe, auto-contrôle
            </li>
            <li>
              <span className="text-accent">Format : </span>petit groupe,
              ambiance safe, exercices progressifs
            </li>
            <li>
              Bonus : vous voyez que “vous n’êtes pas seul(e)” et vous
              progressez aussi sur la lecture canine
            </li>
          </ul>
          <p>CTA : “Voir les prochains créneaux”</p>
        </div>

        <div>
          <h2>Bilan comportemental</h2>
          <p>
            Quand la situation est compliquée (ou que vous voulez repartir sur
            de bonnes bases).
          </p>
          <ul>
            <li>
              <span className="text-accent">Idéal pour : </span> réactivité,
              agressivité, peurs, anxiété, aboiements, destructions,
              cohabitation, adoption récente…
            </li>
            <li>
              <span className="text-accent">Format : </span> 1h30–2h
              (observation + questions + plan d’action)
            </li>
            <li>
              Objectif : comprendre le “pourquoi” + définir une stratégie
              réaliste
            </li>
          </ul>
          <p>CTA : “Faire un bilan”</p>
        </div>

        <div>
          <h2>Balades éducatives</h2>
          <p>Une balade = un cours… mais en vrai.</p>
          <ul>
            <li>
              <span className="text-accent">Idéal pour : </span> apprendre à
              gérer l’environnement (chiens, humains, odeurs, vélos), travailler
              la marche, le calme, les croisements
            </li>
            <li>
              <span className="text-accent">Format : </span> 1h / petit groupe /
              parcours adapté
            </li>
            <li>
              Résultat : des progrès transférables à vos balades quotidiennes
            </li>
          </ul>
          <p>CTA : “Participer à une balade”</p>
        </div>

        <div className="note">
          <h2>Et si on commençait par en parler ? </h2>
          <p>
            Si vous avez un doute, si vous ne savez pas trop &quot;dans quelle
            case&quot; vous êtes, c’est normal. Le plus simple, c’est souvent de
            faire un premier échange pour comprendre la situation et voir ce qui
            serait le plus adapté : bilan comportemental, séances individuelles,
            séances collectives, ou balades éducatives.
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
      </section>

      <section className="container">
        <h2>Services annexes</h2>

        <div>
          <h3>Garde à domicile</h3>
          <p>Pour que votre chien reste dans son environnement.</p>
          <ul>
            <li>visites régulières, routine respectée, nouvelles + photos</li>
            <li>
              option “mini séance” intégrée si besoin (rappel des bases /
              marche)
            </li>
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
          <h3>Vous avez une demande particulière ?</h3>
          <p>
            Cohabitation chien/chat, arrivée d’un bébé, adoption en refuge,
            déménagement, changement de rythme, présentation à un congénère…
          </p>
          <p>CTA : “Me décrire votre situation”</p>
        </div>
      </section>

      <section className="container">
        <h2>Tarifs</h2>
        <ul>
          <li>Bilan comportemental (1h30–2h) : XX €</li>
          <li>Séance individuelle (1h) : XX €</li>
          <li>Cours collectif (1h) : XX € / chien</li>
          <li>Balade éducative (1h–1h30) : XX € / chien</li>
          <li>Garde / visites : à partir de XX € (selon durée et fréquence)</li>
        </ul>
        <ul>
          <li>Forfait &quot;Pack&quot; de 3 séances individuelles : XX €</li>
          <li>Forfait &quot;Pack&quot; de 5 séances individuelles : XX €</li>
        </ul>

        <p>
          Déplacements : inclus dans un rayon de 30 km, au-delà: frais de
          déplacement selon la distance
        </p>
      </section>

      <section className="container">
        <h2>Zone d’intervention autour de Grenoble</h2>
        <p>
          J’interviens à Grenoble et dans un rayon d’environ 30 km, notamment
          dans les communes les plus connues de l’agglomération : Échirolles,
          Saint-Martin-d’Hères, Fontaine, Meylan, Saint-Égrève, Sassenage,
          Seyssinet-Pariset, Seyssins, Gières, Eybens, Le Pont-de-Claix, La
          Tronche, Claix, Domène, Vif, Vizille…
          <br />
          Et un peu plus loin mais toujours “dans le coin” (selon accès / route)
          : Voiron, Crolles, Vizille.
        </p>
        <p>
          Si vous êtes à la limite du rayon, envoyez-moi votre commune : je vous
          confirme rapidement.
        </p>
        <p>
          J’interviens à domicile et en extérieur (parcs, quartiers calmes,
          lieux de passage). Le lieux de rendez-vous est à définir ensemble
          selon l’objectif (calme / urbain / contrôlé)
        </p>
        <div className="maps">
          <AreaCircle />
          <GoogleMap />
        </div>
      </section>

      <section className="container">
        <h2>Vos questions</h2>
        <FaqComponent
          className="faq"
          items={faqServices}
        />
      </section>
    </main>
  )
}
