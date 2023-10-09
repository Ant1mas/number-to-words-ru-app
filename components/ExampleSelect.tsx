'use client'

import { useTranslation } from '@/lib/config/i18n/client'
import useUsedExamples from '@/lib/hooks/useUsedExamples'
import { Select, SelectItem } from '@nextui-org/select'
import { useEffect } from 'react'

export default function ExampleSelect() {
  const { selectedExample, applyExample } = useUsedExamples()
  const { t } = useTranslation()

  useEffect(() => {
    applyExample('justNumber')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const examples = [
    {
      value: 'justNumber',
      label: t('usage_example_select_value_just_number'),
    },
    {
      value: 'fractionalNumber',
      label: t('usage_example_select_value_fractional_number'),
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
      label: t('usage_example_select_value_currency_number'),
    },
  ]

  return (
    <div className="w-full ">
      <Select
        label={t('usage_example_select_label')}
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
