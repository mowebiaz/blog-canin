'use client'

import { useAxeptioConsent } from '@/contexts/AxeptioConsentContext'
import './AxeptioConsentButton.scss'

interface AxeptioConsentButtonProps {
  label?: string
  className?: string
}

export function AxeptioConsentButton({
  label = 'Gérer mes cookies',
  className,
}: AxeptioConsentButtonProps) {
  const { openConsentManager } = useAxeptioConsent()

  return (
    <button
      type="button"
      className={`axeptio-consent-button${className ? ` ${className}` : ''}`}
      onClick={openConsentManager}
    >
      {label}
    </button>
  )
}
