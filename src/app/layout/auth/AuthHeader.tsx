import { LanguageSwitcher } from '@/components/Basic/LanguageSwitcher'
import { ThemeSwitcher } from '@/components/Basic/ThemeSwitcher'
import { Logo } from '@/components/Logo'

export const AuthHeader = () => {
  return (
    <header className="flex items-end justify-between mx-6 sm:mx-10 h-full">
      <div className="h-full flex items-end">
        <Logo />
      </div>
      <div className="flex items-center gap-1.5">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  )
}
