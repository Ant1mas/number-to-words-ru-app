import { FaGithub } from 'react-icons/fa'

import ButtonChangeLanguage from '@/components/ButtonChangeLanguage'
import IconButton from '@/components/IconButton'

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
