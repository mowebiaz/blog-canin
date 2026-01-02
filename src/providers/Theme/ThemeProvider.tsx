'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import canUseDOM from '@/utilities/canUseDOM'
import type { Theme } from './constants'
import { DEFAULT_THEME, THEME_LS_KEY } from './constants'
import { getImplicitPreference } from './shared'
import type { ThemeContextType } from './types'
import { themeIsValid } from './types'

const initialContext: ThemeContextType = {
  setTheme: () => null,
  theme: undefined,
}

const ThemeContext = createContext(initialContext)

function getInitialTheme(): Theme | undefined {
  if (!canUseDOM) return undefined

  // 1) Si InitTheme a déjà posé data-theme, on s’aligne dessus
  const attr = document.documentElement.getAttribute('data-theme')
  if (attr === 'dark' || attr === 'light') return attr

  // 2) Sinon localStorage
  const stored = window.localStorage.getItem(THEME_LS_KEY)
  if (themeIsValid(stored)) return stored

  // 3) Sinon préférence système
  const implicitPreference = getImplicitPreference()
  return implicitPreference || DEFAULT_THEME
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme | undefined>(() =>
    getInitialTheme(),
  )

  const setTheme = useCallback((themeToSet: Theme | null) => {
    if (!canUseDOM) return

    if (themeToSet === null) {
      window.localStorage.removeItem(THEME_LS_KEY)
      const implicitPreference = getImplicitPreference()
      setThemeState(implicitPreference || DEFAULT_THEME)
      return
    }

    setThemeState(themeToSet)
  }, [])

  useEffect(() => {
    if (!canUseDOM || !theme) return
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem(THEME_LS_KEY, theme)
  }, [theme])

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = (): ThemeContextType => useContext(ThemeContext)
