import { NextIntlClientProvider } from 'next-intl'

export type LayoutProps = {
  children: React.ReactNode
  params?: {
    locale: string
  }
}

export default function LocaleLayout({ children, params }: LayoutProps) {
  return (
    <NextIntlClientProvider locale={params?.locale}>
      {children}
    </NextIntlClientProvider>
  )
}
