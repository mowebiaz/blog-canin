import { FaFacebook, FaSquareInstagram } from 'react-icons/fa6'
import Link from 'next/link'
import './Footer.scss'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__columns">
          <section
            className="footer__column"
            aria-labelledby="footer-contact"
          >
            <p className="footer__title">Contact</p>
            <address>
              <ul className="footer__list">
                <li>Téléphone : 06 00 00 00 00</li>
                <li>Email : contact@caniliane.fr</li>
                <li>Grenoble</li>
              </ul>
            </address>
          </section>

          <section
            className="footer__column"
            aria-labelledby="footer-area"
          >
            <p className="footer__title">Zone d&apos;intervention</p>
            <p>Grenoble +/- 30 km</p>
            <p>à domicile et en extérieur</p>
            <ul className="footer__list footer__list--compact">
              <li>Grenoble</li>
              <li>Meylan</li>
              <li>Echirolles</li>
              <li>Saint-Martin-d&apos;Heres</li>
              <li>Sassenage</li>
              <li>Seyssins</li>
              <li>Fontaine</li>
            </ul>
          </section>

          <section
            className="footer__column"
            aria-labelledby="footer-social"
          >
            <p className="footer__title">Réseaux sociaux</p>
            <div className="footer__socials">
              <a
                className="footer__social"
                href="https://www.instagram.com/"
                rel="noreferrer noopener"
                target="_blank"
                aria-label="Lien vers le profil Instagram"
              >
                <FaSquareInstagram
                  className="footer__icon"
                  size={25}
                />
              </a>
              <a
                className="footer__social"
                href="https://www.facebook.com/"
                rel="noreferrer noopener"
                target="_blank"
                aria-label="Lien vers le profil Facebook"
              >
                <FaFacebook
                  className="footer__icon"
                  size={25}
                />
              </a>
            </div>
          </section>
        </div>

        <div className="footer__bottom">
          <div
            className="footer__legal"
            aria-label="Pied de page"
          >
            <Link
              className="footer__link"
              href="/mentions-legales"
            >
              Mentions légales
            </Link>
            <Link
              className="footer__link"
              href="/politique-de-confidentialite"
            >
              Politique de confidentialité
            </Link>
          </div>
          <p className="footer__meta">© {currentYear} Caniliane</p>
          <p className="footer__meta">
            Site réalisé par{' '}
            <a
              className="footer__link"
              href="https://morganeweb.com/"
              rel="noreferrer noopener"
              target="_blank"
              aria-label="Lien vers le site de MorganeWeb"
            >
              MorganeWeb
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
