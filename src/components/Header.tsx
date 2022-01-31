import React from 'react'
import { useRouter } from 'next/router'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import TranslateIcon from '@mui/icons-material/Translate'
import GitHubIcon from '@mui/icons-material/GitHub'

import IconMenu from 'components/IconMenu'

export function Header() {
  const router = useRouter()

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
          items={router.locales}
          selected={router.locale}
          itemsNames={{
            ru: 'Русский',
            en: 'English',
          }}
          onChange={(selected) => {
            router.push(router.pathname, router.pathname, { locale: selected })
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

export default Header
