import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import toast from 'react-hot-toast'

import useCodePreview from 'lib/hooks/useCodePreview'
import useI18n from 'lib/hooks/useI18n'
import codeData from 'lib/functions/codeDataTemplateString'
import copyToClipboard from 'lib/functions/copyToClipboard'
import CodePreview from 'components/CodePreview'

export default function CodeContent() {
  const { code } = useCodePreview()
  const { t } = useI18n()

  return (
    <>
      <Grid container direction="column" alignItems="center" spacing={1}>
        <Grid item sx={{ width: '100%', maxWidth: '100%' }}>
          <CodePreview code={code} language="javascript" />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="inherit"
            onClick={() => {
              copyToClipboard(codeData(code))
              toast.success(t('code_block_button_copy_snackbar_text'), {
                duration: 2000,
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
