import { Button } from '@nextui-org/button'
import { Dropdown, DropdownTrigger } from '@nextui-org/dropdown'
import { MdTranslate } from 'react-icons/md'

import DropdownMenuTranslation from '@/components/DropdownMenuTranslation'
import HiddenInput from '@/components/HiddenInput'

export default function ButtonChangeLanguage() {
  return (
    <>
      <HiddenInput />
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="light"
            radius="full"
            className="min-w-6 relative h-12 w-12 p-0 text-2xl text-black/50"
          >
            <MdTranslate />
          </Button>
        </DropdownTrigger>
        <DropdownMenuTranslation />
      </Dropdown>
    </>
  )
}
