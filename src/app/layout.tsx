import { LayoutProps } from '@/@types'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '../utils/cn'
import Providers from './[locale]/providers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Silver Bullet',
  description: 'Manage your projects with ease.'
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'container text-foreground bg-background h-screen w-full',
          inter.className
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
