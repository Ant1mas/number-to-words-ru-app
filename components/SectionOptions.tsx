import OptionsContent from '@/components/OptionsContent'
import { useTranslation } from '@/lib/config/i18n/server'

export default async function SectionOptions() {
  const { t } = await useTranslation()

  return (
    <div className="flex flex-col items-center p-4">
      <h4 className="my-2 flex w-full justify-center text-center text-4xl">
        {t('options_block_title')}
      </h4>
      <div className="w-full">
        <OptionsContent />
      </div>
    </div>
  )
}
