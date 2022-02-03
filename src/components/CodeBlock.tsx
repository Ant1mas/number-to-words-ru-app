import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'

import CodeContent from 'components/CodeContent'

export function CodeBlock() {
  const { t } = useTranslation('translation', { useSuspense: false })

  return (
    <>
      <Grid container direction="column" alignItems="center" spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h4">{t('code_block_title')}</Typography>
        </Grid>
        <Grid style={{ width: '100%' }}>
          <CodeContent />
        </Grid>
      </Grid>
    </>
  )
}

export default CodeBlock
