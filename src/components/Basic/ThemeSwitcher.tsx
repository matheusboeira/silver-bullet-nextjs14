'use client'

import { Button } from '@nextui-org/react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useCallback, useEffect, useState } from 'react'
import { CustomSkeleton } from './CustomSkeleton'

export const ThemeSwitcher = () => {
  const [isMounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!isMounted) {
    return <CustomSkeleton />
  }

  const handleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  return (
    <Button onPress={handleTheme} variant="flat" className="z-10" isIconOnly>
      {theme === 'dark' && <Sun className="h-5 w-5" />}
      {theme !== 'dark' && <Moon className="h-5 w-5" />}
    </Button>
  )
}
