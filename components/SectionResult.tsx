import ButtonCopyResultText from '@/components/ButtonCopyResultText'
import ModuleResult from '@/components/ModuleResult'
import SectionLayout from '@/components/SectionLayout'
import { useTranslation } from '@/lib/config/i18n/server'

export default async function SectionResult() {
  const { t } = await useTranslation()

  return (
    <SectionLayout title={t('result_block_title')}>
      <ModuleResult />
      <div className="mt-3 flex w-full justify-center">
        <ButtonCopyResultText />
      </div>
    </SectionLayout>
  )
}
