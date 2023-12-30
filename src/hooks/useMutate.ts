'use client'

import { api } from '@/services/axios-api'
import { useCallback } from 'react'
import { toast } from 'sonner'

export type MutationMethods = 'get' | 'post' | 'put' | 'delete'

type MutateProps<T> = {
  url: string
  data?: T
  method?: MutationMethods
}

type AxiosProps = {
  data: {
    message: string
  }
}

export const useMutate = () => {
  const mutate = useCallback(
    async <T>({ url, data, method }: MutateProps<T>): Promise<T> => {
      const _method = method ?? 'get'

      const _api = data
        ? api[_method](url, data).then((res) => res.data)
        : api[_method](url).then((res) => res.data)

      return new Promise((resolve, reject) =>
        toast.promise(_api, {
          loading: 'Loading...',
          success: (data) => {
            resolve(data)
            return data.message
          },
          error: (err) => {
            reject()
            return err.response?.data.message ?? err.message
          }
        })
      )
    },
    []
  )

  const promise = useCallback(
    <T extends AxiosProps>(api: Promise<T>): Promise<unknown> => {
      return new Promise((resolve, reject) =>
        toast.promise(
          api.then((res) => res.data),
          {
            important: true,
            loading: 'Loading...',
            success: (data) => {
              resolve(data)
              return data?.message ?? 'Success'
            },
            error: (err) => {
              reject()
              return err.response?.data?.message ?? err.message
            }
          }
        )
      )
    },
    []
  )

  return { mutate, promise }
}
