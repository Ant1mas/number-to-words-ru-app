import {
  Grid,
  Typography,
} from '@material-ui/core'
import { useTranslation } from 'react-i18next';

// import styles from "./ModuleTitle.module.sass"
import LogoSvg from "public/images/svg/logo.svg"

const ModuleTitle = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item>
          <LogoSvg style={{width: 100}} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2" align='center'>
          number-to-words-ru
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" align='center'>
          {t('main_module_description')}
        </Typography>
      </Grid>
    </>
  )
}

export default ModuleTitle;
