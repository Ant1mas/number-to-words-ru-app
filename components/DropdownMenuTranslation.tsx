import { DropdownMenu, DropdownItem } from '@nextui-org/dropdown'

import useI18n from 'lib/hooks/useI18n'

export default function DropdownMenuTranslation() {
  const { locale, changeLocale } = useI18n()

  return (
    <DropdownMenu
      aria-label="Languages list"
      disallowEmptySelection
      selectionMode="single"
      selectedKeys={[locale]}
      onSelectionChange={(selected: any) => {
        selected.forEach((value) => {
          changeLocale(value)
        })
      }}
    >
      <DropdownItem key="ru">Русский</DropdownItem>
      <DropdownItem key="en">English</DropdownItem>
    </DropdownMenu>
  )
}
