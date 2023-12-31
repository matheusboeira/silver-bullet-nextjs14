import { LayoutProps } from '@/@types'
import { initTranslations } from '@/i18n/init'

type TitleProps = {
  override?: string
}

type UseTranslationsProps = LayoutProps & {
  isDynamic?: boolean
  ns?: string[]
}

export const useTranslations = async ({
  params,
  ns = ['common'],
  isDynamic = false
}: UseTranslationsProps) => {
  const i18n = await initTranslations(params.locale, ns)

  const title = ({ override }: TitleProps = {}) => {
    if (override) return override
    if (isDynamic) return params.id ? i18n.t('page.edit') : i18n.t('page.new')
    return i18n.t('page.title')
  }

  const breadcrumbs = () => {
    return [{ label: 'Teste ' }]
  }

  return {
    i18n: {
      ...i18n,
      ns
    },
    t: i18n.t,
    title,
    breadcrumbs
  }
}
