import { LayoutProps } from '@/app/@types'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Silver Bullet',
  description: 'Manage your projects with ease.'
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang={'en-US'} suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
