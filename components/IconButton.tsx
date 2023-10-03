import React from 'react'
import { Button } from '@nextui-org/button'

type Props = {
  children: React.ReactElement
  [x: string]: any
}

export default function IconButton({ children, ...otherProps }: Props) {
  return (
    <Button
      {...otherProps}
      variant="light"
      radius="full"
      className="min-w-6 relative h-12 w-12 p-0 text-2xl text-black/50"
    >
      {children}
    </Button>
  )
}
