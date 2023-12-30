'use client'

import { useMutate } from '@/hooks/useMutate'
import { PageLayout } from '@/layout/PageLayout'
import { api } from '@/services/axios-api'
import { Link } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import { ThemeSwitcher } from '../components/Basic/ThemeSwitcher'

export default function Home() {
  const { promise } = useMutate()

  const { data } = useQuery({
    queryKey: ['workspace'],
    queryFn: async () => {
      return promise(api.get('/workspaces'))
    }
  })

  return (
    <PageLayout title="Home">
      <Link href="/about">About</Link>
      <ThemeSwitcher />
    </PageLayout>
  )
}
