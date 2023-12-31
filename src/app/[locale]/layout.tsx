import { LayoutProps } from '@/@types'
import Providers from './providers'

type LocaleLayoutProps = LayoutProps & {
  children: React.ReactNode
}

export default function LocaleLayout({ children }: LocaleLayoutProps) {
  return (
    <>
      <Providers>{children}</Providers>
    </>
  )
}
