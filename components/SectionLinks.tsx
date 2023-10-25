import { RxExternalLink } from 'react-icons/rx'

import SectionLayout from '@/components/SectionLayout'
import { getDictionary } from '@/lib/config/i18n/functions/getDictionary'

export default async function SectionLinks() {
  const dictionary = await getDictionary()

  return (
    <SectionLayout title={dictionary.sectionLinks.title}>
      <div className="flex flex-col items-center">
        <a
          href="https://github.com/Ant1mas/number-to-words-ru/blob/master/README.md#api"
          target="_blank"
          rel="noreferrer"
          className="my-0.5 text-center hover:underline"
        >
          <div className="relative top-1 mr-1 inline-block">
            <RxExternalLink className="text-xl" />
          </div>
          {dictionary.sectionLinks.api}
        </a>
        <a
          href="https://github.com/Ant1mas/number-to-words-ru/blob/master/README.md#api"
          target="_blank"
          rel="noreferrer"
          className="my-0.5 text-center hover:underline"
        >
          <div className="relative top-1 mr-1 inline-block">
            <RxExternalLink className="text-xl" />
          </div>
          {dictionary.sectionLinks.exampleCodesandbox}
        </a>
      </div>
    </SectionLayout>
  )
}
