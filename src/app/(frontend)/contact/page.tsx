import { ContactForm } from '@/components/ContactForm/ContactForm'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'

export const metadata = {
  title: 'Contact',
  description:
    'Contactez Caniliane pour vos questions sur le comportement canin à Grenoble. Formulaire de contact et informations pratiques.',
  openGraph: mergeOpenGraph({
    title: 'Contact – Caniliane',
    description:
      'Contactez Caniliane pour vos questions sur le comportement canin à Grenoble.',
    url: '/contact',
  }),
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <main>
      <div className='container'>
      <h1>Contact</h1>
      <p>
        Tu as un doute, une situation un peu floue, ou juste besoin d’un avis ?
        <br />
        Raconte-moi ce qui se passe (même en vrac) : âge du chien, contexte, ce
        qui te pose problème… et je reviens vers toi.
      </p>
      <p className='text-italic'>
        Si tu as une suggestion d’article, ou un thème que tu voudrais que
        j’aborde dans mon blog, tu peux me l’envoyer ici.
      </p>
      <ContactForm />
      </div>
    </main>
  )
}
