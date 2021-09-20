import {
  Grid,
  Typography,
  Link as LinkMaterial,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

// import styles from './Footer.module.sass'

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <Grid container component="footer" style={{paddingBottom: '2rem', textAlign: 'center',}}>
      <Grid item xs={12}>
        <Typography variant="caption" display="block">
          {t('info_module_version_text')} <strong>number-to-words-ru</strong> (2.3.2)
        </Typography>
        <Typography variant="caption" display="block">
          © {new Date().getFullYear()} {t('author_name_anton_moskovskiy')}
        </Typography>
        <Typography variant="caption" display="block">
          {t('made_by_project') + ' '}
          <LinkMaterial href="https://github.com/Ant1mas" target="_blank" rel="noreferrer" variant="caption">{t('author_name_anton_moskovskiy')}</LinkMaterial>
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Footer;
