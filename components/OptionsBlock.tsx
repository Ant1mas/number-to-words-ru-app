import {
  Grid,
  Typography,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

// import styles from "./OptionsBlock.module.sass"
import OptionsContent from "components/OptionsContent"

const OptionsBlock = ( props ) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Grid container direction="column" alignItems="center" spacing={1}>
        <Grid item>
          <Typography variant="h4">
            {t('options_block_title')}
          </Typography>
        </Grid>
        <Grid style={{width: '100%'}}>
          <OptionsContent />
        </Grid>
      </Grid>
    </>
  )
}

export default OptionsBlock;
