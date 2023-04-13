import LogoSvg from 'public/images/svg/logo.svg'
import useI18n from 'lib/hooks/useI18n'
import LoadingText from 'components/LoadingText'

export default function ModuleTitle() {
  const { t } = useI18n()

  return (
    <div className="flex flex-wrap justify-center">
      <div className="flex w-full justify-center">
        <LogoSvg className="w-[100px]" />
      </div>
      <h2 className="my-2 w-full text-center text-6xl font-light">
        number-to-words-ru
      </h2>
      <h5 className="flex w-full justify-center text-center text-2xl">
        <LoadingText
          text={t('main_module_description')}
          skeletonWidth={680}
          skeletonHeight={30}
        />
      </h5>
    </div>
  )
}
