'use client'

import useUsedExamples from '@/lib/hooks/useUsedExamples'
import { Select, SelectItem } from '@nextui-org/select'
import { useEffect } from 'react'

import type { Dictionary } from '@/lib/config/i18n/functions/getDictionary'

type Props = {
  dictionary: Dictionary
}

export default function ExampleSelect({ dictionary }: Props) {
  const { selectedExample, applyExample } = useUsedExamples()

  useEffect(() => {
    applyExample('justNumber')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const examples = [
    {
      value: 'justNumber',
      label: dictionary.sectionExamples.examples.justNumber,
    },
    {
      value: 'fractionalNumber',
      label: dictionary.sectionExamples.examples.fractionalNumber,
    },
    {
      value: 'users',
      label: '«Пользователи»',
    },
    {
      value: 'messages',
      label: '«Сообщения»',
    },
    {
      value: 'rubles',
      label: '«Рубли»',
    },
    {
      value: 'currencyNumber',
      label: dictionary.sectionExamples.examples.currencyNumber,
    },
  ]

  return (
    <div className="w-full ">
      <Select
        label={dictionary.sectionExamples.description}
        variant="bordered"
        fullWidth
        selectionMode="single"
        selectedKeys={selectedExample ? [selectedExample] : []}
        onChange={(event: any) => {
          const value = event.target.value
          applyExample(value)
        }}
      >
        {examples.map((example) => (
          <SelectItem key={example.value}>{example.label}</SelectItem>
        ))}
      </Select>
    </div>
  )
}
