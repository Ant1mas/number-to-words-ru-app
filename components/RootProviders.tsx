'use client'

import { NextUIProvider } from '@nextui-org/react'
import { Provider as JotaiProvider } from 'jotai'

type Props = {
  children: React.ReactElement | React.ReactElement[]
}

export default function RootProviders({ children }: Props) {
  return (
    <JotaiProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </JotaiProvider>
  )
}
