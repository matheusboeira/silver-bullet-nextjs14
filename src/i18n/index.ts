export type Locale = 'en' | 'pt'

export type I18nConfig = {
  locales: Locale[]
  defaultLocale: Locale
}

export const i18nConfig: I18nConfig = {
  locales: ['en', 'pt'],
  defaultLocale: 'en'
}
