'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { isLinkActive } from '../isLinkActive'
import { navLinks } from '../Navigation'
import './NavDesktop.scss'

export const NavDesktop = () => {
  const pathname = usePathname()
  const { scrollY } = useScroll()
/*   const [isScrolled, setIsScrolled] = useState(
    typeof window !== 'undefined' && !window.location.hash,
  ) */
  const [isScrolled, setIsScrolled] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 0)
  })

  return (
    <motion.nav
      className={isScrolled ? 'nav-desktop scrolled' : 'nav-desktop'}
      aria-label="Menu"
      aria-controls="navigation"
    >
      <div className="logo-container">
        <Link href="/">
          <Image
            src="/images/caniliane-logo.png"
            alt="Caniliane Logo"
            fill
            priority
          />
        </Link>
      </div>
      <ul className="nav-desktop__container">
        {navLinks.map((link) => (
          <li
            key={link.href}
            className={`nav__item ${isLinkActive(pathname, link.href) ? 'active' : ''}`}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
