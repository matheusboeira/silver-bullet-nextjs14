'use client'

type StorageProps = {
  storage?: 'localStorage' | 'sessionStorage'
}

export const useStorage = <T = unknown>({ storage }: StorageProps) => {
  const initial = JSON.parse('{}')
  const _storage = window[storage ?? 'localStorage']

  const get = (key: string) => {
    const value = _storage.getItem(key)
    return JSON.parse(value || initial)
  }

  const set = (key: string, value: T) => {
    const serialized = JSON.stringify(value)
    return _storage.setItem(key, serialized)
  }

  const clear = (keys?: string[]) => {
    if (keys?.length) {
      for (const key of keys) _storage.removeItem(key)
      return
    }

    return _storage.clear()
  }

  return {
    get,
    set,
    clear
  }
}
