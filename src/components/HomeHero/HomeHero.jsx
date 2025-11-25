import Image from 'next/image'
import './HomeHero.scss'
import Link from 'next/link'

export const HomeHero = () => {
  return (
    <div className="home-hero">
      <div className="home-hero__image">
        <Image
          src="/images/educatrice-canine.webp"
          alt="hero"
          fill
          priority
        />
      </div>
      <div className="home-hero__content">
        <h1 className="home-hero__title">Éducatrice canine à Grenoble </h1>
        <div className="home-hero__cta">
          <Link className="btn btn--secondary" href="/">En savoir plus</Link>
          <Link className="btn btn--primary" href="/">En savoir plus</Link>
        </div>
      </div>
    </div>
  )
}