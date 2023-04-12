import { MdTranslate } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'

import MenuButton from 'components/MenuButton'
import IconButton from 'components/IconButton'
import useI18n from 'lib/hooks/useI18n'

export default function Header() {
  const { i18n } = useI18n()
  const languages = i18n.languages || []

  return (
    <header className="flex justify-end pt-4">
      <div>
        <MenuButton
          items={[...languages].sort()}
          itemsNames={{
            ru: 'Русский',
            en: 'English',
          }}
          selected={i18n.language}
          onChange={(selected) => {
            i18n.changeLanguage(selected)
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
