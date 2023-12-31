import { NextIntlClientProvider } from 'next-intl'
import Providers from './providers'

export type LayoutProps = {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default function LocaleLayout({ children, params }: LayoutProps) {
  return (
    <NextIntlClientProvider locale={params.locale}>
      <Providers>{children}</Providers>
    </NextIntlClientProvider>
  )
}
