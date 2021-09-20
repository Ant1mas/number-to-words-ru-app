import React from 'react';
import {
  Grid,
  IconButton,
} from '@material-ui/core';
import TranslateIcon from '@material-ui/icons/Translate';
import GitHubIcon from '@material-ui/icons/GitHub';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

// import styles from './Header.module.sass'
import IconMenu from 'components/IconMenu';
import languages from 'locales/i18n/index'

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <Grid
      container
      component="header"
      justifyContent="flex-end"
      style={{paddingTop: '1rem',}}
    >
      <Grid item>
        <IconMenu
          iconEl={(<TranslateIcon/>)}
          items={Object.keys(languages)}
          selected={i18n.language}
          itemsNames={{
            ru: 'Русский',
            en: 'English',
          }}
          onChange={(selected) => {
            i18next.changeLanguage(selected);
          }}
        />
      </Grid>
      <Grid item>
        <a
          href="https://github.com/Ant1mas/number-to-words-ru"
          target='_blank'
          rel='noopener noreferrer'
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

export default Header;
