'use client'

import { configs } from '@/app/config'
import axios, { AxiosError } from 'axios'
import { StatusCodes } from 'http-status-codes'

const setup = () => {
  const api = axios.create({
    baseURL: configs.backend.baseUrl ?? 'no-url',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  /**
   * Intercept errors.
   */
  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response?.status === StatusCodes.INTERNAL_SERVER_ERROR) {
        console.error(error.response.data)
      }
      return Promise.reject(error)
    }
  )

  /**
   * Intercept a request to add the token and the language
   * in the request header.
   */
  api.interceptors.request.use((config) => {
    const token = ''
    const lang = 'en-US'

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    config.headers['Accept-Language'] = lang
    return config
  })

  return api
}

export const api = setup()
