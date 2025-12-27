import { AreaCircle } from '@/components/AreaCircle/AreaCircle'

export default function ServicesPage() {
  return (
    <main>
      <h1>Services</h1>
      <p>
        Intro : comment tu travailles (bilan, objectifs, exercices à la maison).
      </p>
      <p>
        3 blocs services: 1 section par services (Objectif, Pour qui, Déroulé,
        Résultat, Prix/à partir de).
      </p>

      <section>
        <h2>Éducation individuelle</h2>
        Pour qui (chiot, chien adulte, problématique) Objectif (rappel, marche
        en laisse, gestion des émotions) Déroulé (bilan 60–90 min + suivis 60
        min) Résultat attendu (autonomie, routines simples)
      </section>

      <section>
        <h2>Éducation collective</h2>
        (max X binômes, thématiques) Pour qui (chiot, chien adulte,
        problématique) Objectif (rappel, marche en laisse, gestion des émotions)
        Dérouleur (bilan 60–90 min + suivis 60 min) Résultat attendu (autonomie,
        routines simples)
      </section>

      <section>
        <h2>Balades éducatives</h2>
        Pour qui (chiot, chien adulte, problématique) Objectif (rappel, marche
        en laisse, gestion des émotions) Dérouleur (bilan 60–90 min + suivis 60
        min) Résultat attendu (autonomie, routines simples) (socialisation
        encadrée)
      </section>

      <p>
        Encart méthodo : renforcement positif, sécurité, matériel conseillé.
      </p>

      <p>CTA : “Réserver un bilan”</p>

      <p>
        Tarifs : pack découverte, séance à l’unité, carnet 5 séances, mini-FAQ.
        Table simple : Bilan, Séance unité, Pack 5, Balade éducative, Cours
        collectif. Notes : déplacement inclus jusqu’à X km, modalités
        d’annulation, règlement.
      </p>

      <h2> Zone couverte</h2>
      <p>
        {' '}
        déjà sur la page d&apos;accueil: Intro : rayon d’action + pourquoi :
        réduire le stress, travailler “dans la vraie vie”. Carte (ou image
        statique) + liste alphabétique des communes.
      </p>
      <p>faire une roue avec Grenoble au centre</p>

      <AreaCircle/>

      <h2>FAQ</h2>
      <p>
        FAQ : “Quelle.visitMethodes utilisez-vous ?” → renforcement positif,
        respect du rythme “Combien de séances faut-il ?” → dépend objectif,
        bilan + plan “Vous déplacez-vous à [Commune] ?” → liste et frais
        éventuels FAQ (3) : paiement, durée, validité des packs.
      </p>
    </main>
  )
}
