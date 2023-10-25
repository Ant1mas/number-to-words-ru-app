import { getDictionary } from '@/lib/config/i18n/functions/getDictionary'
import LogoAnt1mas from '@/public/assets/images/svg/logo-ant1mas.svg'

export default async function Footer() {
  const dictionary = await getDictionary()

  return (
    <footer className="my-8 text-center">
      <div className="text-sm">
        {dictionary.footer.moduleVersion}{' '}
        <a
          href="https://www.npmjs.com/package/number-to-words-ru"
          target="_blank"
          rel="noreferrer"
        >
          <span className="font-bold underline">number-to-words-ru</span>
        </a>{' '}
        (v2.4.0)
      </div>
      <div className="my-2 flex w-full justify-center">
        <a href="https://ant1mas.dev" target="_blank" rel="noreferrer">
          <LogoAnt1mas className="h-16 cursor-pointer fill-black opacity-70 duration-150 hover:opacity-100 focus:opacity-100" />
        </a>
      </div>
    </footer>
  )
}
