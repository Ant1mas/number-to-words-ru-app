import useI18n, { DEFAULT_LOADING_STATE } from 'lib/hooks/useI18n'
import LogoAnt1mas from 'public/images/svg/logo-ant1mas.svg'
import LoadingText from 'components/LoadingText'

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="my-8 text-center">
      {t('info_module_version_text') !== DEFAULT_LOADING_STATE ? (
        <div className="text-sm">
          {t('info_module_version_text') + ' '}
          <a
            href="https://www.npmjs.com/package/number-to-words-ru"
            target="_blank"
            rel="noreferrer"
          >
            <span className="font-bold underline">number-to-words-ru</span>
          </a>{' '}
          (v2.3.5)
        </div>
      ) : null}
      <div className="flex justify-center w-full mt-2 font-sans">
        <LoadingText
          text={t('made_by_project')}
          skeletonWidth={120}
          skeletonHeight={24}
        />
      </div>
      <div className="flex justify-center w-full my-1">
        <a href="https://github.com/Ant1mas" target="_blank" rel="noreferrer">
          <LogoAnt1mas className="h-16 duration-150 cursor-pointer fill-black opacity-70 hover:opacity-100 focus:opacity-100" />
        </a>
      </div>
    </footer>
  )
}
