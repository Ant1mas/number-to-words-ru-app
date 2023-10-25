'use client'

import { DropdownItem, DropdownMenu } from '@nextui-org/dropdown'

import useLanguage from '@/lib/config/i18n/hooks/useLanguage'

export default function DropdownMenuTranslation() {
  const { getLanguage, updateLanguage } = useLanguage()

  return (
    <DropdownMenu
      aria-label="Languages list"
      disallowEmptySelection
      selectionMode="single"
      selectedKeys={[getLanguage()]}
      onAction={(key: any) => {
        updateLanguage(key)
      }}
    >
      <DropdownItem key="ru">Русский</DropdownItem>
      <DropdownItem key="en">English</DropdownItem>
    </DropdownMenu>
  )
}
