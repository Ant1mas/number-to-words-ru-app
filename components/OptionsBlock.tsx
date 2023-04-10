import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import useI18n from 'lib/hooks/useI18n'
import OptionsContent from 'components/OptionsContent'

export default function OptionsBlock() {
  const { t } = useI18n()
  return (
    <>
      <Grid container direction="column" alignItems="center" spacing={1}>
        <Grid item>
          <Typography variant="h4">{t('options_block_title')}</Typography>
        </Grid>
        <Grid style={{ width: '100%' }}>
          <OptionsContent />
        </Grid>
      </Grid>
    </>
  )
}
