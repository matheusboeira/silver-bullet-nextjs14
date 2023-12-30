'use client'

import { Button } from '@nextui-org/react'
import { useState } from 'react'

export default function Page() {
  const [count, setCount] = useState(0)

  return (
    <Button onClick={() => setCount((previous) => previous + 1)}>
      Contagem: {count}
    </Button>
  )
}
