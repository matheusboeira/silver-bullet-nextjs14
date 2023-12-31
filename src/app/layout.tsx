import { type LayoutProps } from '@/@types'
import type { Metadata } from 'next'
import Providers from './[locale]/providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Silver Bullet',
  description: 'Manage your projects with ease.'
}

type RootLayoutProps = LayoutProps & {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="text-foreground bg-background container h-screen w-full">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
