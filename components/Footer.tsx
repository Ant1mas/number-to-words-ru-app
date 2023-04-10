import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

import useI18n from 'lib/hooks/useI18n'

export default function Footer() {
  const { t } = useI18n()

  return (
    <Grid
      container
      component="footer"
      style={{ paddingBottom: '2rem', textAlign: 'center' }}
    >
      <Grid item xs={12}>
        <Typography variant="caption" display="block">
          {t('info_module_version_text')}{' '}
          <a
            href="https://www.npmjs.com/package/number-to-words-ru"
            target="_blank"
            rel="noreferrer"
          >
            <strong>number-to-words-ru</strong>
          </a>{' '}
          (2.3.4)
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
