import { LayoutProps } from '@/@types'
import { cn } from '@/utils/cn'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Silver Bullet',
  description: 'Manage your projects with ease.'
}

export default function RootLayout({
  children,
  params: { locale }
}: LayoutProps) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn('container', inter.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
