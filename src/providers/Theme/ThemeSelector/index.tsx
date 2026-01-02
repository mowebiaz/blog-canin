'use client'

import { IoMoon, IoSunny } from 'react-icons/io5'
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
      <div
        className={
          isDark ? 'theme-toggle__label' : 'theme-toggle__label--active'
        }
      >
        <IoSunny />
      </div>

      <span className="theme-toggle__track">
        <span className="theme-toggle__thumb" />
      </span>
      <div
        className={
          isDark ? 'theme-toggle__label--active' : 'theme-toggle__label'
        }
      >
        <IoMoon />
      </div>
    </button>
  )
}
