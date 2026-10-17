'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Divide as Hamburger } from 'hamburger-react'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'motion/react'
import { isLinkActive } from '../isLinkActive'
import { navLinks } from '../Navigation'
import './NavMobile.scss'

export const NavMobile = () => {
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 0)
  })

  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth
      document.body.style.overflowY = 'hidden'
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`
      }
    } else {
      document.body.style.overflowY = ''
      document.body.style.paddingRight = ''
    }

    return () => {
      document.body.style.overflowY = ''
      document.body.style.paddingRight = ''
    }
  }, [isOpen])

  return (
    <motion.nav
      className={isScrolled ? 'nav-mobile scrolled' : 'nav-mobile'}
      aria-label="Navigation principale"
    >
      <div className="logo-container">
        <Link
          href="/"
          aria-label="Accueil"
        >
          <Image
            src="/images/caniliane-logo.png"
            alt="Caniliane Logo"
            width={40}
            height={40}
            loading="eager"
          />
        </Link>
      </div>
      <Hamburger
        color="#dd2c6a"
        toggle={setIsOpen}
        toggled={isOpen}
        distance="sm"
        rounded
        hideOutline={false}
        label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-controls="nav-mobile-menu"
      />
      {isOpen && (
        <AnimatePresence>
          <motion.div
            id="nav-mobile-menu"
            className="nav-mobile__container"
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.3 }}
          >
            <ul>
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  className={`nav__item ${
                    isLinkActive(pathname, link.href) ? 'active' : ''
                  }`}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      )}
    </motion.nav>
  )
}
