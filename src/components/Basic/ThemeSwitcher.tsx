'use client'

import { Button, Skeleton } from '@nextui-org/react'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export const ThemeSwitcher = () => {
  const [isMounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!isMounted) {
    return <Skeleton className="h-[2.5rem] w-[2.5rem] rounded-lg" />
  }

  const handleTheme = () => {
    window.localStorage.setItem('test', theme === 'dark' ? 'light' : 'dark')
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button onPress={handleTheme} variant="flat" className="z-10" isIconOnly>
      {theme === 'dark' && <Sun className="h-5 w-5" />}
      {theme !== 'dark' && <Moon className="h-5 w-5" />}
    </Button>
  )
}
