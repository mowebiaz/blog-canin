import Link from 'next/link'
import { AnimatedSection } from '@/components/AnimatedSection/AnimatedSection'
import { FaqComponent } from '@/components/FaqComponent/FaqComponent'
import { GoogleMap } from '@/components/GoogleMap/GoogleMap'
import { ServiceCardContainer } from '@/components/ServiceCardContainer/ServiceCardContainer'
import { faqServices } from '@/data/faqs'
import './Services.scss'

export default function ServicesPage() {
  return (
    <main id="services">
      <h1>Mes services d’éducation canine à Grenoble et alentours</h1>

      <AnimatedSection
        as="div"
        className="container"
      >
        <p>
          Vivre avec son chien au quotidien, ce n’est pas chercher la perfection
          : c’est apprendre à mieux se comprendre, avancer pas à pas, et
          retrouver plus de sérénité ensemble. Je vous accompagne avec une
          approche bienveillante, concrète et adaptée à votre chien, à votre
          rythme et à votre réalité.
        </p>
      </AnimatedSection>

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

        <AnimatedSection as="div">
          <p>
            Chaque chien est différent, et chaque humain aussi. Mon objectif
            n’est pas d’appliquer une méthode toute faite, mais de vous proposer
            un accompagnement clair, progressif et respectueux de votre duo.
          </p>
          <p>
            On avance avec des exercices concrets, des explications simples et
            des objectifs réalistes, pour que les progrès soient vraiment utiles
            dans votre vie de tous les jours.
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
  )
}
