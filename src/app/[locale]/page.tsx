import { LayoutProps } from '@/@types'
import initTranslations from '@/i18n/init'

export default async function Home({ params }: LayoutProps) {
  const { t } = await initTranslations(params.locale, ['weekly-evaluation'])

  return (
    <main>
      <h1>{t('page.new')}</h1>
    </main>
  )
}
