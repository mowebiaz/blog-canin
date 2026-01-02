'use client'

import type { Theme } from '../constants'
import { useTheme } from '../ThemeProvider'
import './ThemeSelector.scss'

export const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme()

  // Si jamais theme est undefined pendant l’hydratation (rare avec InitTheme), on évite un flash
  if (!theme) {
    return (
      <button
        className="theme-toggle theme-toggle--loading"
        aria-label="Changer le thème"
        disabled
      />
    )
  }

  const isDark = theme === 'dark'
  const nextTheme: Theme = isDark ? 'light' : 'dark'

  const handleToggle = () => {
    setTheme(nextTheme) // écrit localStorage + data-theme via le Provider
  }

  return (
    <button
      type="button"
      className={`theme-toggle ${isDark ? 'is-dark' : 'is-light'}`}
      role="switch"
      aria-checked={isDark}
      aria-label={`Passer en thème ${nextTheme}`}
      title={`Passer en thème ${nextTheme}`}
      onClick={handleToggle}
    >
      <span className="theme-toggle__track">
        <span className="theme-toggle__thumb" />
      </span>
      <span className="theme-toggle__label">{isDark ? 'Dark' : 'Light'}</span>
    </button>
  )
}
