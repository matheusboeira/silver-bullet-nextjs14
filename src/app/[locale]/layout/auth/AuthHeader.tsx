'use client'

import { ThemeSwitcher } from '@/app/[locale]/components/Basic/ThemeSwitcher'
import { Logo } from '@/app/[locale]/components/Logo'
import { GlassWater } from 'lucide-react'

export default function AuthHeader() {
  return (
    <header className="flex items-end justify-between mx-6 sm:mx-10 h-full">
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
