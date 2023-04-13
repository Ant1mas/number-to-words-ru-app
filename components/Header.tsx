import { MdTranslate } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'

import useI18n from 'lib/hooks/useI18n'
import MenuButton from 'components/MenuButton'
import IconButton from 'components/IconButton'

export default function Header() {
  const { locales, locale, changeLocale } = useI18n()

  return (
    <header className="flex justify-end pt-4">
      <div>
        <MenuButton
          items={[...locales].sort()}
          itemsNames={{
            ru: 'Русский',
            en: 'English',
          }}
          selected={locale}
          onChange={(selected) => {
            changeLocale(selected)
          }}
        >
          <IconButton>
            <MdTranslate />
          </IconButton>
        </MenuButton>
      </div>
      <div>
        <a
          href="https://github.com/Ant1mas/number-to-words-ru"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <IconButton>
            <FaGithub />
          </IconButton>
        </a>
      </div>
    </header>
  )
}
