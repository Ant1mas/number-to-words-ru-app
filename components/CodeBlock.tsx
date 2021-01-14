import {
  Grid,
  Typography,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

// import styles from "./CodeBlock.module.sass"
import CodeContent from "components/CodeContent"

const CodeBlock = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Grid container direction="column" alignItems='center' spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h4">
            {t('code_block_title')}
          </Typography>
        </Grid>
        <Grid style={{width: '100%'}}>
          <CodeContent />
        </Grid>
      </Grid>
    </>
  )
}

export default CodeBlock;
