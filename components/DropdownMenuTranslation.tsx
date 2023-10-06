'use client'

import { useRouter } from 'next/navigation'
import { DropdownMenu, DropdownItem } from '@nextui-org/dropdown'

import { useTranslation } from '@/lib/config/i18n/client'

export default function DropdownMenuTranslation() {
  const router = useRouter()
  const { i18n } = useTranslation()

  return (
    <DropdownMenu
      aria-label="Languages list"
      disallowEmptySelection
      selectionMode="single"
      selectedKeys={[i18n.resolvedLanguage as string]}
      onSelectionChange={(selected: any) => {
        selected.forEach((language: string) => {
          router.push('/' + language)
        })
      }}
    >
      <DropdownItem key="ru">Русский</DropdownItem>
      <DropdownItem key="en">English</DropdownItem>
    </DropdownMenu>
  )
}
