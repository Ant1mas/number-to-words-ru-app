import LogoSvg from 'public/images/svg/logo.svg'
import useI18n from 'lib/hooks/useI18n'
import LoadingText from 'components/LoadingText'

export default function ModuleTitle() {
  const { t } = useI18n()

  return (
    <div className="flex flex-wrap justify-center">
      <div className="flex justify-center w-full">
        <LogoSvg className="w-[100px]" />
      </div>
      <h2 className="w-full my-2 text-6xl font-light text-center">
        number-to-words-ru
      </h2>
      <h5 className="flex justify-center w-full text-2xl text-center">
        <LoadingText
          text={t('main_module_description')}
          skeletonWidth={680}
          skeletonHeight={30}
        />
      </h5>
    </div>
  )
}
