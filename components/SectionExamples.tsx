import ExampleSelect from '@/components/ExampleSelect'
import SectionLayout from '@/components/SectionLayout'
import { useTranslation } from '@/lib/config/i18n/server'

export default async function SectionExamples() {
  const { t } = await useTranslation()

  return (
    <SectionLayout title={t('usage_example_block_title')}>
      <ExampleSelect />
    </SectionLayout>
  )
}
