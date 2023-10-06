import { RxExternalLink } from 'react-icons/rx'

import { useTranslation } from '@/lib/config/i18n/server'

export default async function SectionLinks() {
  const { t } = await useTranslation()

  return (
    <div className="flex flex-col items-center">
      <h4 className="my-2 flex w-full justify-center text-center text-4xl">
        {t('links_block_title')}
      </h4>
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
          {t('links_block_link_api')}
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
          {t('links_block_link_example_codesandbox')}
        </a>
      </div>
    </div>
  )
}
