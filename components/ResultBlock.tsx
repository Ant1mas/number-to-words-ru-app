import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { convert as convertNumberToWordsRu } from 'number-to-words-ru'
import { useSnackbar } from 'notistack'

import { useAppSelector } from '@/app/store'
import useModuleOptions from 'features/moduleOptions/useModuleOptions'
import { selectModuleNumber } from 'features/moduleNumber/moduleNumberSlice'
import useI18n from 'lib/hooks/useI18n'
import copyToClipboard from 'lib/functions/copyToClipboard'

export function ResultBlock() {
  const moduleNumber = useAppSelector(selectModuleNumber)
  const { formattedOptions } = useModuleOptions()
  const { enqueueSnackbar } = useSnackbar()
  const { t } = useI18n()
  const resultText = convertNumberToWordsRu(
    moduleNumber !== '' && moduleNumber !== '-' ? moduleNumber : '0',
    formattedOptions,
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

export default ResultBlock
