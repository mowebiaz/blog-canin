import Image from 'next/image'
import Link from 'next/link'
import './HomeHero.scss'

export const HomeHero = () => {
  return (
    <div className="home-hero">
      <div className="home-hero__image">
        <Image
          src="/images/educatrice-canine.webp"
          alt="hero"
          fill
          priority
          sizes='100vw'
        />
      </div>
      <div className="home-hero__content">
        <h1 className="home-hero__title">Éducatrice canine à Grenoble </h1>
        <div className="home-hero__cta">
          <Link
            className="btn btn--primary"
            href="/contact"
          >
            Me contacter
          </Link>
          <Link
            className="btn btn--secondary"
            href="/services"
          >
            Mes services
          </Link>
        </div>
      </div>
    </div>
  )
}
