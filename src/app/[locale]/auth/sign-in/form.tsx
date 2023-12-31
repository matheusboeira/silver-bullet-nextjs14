'use client'

import { useTranslation } from 'react-i18next'

export const SignInForm = () => {
  const { t } = useTranslation()
  return <h1>{t('page.new')}</h1>
}
