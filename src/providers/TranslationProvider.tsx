'use client'

import { Locale } from '@/i18n'
import { initTranslations } from '@/i18n/init'
import { Resource, createInstance } from 'i18next'
import { I18nextProvider } from 'react-i18next'

type TranslationsProviderProps = {
  children: React.ReactNode
  locale: Locale
  namespaces: string[]
  resources: Resource
}

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources
}: TranslationsProviderProps) {
  const i18n = createInstance()
  initTranslations(locale, namespaces, i18n, resources)

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
