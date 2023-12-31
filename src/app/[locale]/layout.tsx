import Providers from './providers'

export type LayoutProps = {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default function LocaleLayout({ children, params }: LayoutProps) {
  console.log(params.locale)
  return <Providers>{children}</Providers>
}
