import { useTranslations } from 'next-intl'
import { SignInForm } from './form'
import { PageLayout } from '@/app/layout/PageLayout'

export default function Home() {
  const t = useTranslations('Index')

  return (
    <PageLayout
      title={t('title')}
      breadcrumb={[{ label: 'Teste' }, { label: 'teste2' }]}
    >
      <SignInForm />
    </PageLayout>
  )
}
