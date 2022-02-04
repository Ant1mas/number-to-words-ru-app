import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import LaunchIcon from '@mui/icons-material/Launch'
import { useTranslation } from 'react-i18next'

export function LinksBlock() {
  const { t } = useTranslation('translation', { useSuspense: false })

  return (
    <>
      <Grid container direction="column" alignItems="center" spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h4">{`${t('links_block_title')} `}</Typography>
        </Grid>
        <Grid style={{ width: '100%' }}>
          <Typography align="center">
            <Link
              href="https://github.com/Ant1mas/number-to-words-ru/blob/master/README.md#api"
              target="_blank"
              rel="noreferrer"
              sx={{
                color: '#000000de',
                display: 'inline-flex',
                alignItems: 'center'
              }}
            >
              <LaunchIcon fontSize="small" />
              {`${t('links_block_link_api')} `}
            </Link>
          </Typography>
        </Grid>
        <Grid style={{ width: '100%' }}>
          <Typography align="center">
            <Link
              href="https://codesandbox.io/s/t0dbl?file=/index.js:51-63"
              target="_blank"
              rel="noreferrer"
              sx={{
                color: '#000000de',
                display: 'inline-flex',
                alignItems: 'center'
              }}
            >
              <LaunchIcon fontSize="small" />
              {`${t('links_block_link_example_codesandbox')} `}
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default LinksBlock
