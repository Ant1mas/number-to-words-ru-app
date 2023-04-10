import React from 'react'

import InputSelect from 'components/InputSelect'
import { useModuleOptions } from 'features/moduleOptions/useModuleOptions'
import useI18n from 'lib/hooks/useI18n'

type Props = {}

export default function DeclensionSelect({}: Props) {
  const { options, updateOptions } = useModuleOptions()
  const { t } = useI18n()

  return (
    <InputSelect
      name="declension"
      label={t('options_declension_label')}
      fullWidth
      value={options.declension}
      onChange={updateOptions}
      items={[
        {
          value: 'nominative',
          name: t('options_declension_select_value_nominative'),
        },
        {
          value: 'genitive',
          name: t('options_declension_select_value_genitive'),
        },
        {
          value: 'dative',
          name: t('options_declension_select_value_dative'),
        },
        {
          value: 'accusative',
          name: t('options_declension_select_value_accusative'),
        },
        {
          value: 'instrumental',
          name: t('options_declension_select_value_instrumental'),
        },
        {
          value: 'prepositional',
          name: t('options_declension_select_value_prepositional'),
        },
      ]}
    />
  )
}
