'use client'

import { Form } from '@/components/Form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'

const schema = z.object({
  lmao: z.string().min(10)
})

export const SignInForm = () => {
  const { t } = useTranslation()
  const [name, setName] = useState('')

  const form = useForm({
    mode: 'all',
    resolver: zodResolver(schema)
  })

  return (
    <Form.Root {...form}>
      <form>
        <Controller
          name="lmao"
          control={form.control}
          render={() => (
            <Form.Input
              label={'Teste'}
              placeholder={'Digite...'}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
        />
      </form>
    </Form.Root>
  )
}
