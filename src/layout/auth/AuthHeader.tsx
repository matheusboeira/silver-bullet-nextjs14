'use client'

import { ThemeSwitcher } from '@/components/Basic/ThemeSwitcher'
import { Logo } from '@/components/Logo'
import { GlassWater } from 'lucide-react'

export const AuthHeader = () => {
  return (
    <header className="flex items-end justify-between mx-6 sm:mx-10 h-16">
      <div className="h-full flex items-end">
        <Logo />
      </div>
      <div className="flex items-center gap-1">
        <GlassWater />
        <ThemeSwitcher />
      </div>
    </header>
  )
}
