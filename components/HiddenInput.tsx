'use client'

import { Input } from '@nextui-org/input'

// This component used for fix type error with nextui dropdown
export default function HiddenInput() {
  return <Input disabled className="hidden" />
}
