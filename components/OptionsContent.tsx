import Grid from '@mui/material/Grid'
import Hidden from '@mui/material/Hidden'
import TextField from '@mui/material/TextField'

import { useModuleOptions } from 'lib/config/redux/slices/moduleOptions/useModuleOptions'
import useI18n from 'lib/hooks/useI18n'
import CurrencyObjectOptions from 'components/CurrencyObjectOptions'
import DeclensionSelect from 'components/DeclensionSelect'
import CurrencySelect from 'components/CurrencySelect'
import OptionsSwitchesBlock from 'components/OptionsSwitchesBlock'
import inputRoundNumberHelperText from 'lib/functions/inputRoundNumberHelperText'

export default function OptionsContent() {
  const { options, updateOptions } = useModuleOptions()
  const { t } = useI18n()

  return (
    <>
      <Grid container direction="column" spacing={1}>
        <Grid item xs={12} md={6}>
          <CurrencySelect />
        </Grid>
        <Hidden xsUp={options.currency !== 'custom'}>
          <Grid item>
            <CurrencyObjectOptions />
          </Grid>
        </Hidden>
        <Grid item xs={12} md={6}>
          <DeclensionSelect />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="round-number"
            label={t('options_round_number')}
            variant="standard"
            fullWidth
            placeholder="2"
            type="number"
            inputProps={{
              min: -1,
            }}
            helperText={inputRoundNumberHelperText(options, t)}
            value={options.roundNumber}
            onChange={updateOptions}
          />
        </Grid>
        <OptionsSwitchesBlock />
      </Grid>
    </>
  )
}
