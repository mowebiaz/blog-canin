import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'

export const metadata = {
  title: 'Politique de confidentialité',
  description:
    'Politique de confidentialité du site Caniliane – éducatrice canine à Grenoble.',
  openGraph: mergeOpenGraph({
    title: 'Politique de confidentialité – Caniliane',
    url: '/politique-de-confidentialite',
  }),
  alternates: { canonical: '/politique-de-confidentialite' },
  robots: {
    index: false,
    follow: true,
  },
}

export default function PolitiqueDeConfidentialitePage() {
  return (
    <main id="politique-de-confidentialite">
      <h1>Politique de confidentialité</h1>
      <div className="container">
        <h2>Responsable du traitement</h2>
        <p>
          Ce site est un template de démonstration réalisé dans le cadre du
          portfolio de MorganeWeb. Les données éventuellement transmises via le
          formulaire de contact sont reçues et traitées par :
        </p>
        <p>MorganeWeb (Morgane Couvet)</p>
        <p>Email : contact@morganeweb.com</p>
        <p>Site : https://morganeweb.com</p>

        <h2>Données collectées</h2>

        <h3>Formulaire de contact</h3>
        <p>
          Lorsque vous utilisez le formulaire de contact, les données suivantes
          peuvent être collectées :
        </p>
        <ul>
          <li>Nom</li>
          <li>Adresse e-mail</li>
          <li>Message</li>
          <li>Données techniques minimales liées à l’envoi du formulaire</li>
        </ul>

        <h3>Données techniques</h3>
        <p>
          Le site peut également générer des journaux techniques (logs)
          strictement nécessaires au bon fonctionnement, à la sécurité, à la
          prévention du spam et au diagnostic d’éventuelles erreurs.
        </p>

        <h3>Carte Google Maps</h3>
        <p>
          La page Services propose une carte Google Maps présentant la zone
          d’intervention. Cette carte est désactivée par défaut : tant que vous
          ne cliquez pas sur le bouton « Activer la carte », aucun contenu
          n’est chargé depuis Google et aucune donnée ne lui est transmise.
        </p>
        <p>
          Si vous activez la carte, votre navigateur se connecte aux serveurs
          de Google, ce qui entraîne la transmission de certaines données,
          notamment votre adresse IP et des données techniques de connexion.
        </p>

        <h2>Finalités</h2>
        <p>Les données collectées sont utilisées uniquement pour:</p>
        <ul>
          <li>répondre aux demandes envoyées via le formulaire de contact,</li>
          <li>assurer le suivi des échanges,</li>
          <li>protéger le formulaire contre les abus et le spam,</li>
          <li>
            assurer le bon fonctionnement technique et la sécurité du site,
          </li>
          <li>
            afficher, à votre demande, la zone d’intervention via la carte
            Google Maps.
          </li>
        </ul>
        <p>
          Aucune donnée n’est vendue. Aucune donnée n’est utilisée à des fins
          publicitaires par l’éditrice du site.
        </p>

        <h2>Base légale</h2>
        <p>
          Les traitements réalisés via le formulaire de contact reposent sur
          votre consentement, lorsque vous envoyez volontairement une demande,
          ainsi que sur l’intérêt légitime lié à la sécurité du site, à la
          prévention du spam et à la gestion des messages reçus.
        </p>
        <p>
          L’affichage de la carte Google Maps repose sur votre consentement,
          exprimé en cliquant sur le bouton « Activer la carte ». Ce choix n’est
          pas mémorisé : la carte est à nouveau désactivée à chaque chargement
          de la page.
        </p>

        <h2>Destinataires des données et sous-traitants</h2>
        <p>
          Les données collectées sont destinées à MorganeWeb pour le traitement
          des demandes.
        </p>
        <p>
          Elles peuvent également être traitées, dans la stricte limite
          nécessaire au fonctionnement du site, par des prestataires techniques
          agissant en tant que sous-traitants, par exemple :
        </p>
        <ul>
          <li>l’hébergeur du site,</li>
          <li>un prestataire d’envoi d’e-mails,</li>
          <li>un prestataire de base de données ou de stockage,</li>
          <li>
            Google, uniquement si vous activez la carte Google Maps.
          </li>
        </ul>
        <p>
          Ces prestataires n’utilisent pas vos données pour leur propre compte,
          sauf dans le cadre de leurs propres politiques lorsqu’un service tiers
          externe est chargé directement dans votre navigateur.
        </p>

        <h2>Durée de conservation</h2>
        <p>
          Les données envoyées via le formulaire de contact sont conservées le
          temps nécessaire au traitement de la demande, puis au maximum 12 mois
          après le dernier échange, sauf obligation légale particulière ou
          nécessité liée à un litige.
        </p>
        <p>
          Les logs techniques sont conservés pendant une durée limitée,
          proportionnée aux besoins de sécurité et de maintenance.
        </p>
        <p>
          Les données éventuellement traitées par Google dans le cadre de
          l’affichage de la carte relèvent de la politique de confidentialité de
          Google.
        </p>

        <h2>Vos droits</h2>
        <p>
          Conformément à la réglementation applicable, vous disposez d’un droit
          d’accès, de rectification, de suppression, d’opposition, de limitation
          du traitement et, selon les cas, d’un droit à la portabilité de vos
          données.
        </p>
        <p>
          Vous pouvez également retirer votre consentement lorsque le traitement
          repose sur celui-ci. Pour la carte Google Maps, il suffit de recharger
          la page : la carte est alors de nouveau désactivée.
        </p>
        <p>
          Pour toute demande relative à vos données personnelles :
          contact@morganeweb.com
        </p>

        <h2>Cookies et traceurs</h2>
        <p>
          Ce site ne dépose aucun cookie ni traceur dans le navigateur des
          visiteurs : il n’utilise ni outil de mesure d’audience, ni publicité,
          ni outil de gestion du consentement. C’est pourquoi aucune bannière de
          cookies ne s’affiche.
        </p>
        <p>
          Seul l’espace d’administration, réservé à l’éditrice du site, utilise
          un cookie de connexion strictement nécessaire à son fonctionnement.
        </p>
        <p>
          Si vous activez la carte Google Maps, Google peut déposer ou lire
          certains traceurs et collecter des données techniques nécessaires à
          l’affichage du service. Ce chargement n’a lieu qu’après votre clic sur
          le bouton « Activer la carte ».
        </p>
        <p>
          Pour en savoir plus, vous pouvez consulter la{' '}
          <a
            href="https://policies.google.com/privacy?hl=fr"
            rel="noopener noreferrer"
          >
            politique de confidentialité de Google
          </a>
          .
        </p>

        <h2>Évolutions de la politique</h2>
        <p>
          Cette politique de confidentialité peut être modifiée à tout moment,
          notamment en cas d’évolution technique du site ou d’ajout de nouveaux
          services.
        </p>
        <p>
          En cas de changement important dans les traitements ou l’utilisation
          de traceurs, cette page sera mise à jour.
        </p>

        <p>Dernière mise à jour : 17/10/2026</p>
      </div>
    </main>
  )
}
