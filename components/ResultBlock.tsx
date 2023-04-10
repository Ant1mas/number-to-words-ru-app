import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { convert as convertNumberToWordsRu } from 'number-to-words-ru'
import toast from 'react-hot-toast'

import { useAppSelector } from 'lib/config/redux/store'
import useModuleOptions from 'lib/config/redux/slices/moduleOptions/useModuleOptions'
import { selectModuleNumber } from 'lib/config/redux/slices/moduleNumber/moduleNumberSlice'
import useI18n from 'lib/hooks/useI18n'
import copyToClipboard from 'lib/functions/copyToClipboard'

export default function ResultBlock() {
  const moduleNumber = useAppSelector(selectModuleNumber)
  const { formattedOptions } = useModuleOptions()
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
            toast.success(t('result_block_button_copy_snackbar_text'), {
              duration: 2000,
            })
          }}
        >
          {t('result_block_button_copy')}
        </Button>
      </Grid>
    </Grid>
  )
}
