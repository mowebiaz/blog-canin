
'use client'

import * as Sentry from '@sentry/nextjs'

export default function SentryTestPage() {
  const handleTestError = () => {
    try {
      throw new Error('Test Sentry - Preview Vercel')
    } catch (error) {
      Sentry.captureException(error)
    }
  }

  return (
    <main>
      <h1>Test Sentry - Preview Vercel</h1>

      <button type="button" onClick={handleTestError}>
        Envoyer une erreur à Sentry
      </button>
    </main>
  )
}
