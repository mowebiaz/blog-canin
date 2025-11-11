'use client'

import { NavDesktop } from './NavDesktop/NavDesktop'
import { NavMobile } from './NavMobile/NavMobile'
import './Navigation.scss'

export const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/a-propos', label: 'A propos' },
  { href: '/contact', label: 'Contact' },
]

export const Navigation = () => {
  return (
    <header>
      <NavDesktop />
      <NavMobile />
    </header>
  )
}
