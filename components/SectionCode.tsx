import useI18n from '@/lib/hooks/useI18n'
import LoadingText from '@/components/LoadingText'
import CodeContent from '@/components/CodeContent'

export default function SectionCode() {
  const { t } = useI18n()

  return (
    <div className="flex flex-col items-center">
      <h4 className="my-2 flex w-full justify-center text-center text-4xl">
        <LoadingText
          text={t('code_block_title')}
          skeletonWidth={120}
          skeletonHeight={40}
        />
      </h4>
      <div className="w-full">
        <CodeContent />
      </div>
    </div>
  )
}
