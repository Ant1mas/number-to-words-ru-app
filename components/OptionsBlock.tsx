import useI18n from 'lib/hooks/useI18n'
import OptionsContent from 'components/OptionsContent'
import LoadingText from 'components/LoadingText'

export default function OptionsBlock() {
  const { t } = useI18n()
  return (
    <div className="flex flex-col items-center p-4">
      <h4 className="flex justify-center w-full my-2 text-4xl text-center">
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
