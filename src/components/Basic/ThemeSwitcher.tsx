import { Button } from '@nextui-org/react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const ThemeSwitcher = () => {
  const [isMounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button onPress={handleTheme} variant="flat" className="z-10" isIconOnly>
      {theme === 'dark' && <Sun className="w-5 h-5" />}
      {theme !== 'dark' && <Moon className="w-5 h-5" />}
    </Button>
  )
}
