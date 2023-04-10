import { useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import useI18n from 'lib/hooks/useI18n'
import useUsedExamples from 'lib/hooks/useUsedExamples'
import InputSelect from 'components/InputSelect'

export default function ExamplesBlock() {
  const { selectedExample, applyExample } = useUsedExamples()
  const { t } = useI18n()

  useEffect(() => {
    applyExample('justNumber')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        spacing={1}
        sx={{ marginBottom: '20px' }}
      >
        <Grid item>
          <Typography align="center" variant="h4">
            {t('usage_example_block_title')}
          </Typography>
        </Grid>
        <Grid style={{ width: '100%' }}>
          <InputSelect
            name="usageExamples"
            label={t('usage_example_select_label')}
            fullWidth
            value={selectedExample}
            onChange={(e) => {
              applyExample(e.target.value)
            }}
            items={[
              {
                value: 'justNumber',
                name: t('usage_example_select_value_just_number'),
              },
              {
                value: 'fractionalNumber',
                name: t('usage_example_select_value_fractional_number'),
              },
              {
                value: 'users',
                name: '«Пользователи»',
              },
              {
                value: 'messages',
                name: '«Сообщения»',
              },
              {
                value: 'rubles',
                name: '«Рубли»',
              },
              {
                value: 'currencyNumber',
                name: t('usage_example_select_value_currency_number'),
              },
            ]}
          />
        </Grid>
      </Grid>
    </>
  )
}
