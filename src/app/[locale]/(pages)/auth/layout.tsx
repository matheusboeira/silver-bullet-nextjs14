import { AuthFooter } from '@/app/[locale]/layout/auth/AuthFooter'
import { AuthHeader } from '@/app/[locale]/layout/auth/AuthHeader'

type LayoutProps = {
  children: React.ReactNode
}

export default function AuthLayout({ children }: LayoutProps) {
  return (
    <div className="container grid grid-rows-[64px_1fr_64px] h-screen">
      <AuthHeader />
      <main className="flex items-center justify-center p-24">{children}</main>
      <AuthFooter />
    </div>
  )
}
