import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

export type Locale = 'en' | 'pt'
export const locales: Locale[] = ['en', 'pt'] as const

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  return {
    messages: (await import(`../../messages/${locale}.json`)).default
  }
})
