import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import numberToWordsRu from 'number-to-words-ru'
import { useSnackbar } from 'notistack'
import { useTranslation } from 'react-i18next'
import { ModuleParamsContext } from 'lib/context/moduleParamsContext'
import copyToClipboard from 'lib/functions/copyToClipboard'

export default function ResultBlock() {
  const { number, optionsForModule } = React.useContext(ModuleParamsContext)
  const { enqueueSnackbar } = useSnackbar()
  const { t } = useTranslation()
  const resultText = numberToWordsRu.convert(
    number !== '' && number !== '-' ? number : '0',
    optionsForModule
  )

  return (
    <Grid container direction="column" alignItems="center" spacing={1}>
      <Grid item xs={12}>
        <Typography variant="h4">{t('result_block_title')}</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          width: '100%',
          textAlign: 'center',
          borderRadius: 4,
        }}
      >
        <Typography
          id="result-text"
          style={{
            padding: '1rem',
            backgroundColor: '#efecf4',
            overflowX: 'hidden',
          }}
        >
          {resultText}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="inherit"
          onClick={() => {
            copyToClipboard(resultText)
            enqueueSnackbar(t('result_block_button_copy_snackbar_text'), {
              autoHideDuration: 2000,
            })
          }}
        >
          {t('result_block_button_copy')}
        </Button>
      </Grid>
    </Grid>
  )
}
