'use client'

import { Select, SelectItem } from '@nextui-org/select'

import useModuleOptions from '@/lib/config/redux/slices/moduleOptions/useModuleOptions'
import { useTranslation } from '@/lib/config/i18n/client'

export default function DeclensionSelect() {
  const { options, updateOptions } = useModuleOptions()
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
      onSelectionChange={(selected: any) => {
        selected.forEach((element: string) => {
          updateOptions({
            target: { name: 'declension', value: element, type: 'text' },
          })
        })
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
