'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useMotionValueEvent } from 'motion/react'
import { navLinks } from '../Navigation'
import { useState } from 'react'
import './NavDesktop.scss'

export const NavDesktop = () => {
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 0)
  })

  return (
    <motion.div
      className={isScrolled ? 'nav-desktop scrolled' : 'nav-desktop'}
      aria-label="Menu"
      aria-controls="navigation"
    >
      <Link href="/">Logo</Link>
      <nav className="nav-desktop__container">
        <ul>
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={`nav-desktop__item ${pathname === link.href ? 'active' : ''}`}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  )
}
