'use client'

import {
  FaClipboardList,
  FaDog,
  FaPeopleGroup,
  FaPersonWalking,
} from 'react-icons/fa6'
import { useReducedMotion } from 'motion/react'
import { ServiceCard } from '../ServiceCard/ServiceCard'
import {
  itemVariants,
  noMotionVariants,
  StaggerContainer,
} from '../StaggerContainer/StaggerContainer'
import './ServiceCardContainer.scss'

export const ServiceCardContainer = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
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
  )
}
