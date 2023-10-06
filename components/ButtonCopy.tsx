'use client'

type Props = {
  text: string
  contentToCopy: string
  toastSuccess?: string
}

import toast from 'react-hot-toast'
import { Button } from '@nextui-org/button'

import copyToClipboard from '@/lib/functions/copyToClipboard'

export default function ButtonCopy({
  text,
  contentToCopy,
  toastSuccess = '',
}: Props) {
  return (
    <Button
      variant="ghost"
      className="font-bold uppercase"
      onClick={() => {
        copyToClipboard(contentToCopy)
        toast.success(toastSuccess, {
          duration: 2000,
        })
      }}
    >
      {text}
    </Button>
  )
}
