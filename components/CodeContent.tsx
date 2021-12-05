import React from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { useSnackbar } from 'notistack'
import { useTranslation } from 'react-i18next'
import { useCodePreview } from 'lib/hooks/useCodePreview'
import codeData from 'lib/functions/codeDataTemplateString'
import copyToClipboard from 'lib/functions/copyToClipboard'
import CodePreview from 'components/CodePreview'

export default function CodeContent() {
  const { code } = useCodePreview()
  const { enqueueSnackbar } = useSnackbar()
  const { t } = useTranslation()

  return (
    <>
      <Grid container direction="column" alignItems="center" spacing={1}>
        <Grid item style={{ width: '100%' }}>
          <CodePreview code={code} language="language-javascript" />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="inherit"
            onClick={() => {
              copyToClipboard(codeData(code))
              enqueueSnackbar(t('code_block_button_copy_snackbar_text'), {
                autoHideDuration: 2000,
              })
            }}
          >
            {t('code_block_button_copy')}
          </Button>
        </Grid>
      </Grid>
    </>
  )
}
