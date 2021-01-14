import {
  Grid,
  Typography,
  Link as LinkMaterial,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

// import styles from "./ApiInfoBlock.module.sass"

const ApiInfoBlock = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <>
      <Grid container direction="column" alignItems='center' spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h4">
            API
          </Typography>
        </Grid>
        <Grid style={{width: '100%'}}>
          <Typography align='center'>
            {`${t('api_block_text')} `}
            <a
              href="https://github.com/Ant1mas/number-to-words-ru/blob/master/README.md#api"
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#000000de',
              }}
            >
              {t('api_block_link_text')}
            </a>
            .
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default ApiInfoBlock;
