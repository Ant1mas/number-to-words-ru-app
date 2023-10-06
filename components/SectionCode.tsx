import { useTranslation } from '@/lib/config/i18n/server'
import CodeContent from '@/components/CodeContent'

export default async function SectionCode() {
  const { t } = await useTranslation()

  return (
    <div className="flex flex-col items-center">
      <h4 className="my-2 flex w-full justify-center text-center text-4xl">
        {t('code_block_title')}
      </h4>
      <div className="w-full">
        <CodeContent />
      </div>
    </div>
  )
}
