import React from 'react'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import TranslateIcon from '@mui/icons-material/Translate'
import GitHubIcon from '@mui/icons-material/GitHub'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import languages from 'locales/i18n/index'
import IconMenu from 'components/IconMenu'

export default function Header() {
  const { i18n } = useTranslation()

  return (
    <Grid
      container
      component="header"
      justifyContent="flex-end"
      style={{ paddingTop: '1rem' }}
    >
      <Grid item>
        <IconMenu
          iconEl={<TranslateIcon />}
          items={Object.keys(languages)}
          selected={i18n.language}
          itemsNames={{
            ru: 'Русский',
            en: 'English',
          }}
          onChange={(selected) => {
            i18next.changeLanguage(selected)
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
            <GitHubIcon />
          </IconButton>
        </a>
      </Grid>
    </Grid>
  )
}
