import { useEffect } from 'react'

import useI18n from 'lib/hooks/useI18n'
import useUsedExamples from 'lib/hooks/useUsedExamples'
import InputSelect from 'components/InputSelect'
import LoadingText from 'components/LoadingText'

export default function SectionExamples() {
  const { selectedExample, applyExample } = useUsedExamples()
  const { t } = useI18n()

  useEffect(() => {
    applyExample('justNumber')
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <InputSelect
          name="usageExamples"
          label={t('usage_example_select_label')}
          value={selectedExample}
          canHaveEmptyValue
          onChange={(e) => {
            applyExample(e.target.value)
          }}
          items={[
            {
              value: 'justNumber',
              name: t('usage_example_select_value_just_number', '...'),
            },
            {
              value: 'fractionalNumber',
              name: t('usage_example_select_value_fractional_number', '...'),
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
              name: t('usage_example_select_value_currency_number', '...'),
            },
          ]}
        />
      </div>
    </div>
  )
}
