import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import useI18n from 'lib/hooks/useI18n'
import CodePreview from 'components/CodePreview'

const codeNpm = `npm install number-to-words-ru`
const codeYarn = `yarn add number-to-words-ru`
const codePnpm = `pnpm add number-to-words-ru`

export function InstallationBlock() {
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
          <CodePreview code={codeNpm} language="bash" />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography variant="body1">
            {t('installation_yarn_title')}
          </Typography>
          <CodePreview code={codeYarn} language="bash" />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography variant="body1">
            {t('installation_pnpm_title')}
          </Typography>
          <CodePreview code={codePnpm} language="bash" />
        </Grid>
      </Grid>
    </>
  )
}

export default InstallationBlock
