import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'

export const metadata = {
  title: 'Mentions légales',
  description:
    'Mentions légales du site Caniliane – éducatrice canine à Grenoble.',
  openGraph: mergeOpenGraph({
    title: 'Mentions légales – Caniliane',
    url: '/mentions-legales',
  }),
  alternates: { canonical: '/mentions-legales' },
  robots: {
    index: false,
    follow: true,
  },
}

export default function MentionsLegalesPage() {
  return (
    <main id="mentions-legales">
      <h1>Mentions légales</h1>

      <div className="container">
        <h2>Informations générales</h2>
        <p>
          Le présent site (ci-après « le Site ») est un projet de démonstration
          réalisé dans le cadre d’un portfolio de développeuse web.
        </p>
        <p className="text-accent">Important :</p>
        <p>
          Ce site d’éducateur canin est fictif. Les contenus proposés (services,
          conseils, articles, tarifs, textes de présentation, coordonnées, avis,
          etc.) sont fournis uniquement à titre d’exemple. Aucune prestation
          réelle ne peut être réservée via ce Site.
        </p>
        <p>
          Ce modèle (&quot;template&quot;) a pour seul but d’illustrer ce à quoi
          pourrait ressembler le site d’un éducateur canin, notamment dans la
          région de Grenoble et alentours.
        </p>

        <h2>Éditeur du site</h2>
        <p>Statut : Entrepreneur Individuel</p>
        <p>Nom : Morgane Couvet</p>
        <p>Nom commercial : MorganeWeb</p>
        <p>Adresse : 11 Boulevard Maréchal Leclerc, 38000 Grenoble</p>
        <p>E-mail : contact@morganeweb.com</p>
        <p>SIRET : 938 955 333 00019</p>
        <p>Responsable de la publication : Morgane Couvet</p>

        <h2>Hébergeur</h2>
        <p>Nom de l’hébergeur : Vercel Inc.</p>
        <p>Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
        <p>Site web : https://vercel.com/</p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L’ensemble des éléments présents sur le Site (textes, maquettes, mises
          en page, éléments graphiques, logos de démonstration, illustrations,
          etc.) est destiné à illustrer un projet fictif.
        </p>
        <p>Sauf mention contraire :</p>
        <ul>
          <li>
            les textes de présentation ont été rédigés spécifiquement pour ce
            projet,
          </li>
          <li>
            la reproduction, même partielle, des contenus du Site est autorisée
            uniquement dans le cadre d’un usage personnel ou d’un échange
            professionnel autour du portfolio de la développeuse à l’origine du
            projet,
          </li>
          <li>
            toute réutilisation commerciale nécessite l’accord écrit préalable
            de l’éditrice du Site.
          </li>
        </ul>

        <h2>Crédits photo & visuels</h2>
        <p>
          Les images utilisées sur ce Site ont pour seul but d’illustrer
          l’univers de l’éducation canine, du chien de compagnie et de la
          relation humain-chien.
        </p>
        <p>
          Chaque image reste la propriété de son auteur, de sa banque d’images
          ou de la plateforme qui la fournit. Toute reproduction ou
          réutilisation doit respecter les conditions d’utilisation desdites
          plateformes ou l’autorisation de l’auteur.
        </p>
        <ul>
          <li>Unsplash</li>
          <li>Freepik</li>
          <li>Pexels</li>
          <li>Gemini (images générées par IA)</li>
        </ul>

        <h2>Caractère fictif des informations</h2>
        <p>
          Les contenus suivants sont fictifs et n’ont aucune valeur
          contractuelle:
        </p>
        <ul>
          <li>
            le nom de l’activité et l’identité de l’éducateurtrice présentée sur
            le Site,
          </li>
          <li>
            les descriptions des accompagnements, séances, balades, bilans ou
            prestations proposées,
          </li>
          <li>
            les tarifs, formules, disponibilités et modalités de réservation,
          </li>
          <li>les coordonnées de contact affichées pour l’activité fictive,</li>
          <li>
            les témoignages, avis clients et cas présentés à titre d’exemple.
          </li>
        </ul>
        <p>
          Toute ressemblance avec des personnes, entreprises ou activités
          existantes serait purement fortuite.
        </p>

        <h2>Liens externes</h2>
        <p>
          Le Site peut contenir des liens vers d’autres sites. Ces liens sont
          fournis uniquement à titre informatif. L’éditrice du Site n’exerce
          aucun contrôle sur ces sites tiers et ne peut être tenue responsable
          de leurs contenus, pratiques ou politiques de confidentialité.
        </p>

        <h2>Modification des mentions légales</h2>
        <p>
          Les présentes mentions légales peuvent être modifiées à tout moment,
          notamment pour s’adapter à l’évolution des contenus du Site ou de la
          législation en vigueur.
        </p>
        <p>Dernière mise à jour : 07/03/2026</p>
      </div>
    </main>
  )
}
