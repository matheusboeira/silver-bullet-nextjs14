import { Locale, i18nConfig } from '@/i18n'
import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'

export default async function initTranslations(
  locale: Locale,
  namespaces: string[]
) {
  const instance = createInstance()
  instance.use(initReactI18next)

  instance.use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`../../locales/${language}/${namespace}.json`)
    )
  )

  await instance.init({
    lng: locale,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: namespaces[0],
    fallbackNS: namespaces[0],
    ns: namespaces
  })

  return {
    i18n: instance,
    resources: instance.services.resourceStore.data,
    t: instance.t
  }
}
