import React from "react";
import {
  Grid,
  Button,
} from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';

// import styles from "./CodeContent.module.sass"
import { useCodePreview } from 'lib/hooks/useCodePreview'
import CodePreview from 'components/CodePreview'
import codeData from 'lib/functions/codeDataTemplateString';
import copyToClipboard from 'lib/functions/copyToClipboard'

const CodeContent = () => {
  const { code } = useCodePreview();
  const {enqueueSnackbar, closeSnackbar} = useSnackbar();
  const { t, i18n } = useTranslation();

  return (
    <>
      <Grid container direction='column' alignItems='center' spacing={1}>
        <Grid item style={{width:'100%',}}>
          <CodePreview code={code} language='language-javascript' />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={() => {
              copyToClipboard(codeData(code));
              enqueueSnackbar(t('code_block_button_copy_snackbar_text'), {autoHideDuration: 2000});
            }}
          >
            {t('code_block_button_copy')}
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default CodeContent;
