import { getDictionary } from '@/lib/config/i18n/functions/getDictionary'
import LogoSvg from '@/public/assets/images/svg/logo.svg'

export default async function SectionTitle() {
  const dictionary = await getDictionary()

  return (
    <div className="flex flex-wrap justify-center">
      <div className="flex w-full justify-center">
        <LogoSvg className="w-[100px]" />
      </div>
      <h2 className="my-2 w-full text-center text-6xl font-light">
        {dictionary.sectionTitle.name}
      </h2>
      <h5 className="flex w-full justify-center text-center text-2xl">
        {dictionary.sectionTitle.description}
      </h5>
    </div>
  )
}
