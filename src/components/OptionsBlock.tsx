import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'next-i18next'

import OptionsContent from 'components/OptionsContent'

export function OptionsBlock() {
  const { t } = useTranslation('common')

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

export default OptionsBlock
