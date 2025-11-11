'use client'

import { useEffect, useRef, useState } from 'react'
//import { motion, AnimatePresence } from 'motion/react'
import { useClickAway } from 'react-use'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Spin as Hamburger } from 'hamburger-react'
import { navLinks } from '../Navigation'
import './NavMobile.scss'

export const NavMobile = () => {
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useClickAway(ref, () => {
    setIsOpen(false)
  })

  return (
    <div
      className="nav-mobile"
      ref={ref}
    >
      <p>Logo</p>
      <Hamburger
        direction="left"
        // duration
        color="#8b4513"
        toggle={toggleMenu}
        toggled={isOpen}
        distance="sm"
        rounded
        hideOutline={false}
        label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
      />
      {isOpen && (
        <nav className="nav-mobile__container">
          <ul>
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={`nav-mobile__item ${
                  pathname === link.href ? 'active' : ''
                }`}
              >
                <Link
                  href={link.href}
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  )
}
