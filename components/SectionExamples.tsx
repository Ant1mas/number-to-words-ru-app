import { useEffect, useMemo } from 'react'
import { Select, SelectItem } from '@nextui-org/select'

import useI18n from 'lib/hooks/useI18n'
import useUsedExamples from 'lib/hooks/useUsedExamples'
import LoadingText from 'components/LoadingText'

export default function SectionExamples() {
  const { selectedExample, applyExample } = useUsedExamples()
  const { t } = useI18n()

  useEffect(() => {
    applyExample('justNumber')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const examples = useMemo(() => {
    return [
      {
        value: 'justNumber',
        label: t('usage_example_select_value_just_number', '...'),
      },
      {
        value: 'fractionalNumber',
        label: t('usage_example_select_value_fractional_number', '...'),
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
        label: t('usage_example_select_value_currency_number', '...'),
      },
    ]
  }, [])

  return (
    <div className="flex flex-col items-center p-4">
      <h4 className="my-2 flex w-full justify-center text-center text-4xl">
        <LoadingText
          text={t('usage_example_block_title')}
          skeletonWidth={400}
          skeletonHeight={40}
        />
      </h4>
      <div className="w-full ">
        <Select
          items={examples}
          label={t('usage_example_select_label')}
          variant="bordered"
          className="w-full"
          selectedKeys={[selectedExample]}
          onSelectionChange={(selected: any) => {
            selected.forEach((element) => {
              applyExample(element)
            })
          }}
        >
          {(example) => (
            <SelectItem key={example.value}>{example.label}</SelectItem>
          )}
        </Select>
      </div>
    </div>
  )
}
