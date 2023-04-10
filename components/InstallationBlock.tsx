import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import useI18n from 'lib/hooks/useI18n'
import CodePreview from 'components/CodePreview'

const CODE_NPM = `npm install number-to-words-ru`
const CODE_YARN = `yarn add number-to-words-ru`
const CODE_PNPM = `pnpm add number-to-words-ru`

export default function InstallationBlock() {
  const { t } = useI18n()

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            {t('installation_block_title')}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography variant="body1">{t('installation_npm_title')}</Typography>
          <CodePreview code={CODE_NPM} language="bash" />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography variant="body1">
            {t('installation_yarn_title')}
          </Typography>
          <CodePreview code={CODE_YARN} language="bash" />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography variant="body1">
            {t('installation_pnpm_title')}
          </Typography>
          <CodePreview code={CODE_PNPM} language="bash" />
        </Grid>
      </Grid>
    </>
  )
}
