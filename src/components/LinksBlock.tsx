import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import LaunchIcon from '@mui/icons-material/Launch'

import useI18n from 'lib/hooks/useI18n'

export function LinksBlock() {
  const { t } = useI18n()
  return (
    <>
      <Grid container direction="column" alignItems="center" spacing={1}>
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Typography variant="h4">{t('links_block_title')}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center">
            <Link
              href="https://github.com/Ant1mas/number-to-words-ru/blob/master/README.md#api"
              target="_blank"
              rel="noreferrer"
              sx={{
                color: '#000000de',
              }}
            >
              <LaunchIcon fontSize="small" sx={{ verticalAlign: 'text-top' }} />
              {t('links_block_link_api')}
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center">
            <Link
              href="https://codesandbox.io/s/t0dbl?file=/index.js:51-63"
              target="_blank"
              rel="noreferrer"
              sx={{
                color: '#000000de',
              }}
            >
              <LaunchIcon fontSize="small" sx={{ verticalAlign: 'text-top' }} />
              {t('links_block_link_example_codesandbox')}
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default LinksBlock
