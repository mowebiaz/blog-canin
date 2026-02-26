import Image from 'next/image'
import './About.scss'

export default function AboutPage() {
  return (
    <main id="about">
      <h1>
        Une passion simple : mieux se comprendre pour mieux vivre ensemble
      </h1>
      <div className="intro">
        <div className="intro__image">
          <Image
            src={'/images/educatrice-canine.webp'}
            alt={'Elise, educatrice canine à Grenoble'}
            fill
            priority
            sizes={'(max-width: 576px) 100vw, (max-width: 768px) 65vw, 33vw '}
          />
        </div>
        <p>
          Je m’appelle Elise, éducatrice canine à Grenoble et ses environs. Si
          je fais ce métier aujourd’hui, c’est parce que je crois profondément à
          une chose :{' '}
          <span className="text-accent">
            un chien &quot;difficile&quot; n’est pas un chien
            &quot;méchant&quot;.
          </span>{' '}
          C’est souvent un chien qui a besoin qu’on l’aide à communiquer
          autrement, à se sentir en sécurité, et à trouver sa place dans notre
          monde.
        </p>
      </div>

      <div className='container'>

      <p>
        Mon travail, c’est de vous accompagner,{' '}
        <span className="text-accent">sans jugement</span>, pour retrouver un
        quotidien plus serein : des promenades plus agréables, une maison plus
        apaisée, et surtout une relation plus claire entre vous et votre chien.
      </p>

      <h2>Comment j’en suis arrivée là</h2>
      <p>
        Comme beaucoup, mon histoire a commencé par une rencontre. Un chien qui
        m’a fait rire, m’a attendrie… et m’a aussi posé plein de questions. Je
        me suis rendu compte à quel point on peut se sentir perdu quand on aime
        son chien, qu’on fait &quot;de son mieux&quot;, et que malgré tout… ça
        coince :
        <br />
        il tire en laisse - il explose au croisement d’un autre chien - il
        n’arrive pas à rester seul - il détruit, aboie, s’agite - il semble sur
        le qui-vive en permanence.
        <br />
        Au départ, je pensais qu’il suffisait de bien faire et d’être cohérente.
        Mais j’ai vite compris que{' '}
        <span className="text-accent">chaque chien est un individu</span>, avec
        ses émotions, son passé, ses besoins et son rythme. Alors j’ai commencé
        à me former, puis à approfondir : compréhension du comportement, lecture
        des signaux, apprentissages, gestion des émotions… jusqu’à en faire mon
        métier.
      </p>

      <h2>Ma manière de travailler</h2>
      <p>
        Je privilégie une éducation respectueuse, basée sur la coopération,
        l’observation et la progression. Pas de recettes magiques, pas de
        méthodes “dures”, pas d’injonctions culpabilisantes. Je travaille autant
        sur l’apprentissage que sur l’environnement, l’organisation du
        quotidien, et les émotions (du chien… et des humains aussi).
      </p>

      <h2>Ce que j’aime le plus dans ce métier</h2>
      <p>
        Ce que je trouve le plus beau, c’est quand un binôme se
        &apos;retrouve&apos;. Quand on passe de :{' '}
        <span className="test-italice">je ne comprends plus mon chien</span>Je
        ne comprends plus mon chien à
        <span className="text-italic">Ok, je vois ce qu’il me dit</span>. Quand
        les choses redeviennent plus simples, plus légères. Quand on reprend
        confiance.
      </p>
      </div>
    </main>
  )
}
