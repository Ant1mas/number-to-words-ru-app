'use client'

import { Select, SelectItem } from '@nextui-org/select'
import cloneDeep from 'lodash/cloneDeep'
import set from 'lodash/set'

import { useTranslation } from '@/lib/config/i18n/client'
import useOptions from '@/lib/hooks/useOptions'

export default function DeclensionSelect() {
  const { options, setOptions } = useOptions()
  const { t } = useTranslation()
  const declensions = [
    {
      value: 'nominative',
      label: t('options_declension_select_value_nominative', '...'),
    },
    {
      value: 'genitive',
      label: t('options_declension_select_value_genitive', '...'),
    },
    {
      value: 'dative',
      label: t('options_declension_select_value_dative', '...'),
    },
    {
      value: 'accusative',
      label: t('options_declension_select_value_accusative', '...'),
    },
    {
      value: 'instrumental',
      label: t('options_declension_select_value_instrumental', '...'),
    },
    {
      value: 'prepositional',
      label: t('options_declension_select_value_prepositional', '...'),
    },
  ]

  return (
    <Select
      name="declension"
      label={t('options_declension_label')}
      variant="bordered"
      selectedKeys={[options.declension as string]}
      fullWidth
      disallowEmptySelection={true}
      selectionMode="single"
      onChange={(event) => {
        const value = event.target.value
        setOptions(set(cloneDeep(options), 'declension', value))
      }}
    >
      {declensions.map((declension) => (
        <SelectItem key={declension.value} value={declension.value}>
          {declension.label}
        </SelectItem>
      ))}
    </Select>
  )
}
