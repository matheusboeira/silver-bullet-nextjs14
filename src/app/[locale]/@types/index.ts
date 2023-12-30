export type LayoutProps = {
  children: React.ReactNode
  params: {
    locale: string
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