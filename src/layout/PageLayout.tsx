type PageLayoutProps = {
  title?: string
  breadcrumb?: string
  children: React.ReactNode
}

export const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <main>
      <h1>{title}</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
        assumenda, quia ut fugiat ipsa cupiditate laudantium modi minus libero
        totam voluptatibus vero necessitatibus suscipit debitis, aperiam cumque
        asperiores omnis doloremque?
      </p>
      <section>{children}</section>
    </main>
  )
}
