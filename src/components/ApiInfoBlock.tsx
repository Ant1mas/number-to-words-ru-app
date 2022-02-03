import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { useTranslation } from 'react-i18next'

export function ApiInfoBlock() {
  const { t } = useTranslation('common', { useSuspense: false })

  return (
    <>
      <Grid container direction="column" alignItems="center" spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h4">API</Typography>
        </Grid>
        <Grid style={{ width: '100%' }}>
          <Typography align="center">
            {`${t('api_block_text')} `}
            <Link
              href="https://github.com/Ant1mas/number-to-words-ru/blob/master/README.md#api"
              target="_blank"
              rel="noreferrer"
              sx={{
                color: '#000000de',
              }}
            >
              {t('api_block_link_text')}
            </Link>
            .
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default ApiInfoBlock
