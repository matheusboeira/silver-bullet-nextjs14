import { useTranslations } from 'next-intl'
import { SignInForm } from './form'
import { PageLayout } from '@/app/layout/PageLayout'

export default function Home() {
  const t = useTranslations('Index')

  return (
    <PageLayout
      title={t('title')}
      breadcrumbs={[
        { label: 'Teste' },
        { label: 'teste2' },
        { label: 'Teste 3' }
      ]}
    >
      <SignInForm />
    </PageLayout>
  )
}
