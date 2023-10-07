'use client'

import { Select, SelectItem } from '@nextui-org/select'
import { useEffect } from 'react'

import { useTranslation } from '@/lib/config/i18n/client'
import useUsedExamples from '@/lib/hooks/useUsedExamples'

export default function SectionExamples() {
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
    <div className="flex flex-col items-center p-4">
      <h4 className="my-2 flex w-full justify-center text-center text-4xl">
        {t('usage_example_block_title')}
      </h4>
      <div className="w-full ">
        <Select
          label={t('usage_example_select_label')}
          variant="bordered"
          fullWidth
          selectionMode="single"
          selectedKeys={selectedExample ? [selectedExample] : []}
          onChange={(event: any) => {
            applyExample(event.target.value)
          }}
        >
          {examples.map((example) => (
            <SelectItem key={example.value}>{example.label}</SelectItem>
          ))}
        </Select>
      </div>
    </div>
  )
}
