import { LayoutProps } from '@/@types'
import type { Metadata } from 'next'
import Providers from './[locale]/providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Silver Bullet',
  description: 'Manage your projects with ease.'
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={'container text-foreground bg-background h-screen w-full'}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
