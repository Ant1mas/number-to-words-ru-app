import React from "react";
import {
  Typography,
  Grid,
  Button,
} from '@material-ui/core';
import numberToWordsRu from 'number-to-words-ru'; 
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';

// import styles from "./ResultBlock.module.sass"
import { ModuleParamsContext } from 'lib/context/moduleParamsContext'
import copyToClipboard from 'lib/functions/copyToClipboard'

const ResultBlock = () => {
  const { number, optionsForModule } = React.useContext(ModuleParamsContext);
  const {enqueueSnackbar, closeSnackbar} = useSnackbar();
  const { t, i18n } = useTranslation();
  const resultText = numberToWordsRu.convert(
    (number !== '' && number !== '-') ? number : '0',
    optionsForModule
  );

  return (
    <Grid container direction="column" alignItems="center" spacing={1}>
      <Grid item xs={12}>
        <Typography variant="h4">
          {t('result_block_title')}
        </Typography>
      </Grid>
      <Grid
        item xs={12}
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
        <Button variant="contained" onClick={() => {
          copyToClipboard(resultText);
          enqueueSnackbar(t('result_block_button_copy_snackbar_text'), {autoHideDuration: 2000});
        }}>
          {t('result_block_button_copy')}
        </Button>
      </Grid>
    </Grid>
  )
}

export default ResultBlock;
