import { ThemeSwitcher } from '@/app/[locale]/components/Basic/ThemeSwitcher'
import { Logo } from '@/app/[locale]/components/Logo'
import { Button } from '@nextui-org/react'
import { GiLaserGun } from 'react-icons/gi'

export const AuthHeader = () => {
  return (
    <header className="flex items-end justify-between mx-6 sm:mx-10 h-full">
      <div className="h-full flex items-end">
        <Logo />
      </div>
      <div className="flex items-center gap-1">
        <Button isIconOnly>
          <GiLaserGun />
        </Button>
        <ThemeSwitcher />
      </div>
    </header>
  )
}
