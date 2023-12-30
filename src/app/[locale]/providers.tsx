'use client'

import { queryClient } from '@/app/[locale]/services/react-query'
import { NextUIProvider } from '@nextui-org/react'
import { QueryClientProvider } from '@tanstack/react-query'
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
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ThemeProvider>
    </NextUIProvider>
  )
}
