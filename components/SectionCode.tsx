import CodeContent from '@/components/CodeContent'
import SectionLayout from '@/components/SectionLayout'
import { useTranslation } from '@/lib/config/i18n/server'

export default async function SectionCode() {
  const { t } = await useTranslation()

  return (
    <SectionLayout title={t('code_block_title')}>
      <div className="w-full">
        <CodeContent />
      </div>
    </SectionLayout>
  )
}
