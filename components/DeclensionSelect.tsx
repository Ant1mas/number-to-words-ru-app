'use client'

import { Select, SelectItem } from '@nextui-org/select'
import cloneDeep from 'lodash/cloneDeep'
import set from 'lodash/set'

import useOptions from '@/lib/hooks/useOptions'

import type { Dictionary } from '@/lib/config/i18n/functions/getDictionary'

type Props = {
  dictionary: Dictionary
}

export default function DeclensionSelect({ dictionary }: Props) {
  const { options, setOptions } = useOptions()
  const declensions = [
    {
      value: 'nominative',
      label: dictionary.sectionOptions.declension.selectValues.nominative,
    },
    {
      value: 'genitive',
      label: dictionary.sectionOptions.declension.selectValues.genitive,
    },
    {
      value: 'dative',
      label: dictionary.sectionOptions.declension.selectValues.dative,
    },
    {
      value: 'accusative',
      label: dictionary.sectionOptions.declension.selectValues.accusative,
    },
    {
      value: 'instrumental',
      label: dictionary.sectionOptions.declension.selectValues.instrumental,
    },
    {
      value: 'prepositional',
      label: dictionary.sectionOptions.declension.selectValues.prepositional,
    },
  ]

  return (
    <Select
      name="declension"
      label={dictionary.sectionOptions.declension.label}
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
