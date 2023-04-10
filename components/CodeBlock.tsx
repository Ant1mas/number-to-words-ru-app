import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import CodeContent from 'components/CodeContent'
import useI18n from 'lib/hooks/useI18n'

export default function CodeBlock() {
  const { t } = useI18n()

  return (
    <>
      <Grid container direction="column" alignItems="center" spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h4">{t('code_block_title')}</Typography>
        </Grid>
        <Grid sx={{ width: '100%' }}>
          <CodeContent />
        </Grid>
      </Grid>
    </>
  )
}
