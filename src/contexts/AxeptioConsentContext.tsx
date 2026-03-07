'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

interface AxeptioConsentContextValue {
  vendors: Record<string, boolean>
  ready: boolean //Whether the SDK has resolved consent (from cache or user interaction)
  openConsentManager: () => void
}

const AxeptioConsentContext = createContext<AxeptioConsentContextValue | null>(
  null,
)

export function AxeptioConsentProvider({ children }: { children: ReactNode }) {
  const [vendors, setVendors] = useState<Record<string, boolean>>({})
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    let mounted = true

    function handleComplete(choices: Record<string, boolean>) {
      if (!mounted) return
      setVendors({ ...choices })
      setReady(true)
    }

    // Register a callback that fires once the SDK is ready.
    // If consent was cached from a previous visit the SDK fires
    // `cookies:complete` immediately — the callback picks it up.
    window._axcb = window._axcb || []
    window._axcb.push((sdk) => {
      sdk.on('cookies:complete', handleComplete)
    })

    return () => {
      mounted = false
    }
  }, [])

  const openConsentManager = useCallback(() => {
    window.openAxeptioCookies?.()
  }, [])

  return (
    <AxeptioConsentContext.Provider
      value={{ vendors, ready, openConsentManager }}
    >
      {children}
    </AxeptioConsentContext.Provider>
  )
}

/**
 * Access the centralised Axeptio consent state.
 * Must be called inside an `<AxeptioConsentProvider>`.
 */
export function useAxeptioConsent(): AxeptioConsentContextValue {
  const ctx = useContext(AxeptioConsentContext)
  if (!ctx) {
    throw new Error(
      'useAxeptioConsent must be used within an <AxeptioConsentProvider>',
    )
  }
  return ctx
}
