import {
  Grid,
  Typography,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

// import styles from "./InstallationBlock.module.sass"
import CodePreview from 'components/CodePreview'

const codeNpm=`npm install number-to-words-ru`;
const codeYarn=`yarn add number-to-words-ru`;

const InstallationBlock = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" align='center'>
            {t('installation_block_title')}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            {t('installation_npm_title')}
          </Typography>
          <CodePreview code={codeNpm} language='bash' />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            {t('installation_yarn_title')}
          </Typography>
          <CodePreview code={codeYarn} language='bash' />
        </Grid>
      </Grid>
    </>
  )
}

export default InstallationBlock;
