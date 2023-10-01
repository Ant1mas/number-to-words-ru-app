import useI18n from 'lib/hooks/useI18n'
import OptionsContent from 'components/OptionsContent'
import LoadingText from 'components/LoadingText'

export default function SectionOptions() {
  const { t } = useI18n()
  return (
    <div className="flex flex-col items-center p-4">
      <h4 className="my-2 flex w-full justify-center text-center text-4xl">
        <LoadingText
          text={t('options_block_title')}
          skeletonWidth={140}
          skeletonHeight={40}
        />
      </h4>
      <div className="w-full">
        <OptionsContent />
      </div>
    </div>
  )
}
