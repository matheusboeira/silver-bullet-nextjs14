import { ThemeSwitcher } from '@/components/Basic/ThemeSwitcher'
import { Logo } from '@/components/Logo'
import { Button } from '@nextui-org/react'
import { Languages } from 'lucide-react'

export const AuthHeader = () => {
  return (
    <header className="flex items-end justify-between mx-6 sm:mx-10 h-full">
      <div className="h-full flex items-end">
        <Logo />
      </div>
      <div className="flex items-center gap-1">
        <Button variant="flat" isIconOnly>
          <Languages className="w-5 h-5" />
        </Button>
        <ThemeSwitcher />
      </div>
    </header>
  )
}
