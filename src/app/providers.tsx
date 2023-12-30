'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/navigation'

type ProvidersProps = {
  children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  const navigate = useRouter()

  return (
    <NextUIProvider navigate={navigate.push}>
      <ThemeProvider attribute="class" enableSystem>
        {children}
      </ThemeProvider>
    </NextUIProvider>
  )
}
