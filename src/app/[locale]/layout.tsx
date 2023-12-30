import { LayoutProps } from '@/app/[locale]/@types'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { cn } from './utils/cn'

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
      <body
        className={cn(
          'container text-foreground bg-background h-screen w-full',
          inter.className
        )}
      >
        <NextIntlClientProvider locale={locale}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
