'use client'

import { ThemeProvider } from 'next-themes'
import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

type ProvidersProps = {
  children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  const navigate = useRouter()

  return (
    <NextUIProvider navigate={navigate.push}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </NextUIProvider>
  )
}
