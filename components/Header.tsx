import { FaGithub } from 'react-icons/fa'

import IconButton from '@/components/IconButton'
import ButtonChangeLanguage from '@/components/ButtonChangeLanguage'

export default function Header() {
  return (
    <header className="flex justify-end gap-1 pt-4">
      <div>
        <ButtonChangeLanguage />
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
