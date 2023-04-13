import useI18n from 'lib/hooks/useI18n'
import LoadingText from 'components/LoadingText'
import CodeContent from 'components/CodeContent'

export default function CodeBlock() {
  const { t } = useI18n()

  return (
    <div className="flex flex-col items-center">
      <h4 className="flex justify-center w-full my-2 text-4xl text-center">
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
