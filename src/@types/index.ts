import { Locale } from '@/i18n'

export type LayoutProps = {
  params: {
    locale: Locale
  }
}

export type HttpResponse = {
  type: 'info' | 'success' | 'error' | 'warn'
  message: string
}

export type HttpResponseError = {
  response: {
    status: number
    data: {
      type: 'info' | 'success' | 'error' | 'warn'
      message: string
    }
  }
}
