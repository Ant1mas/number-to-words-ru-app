import LogoSvg from '@/public/assets/images/svg/logo.svg'
import { useTranslation } from '@/lib/config/i18n/server'

export default async function SectionTitle() {
  const { t } = await useTranslation()

  return (
    <div className="flex flex-wrap justify-center">
      <div className="flex w-full justify-center">
        <LogoSvg className="w-[100px]" />
      </div>
      <h2 className="my-2 w-full text-center text-6xl font-light">
        number-to-words-ru
      </h2>
      <h5 className="flex w-full justify-center text-center text-2xl">
        {t('main_module_description')}
      </h5>
    </div>
  )
}
