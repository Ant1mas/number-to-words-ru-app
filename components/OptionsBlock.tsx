import useI18n from 'lib/hooks/useI18n'
import OptionsContent from 'components/OptionsContent'

export default function OptionsBlock() {
  const { t } = useI18n()
  return (
    <div className="flex flex-col items-center p-4">
      <h4 className="my-2 w-full text-center text-4xl">
        {t('options_block_title')}
      </h4>
      <div className="w-full">
        <OptionsContent />
      </div>
    </div>
  )
}
