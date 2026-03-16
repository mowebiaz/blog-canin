import Image from 'next/image'
import Link from 'next/link'
import './HomeHero.scss'

export const HomeHero = () => {
  return (
    <div className="home-hero">
      <div className="home-hero__image">
        <Image
          src="/images/liane.webp"
          alt="hero"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
        />
      </div>
      <div className="home-hero__content">
        <h1 className="home-hero__title">
          Liane
          <br />
          <span className="subtitle">
            Éducatrice canine à Grenoble
          </span>
        </h1>

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
