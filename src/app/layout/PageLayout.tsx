import { Breadcrumb, BreadcrumbItemProps } from '@/components/Layout/Breadcrumb'
import { Locale } from '@/i18n'
import { Translations } from '@/i18n/init'
import TranslationsProvider from '@/providers/TranslationProvider'

type I18nProps = Translations & {
  ns?: string[]
}

type PageLayoutProps = {
  title: React.ReactNode
  children: React.ReactNode
  i18n: I18nProps
  isAuth?: boolean
  breadcrumbs?: BreadcrumbItemProps[]
}

export const PageLayout = async ({
  title,
  children,
  breadcrumbs,
  i18n: { i18n, resources, ns = ['common'] },
  isAuth = false
}: PageLayoutProps) => {
  return (
    <TranslationsProvider
      locale={i18n.language as Locale}
      resources={resources}
      namespaces={ns}
    >
      {!isAuth && (
        <section className="flex flex-col flex-wrap">
          {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
          <h1 className="mt-0.5 text-2xl font-bold tracking-wide">{title}</h1>
        </section>
      )}
      <main>{children}</main>
    </TranslationsProvider>
  )
}
