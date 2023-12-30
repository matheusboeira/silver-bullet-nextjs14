import { AuthFooter } from '@/layout/auth/AuthFooter'
import { AuthHeader } from '@/layout/auth/AuthHeader'

type LayoutProps = {
  children: React.ReactNode
}

export default function AuthLayout({ children }: LayoutProps) {
  return (
    <div className="grid grid-rows-[64px_1fr_64px] h-screen">
      <AuthHeader />
      <main className="flex items-center justify-center p-1">{children}</main>
      <AuthFooter />
    </div>
  )
}
