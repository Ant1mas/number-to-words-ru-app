'use client'

import { CopyToClipboard } from 'react-copy-to-clipboard'

type Props = {
  text: string
  contentToCopy: string
  toastSuccess?: string
}

import { Button } from '@nextui-org/button'
import toast from 'react-hot-toast'

export default function ButtonCopy({
  text,
  contentToCopy,
  toastSuccess = '',
}: Props) {
  return (
    // @ts-ignore
    <CopyToClipboard
      text={contentToCopy}
      onCopy={() => {
        toast.success(toastSuccess, {
          duration: 2000,
        })
      }}
    >
      <Button variant="ghost" className="font-bold uppercase">
        {text}
      </Button>
    </CopyToClipboard>
  )
}
