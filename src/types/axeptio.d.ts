interface AxeptioSDK {
  on(
    event: 'cookies:complete',
    callback: (choices: Record<string, boolean>) => void,
  ): void
  on(event: string, callback: (...args: unknown[]) => void): void
}

declare global {
  interface Window {
    axeptio_settings?: {
      clientId: string
      cookiesVersion: string
    }
    _axcb?: Array<(sdk: AxeptioSDK) => void>
    openAxeptioCookies?: () => void
  }
}

export {}
