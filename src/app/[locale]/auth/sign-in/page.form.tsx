'use client'

import { useTranslations } from 'next-intl'

export const SignInForm = () => {
  const t = useTranslations('Index')
  return <h1>{t('title')}</h1>
}
