import { LayoutProps } from '@/@types'
import initTranslations from '@/i18n/init'
import TranslationsProvider from '@/providers/TranslationProvider'
import { SignInForm } from './auth/sign-in/form'

export default async function Home({ params }: LayoutProps) {
  const { t, resources } = await initTranslations(params.locale, [
    'weekly-evaluation'
  ])

  return (
    <TranslationsProvider
      namespaces={['weekly-evaluation']}
      locale={params.locale}
      resources={resources}
    >
      <main>
        <h1>{t('page.new')}</h1>
        <SignInForm />
      </main>
    </TranslationsProvider>
  )
}
