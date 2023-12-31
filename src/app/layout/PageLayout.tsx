import { Breadcrumb, BreadcrumbItemProps } from '@/components/Layout/Breadcrumb'

type PageLayoutProps = {
  title: React.ReactNode
  children: React.ReactNode
  breadcrumbs?: BreadcrumbItemProps[]
}

export const PageLayout = ({
  title,
  breadcrumbs,
  children
}: PageLayoutProps) => {
  return (
    <>
      <section className="flex flex-col flex-wrap items-center">
        {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
        <h1 className="mt-0.5 text-2xl font-bold tracking-wide">{title}</h1>
      </section>
      <main>{children}</main>
    </>
  )
}
