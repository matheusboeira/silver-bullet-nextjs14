import { LayoutProps } from '@/@types'
import { PageLayout } from '@/app/layout/PageLayout'
import { useTranslations } from '@/hooks/server/useTranslations'
import { SignInForm } from './form'

export default async function SignIn({ params }: LayoutProps) {
  const { title, breadcrumbs, i18n } = await useTranslations({
    params,
    ns: ['weekly-report']
  })

  return (
    <PageLayout title={title()} breadcrumbs={breadcrumbs()} i18n={i18n}>
      <SignInForm />
    </PageLayout>
  )
}
