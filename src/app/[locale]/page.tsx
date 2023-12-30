'use client'

import { PageLayout } from '@/app/[locale]/layout/PageLayout'
import { Link } from '@nextui-org/react'
import { ThemeSwitcher } from './components/Basic/ThemeSwitcher'

export default function Home() {
  return (
    <PageLayout title="Home">
      <Link href="/about">About</Link>
      <ThemeSwitcher />
    </PageLayout>
  )
}
