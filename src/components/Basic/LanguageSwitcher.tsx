'use client'

import { Locale, i18nConfig } from '@/i18n'
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  cn
} from '@nextui-org/react'
import { Languages, Loader2 } from 'lucide-react'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { CustomSkeleton } from './CustomSkeleton'

type LanguageProps = {
  code: Locale
  label: string
  link?: string
}

const langs: LanguageProps[] = [
  {
    code: 'en',
    label: 'English',
    link: 'https://flagcdn.com/us.svg'
  },
  {
    code: 'pt',
    label: 'Português',
    link: 'https://flagcdn.com/br.svg'
  }
]

export const LanguageSwitcher = () => {
  const { locale } = useParams()
  const router = useRouter()
  const currentPathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  const changeLanguage = (language: Locale) => {
    const isDefaultLocale = !locale || locale === i18nConfig.defaultLocale
    const pathname = isDefaultLocale
      ? `/${language}${currentPathname}`
      : currentPathname.replace(`/${locale}`, `/${language}`)

    router.push(pathname)
    window.localStorage.setItem('lang', language)
  }

  useEffect(() => {
    const current = locale ? (locale as Locale) : i18nConfig.defaultLocale
    window.localStorage.setItem('lang', current)
  }, [locale])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <CustomSkeleton />
  }

  return (
    <Dropdown placement="bottom-end" aria-label="select language">
      <DropdownTrigger>
        <Button variant="flat" isIconOnly>
          <Languages size={20} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="select language">
        {langs.map((lang) => (
          <DropdownItem
            key={lang.code}
            textValue={lang.label}
            startContent={
              <Avatar
                fallback={<Loader2 className="animate-spin" />}
                className="w-5 h-5"
                src={lang.link}
              />
            }
            onPress={() => changeLanguage(lang.code)}
            className={cn({ 'text-primary': lang.code === locale })}
          >
            {lang.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}
