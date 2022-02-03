import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'

import LogoSvg from 'public/images/svg/logo.svg'

export function ModuleTitle() {
  const { t } = useTranslation('common', { useSuspense: false })

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item>
          <LogoSvg style={{ width: 100 }} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2" align="center">
          number-to-words-ru
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" align="center">
          {t('main_module_description')}
        </Typography>
      </Grid>
    </>
  )
}

export default ModuleTitle