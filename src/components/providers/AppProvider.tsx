'use client'

import { ReactNode, useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import store from 'store'

export default function AppProvider({ children }: { children: ReactNode }) {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const userMode = localStorage.getItem('theme-modern')
    const systemDarkMode = window.matchMedia?.('(prefers-color-scheme: dark)').matches

    const theme = userMode === 'dark' || (userMode !== 'light' && systemDarkMode) ? 'dark' : 'light'
    document.documentElement.dataset.theme = theme

    setIsReady(true)
  }, [])

  if (!isReady) return null

  return <Provider store={store}>{children}</Provider>
}
