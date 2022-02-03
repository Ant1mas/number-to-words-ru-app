import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation('translation', { useSuspense: false })

  return (
    <Grid
      container
      component="footer"
      style={{ paddingBottom: '2rem', textAlign: 'center' }}
    >
      <Grid item xs={12}>
        <Typography variant="caption" display="block">
          {t('info_module_version_text')} <strong>number-to-words-ru</strong>{' '}
          (2.3.3)
        </Typography>
        <Typography variant="caption" display="block">
          © {new Date().getFullYear()} {t('author_name_anton_moskovskiy')}
        </Typography>
        <Typography variant="caption" display="block">
          {t('made_by_project') + ' '}
          <Link
            href="https://github.com/Ant1mas"
            target="_blank"
            rel="noreferrer"
            underline="always"
            variant="caption"
          >
            {t('author_name_anton_moskovskiy')}
          </Link>
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Footer
