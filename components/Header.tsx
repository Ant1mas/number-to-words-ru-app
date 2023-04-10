import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import { MdTranslate } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'

import IconMenu from 'components/IconMenu'
import useI18n from 'lib/hooks/useI18n'

export default function Header() {
  const { i18n } = useI18n()

  return (
    <Grid
      container
      component="header"
      justifyContent="flex-end"
      style={{ paddingTop: '1rem' }}
    >
      <Grid item>
        <IconMenu
          iconEl={<MdTranslate />}
          items={i18n.languages as string[]}
          selected={i18n.language}
          itemsNames={{
            ru: 'Русский',
            en: 'English',
          }}
          onChange={(selected) => {
            i18n.changeLanguage(selected)
          }}
        />
      </Grid>
      <Grid item>
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
      </Grid>
    </Grid>
  )
}
