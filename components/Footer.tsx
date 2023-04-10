import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import useI18n from 'lib/hooks/useI18n'
import LogoAnt1mas from 'public/images/svg/logo-ant1mas.svg'

export default function Footer() {
  const { t } = useI18n()

  return (
    <Grid
      container
      component="footer"
      style={{ textAlign: 'center' }}
      className="my-8"
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
          (v2.3.4)
        </Typography>
        <div className="mt-2 w-full font-sans">{t('made_by_project')}</div>
        <div className="my-1 flex w-full justify-center">
          <a href="https://github.com/Ant1mas" target="_blank" rel="noreferrer">
            <LogoAnt1mas className="h-16 cursor-pointer fill-black opacity-70 duration-150 hover:opacity-100 focus:opacity-100" />
          </a>
        </div>
      </Grid>
    </Grid>
  )
}
