import OptionsContent from '@/components/OptionsContent'
import SectionLayout from '@/components/SectionLayout'
import { useTranslation } from '@/lib/config/i18n/server'

export default async function SectionOptions() {
  const { t } = await useTranslation()

  return (
    <SectionLayout title={t('options_block_title')}>
      <div className="w-full">
        <OptionsContent />
      </div>
    </SectionLayout>
  )
}
