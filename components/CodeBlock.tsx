import CodeContent from 'components/CodeContent'
import useI18n from 'lib/hooks/useI18n'

export default function CodeBlock() {
  const { t } = useI18n()

  return (
    <div className="flex flex-col items-center">
      <h4 className="my-2 w-full text-center text-4xl">
        {t('code_block_title')}
      </h4>
      <div className="w-full">
        <CodeContent />
      </div>
    </div>
  )
}
