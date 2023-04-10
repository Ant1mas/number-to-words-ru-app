import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import LogoSvg from 'public/images/svg/logo.svg'
import useI18n from 'lib/hooks/useI18n'

export function ModuleTitle() {
  const { t } = useI18n()

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
