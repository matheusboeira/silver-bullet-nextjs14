import { AuthFooter } from '@/app/layout/auth/AuthFooter'
import { AuthHeader } from '@/app/layout/auth/AuthHeader'

type AuthLayoutProps = {
  children: React.ReactNode
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="container grid h-screen grid-rows-[64px_1fr_64px]">
      <AuthHeader />
      <main className="flex items-center justify-center p-24">{children}</main>
      <AuthFooter />
    </div>
  )
}
