import {
  FaClipboardList,
  FaDog,
  FaPeopleGroup,
  FaPersonWalking,
} from 'react-icons/fa6'
import Link from 'next/link'
import { FaqComponent } from '@/components/FaqComponent/FaqComponent'
import { GoogleMap } from '@/components/GoogleMap/GoogleMap'
import { ServiceCard } from '@/components/ServiceCard/ServiceCard'
import { faqServices } from '@/data/faqs'
import './Services.scss'

export default function ServicesPage() {
  return (
    <main id="services">
      <h1>Mes services d’éducation canine à Grenoble et alentours</h1>

      <div className="container">
        <p>
          Vivre avec son chien au quotidien, ce n’est pas chercher la perfection
          : c’est apprendre à mieux se comprendre, avancer pas à pas, et
          retrouver plus de sérénité ensemble. Je vous accompagne avec une
          approche bienveillante, concrète et adaptée à votre chien, à votre
          rythme et à votre réalité.
        </p>
      </div>

      <section className="container">
        <div className="services-grid">
          <ServiceCard
            id="seance-individuelle"
            icon={<FaDog aria-hidden="true" />}
            title="Éducation individuelle"
            description="Un accompagnement sur mesure pour travailler ce qui compte vraiment dans votre quotidien avec votre chien."
            points={[
              {
                label: 'Pour quoi ?',
                text: 'Marche en laisse, rappel, mordillements, sauts, gestion des émotions, croisements, voitures, vélos, solitude…',
              },
              {
                label: 'Comment ?',
                text: 'Une séance d’environ 1h, à domicile et/ou en extérieur selon vos besoins.',
              },
              {
                label: 'Concrètement :',
                text: 'Vous repartez avec des exercices simples, des repères clairs et des conseils adaptés à votre chien.',
              },
            ]}
            price="Séance individuelle (1h) : XX €"
            pack="Forfait Pack de 5 séances individuelles : XX €"
          />

          <ServiceCard
            id="education-collective"
            icon={<FaPeopleGroup aria-hidden="true" />}
            title="Éducation collective"
            description="Des séances en petit groupe pour apprendre avec d’autres chiens, dans un cadre progressif et rassurant."
            points={[
              {
                label: 'Pour quoi ?',
                text: 'Socialisation encadrée, concentration, marche en groupe, auto-contrôle, gestion de l’excitation.',
              },
              {
                label: 'Comment ?',
                text: 'Petit groupe, ambiance calme, exercices adaptés au niveau des chiens.',
              },
              {
                label: 'Ce que ça apporte :',
                text: 'Vous progressez avec votre chien, mais vous apprenez aussi à mieux lire ses signaux et ceux des autres.',
              },
            ]}
            price="Cours collectif (1h) : XX € / chien"
            pack="Forfait Pack de 5 séances collectives : XX €"
          />

          <ServiceCard
            id="bilan"
            icon={<FaClipboardList aria-hidden="true" />}
            title="Bilan comportemental"
            description="Quand le quotidien devient compliqué, ou pour retrouver des bases plus sereines."
            points={[
              {
                label: 'Pour quoi ?',
                text: 'Réactivité, peurs, anxiété, aboiements, destructions, difficultés de cohabitation, adoption récente…',
              },
              {
                label: 'Comment ?',
                text: 'Un rendez-vous de 1h30 à 2h pour observer, échanger et comprendre la situation dans son ensemble.',
              },
              {
                label: 'Objectif :',
                text: 'Mettre en lumière les causes possibles et définir un plan d’action réaliste, adapté à vous et à votre chien.',
              },
            ]}
            price="Bilan comportemental (1h30–2h) : XX €"
          />

          <ServiceCard
            id="balades-educatives"
            icon={<FaPersonWalking aria-hidden="true" />}
            title="Balades éducatives"
            //description="Une balade = un cours… mais en vrai."
            description="Une balade éducative : pour progresser ensemble, en situation réelle."
            points={[
              {
                label: 'Pour quoi ?',
                text: 'Gérer l’environnement, travailler la marche, les croisements, le calme, l’attention malgré les distractions.',
              },
              {
                label: 'Comment ?',
                text: 'Une balade en petit groupe d’environ 1h, sur un parcours choisi selon les objectifs.',
              },
              {
                label: 'Ce que ça change :',
                text: 'Des progrès directement transférables dans vos promenades de tous les jours.',
              },
            ]}
            price="Balade éducative (1h–1h30) : XX € / chien"
          />
        </div>
      </section>

      <section className="container">
        <h2>Accompagnements complémentaires</h2>

        <div>
          <h3>Garde à domicile</h3>
          <p>
            Pour que votre chien reste dans son environnement habituel, avec ses
            repères et sa routine.
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
        <div className="note">
          <h2>Et si on commençait par en parler ? </h2>
          <p>
            Si vous avez un doute, si vous ne savez pas trop &quot;dans quelle
            case&quot; vous êtes, c’est normal. Le plus simple, c’est souvent de
            faire un premier échange pour comprendre la situation et voir ce qui
            serait le plus adapté : bilan comportemental, séances individuelles,
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
        <h2>Ma façon de travailler</h2>
        <p>
          Chaque chien est différent, et chaque humain aussi. Mon objectif n’est
          pas d’appliquer une méthode toute faite, mais de vous proposer un
          accompagnement clair, progressif et respectueux de votre duo.
        </p>
        <p>
          On avance avec des exercices concrets, des explications simples et des
          objectifs réalistes, pour que les progrès soient vraiment utiles dans
          votre vie de tous les jours.
        </p>
      </section>

      <section
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
