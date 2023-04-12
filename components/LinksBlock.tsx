import { RxExternalLink } from 'react-icons/rx'

import useI18n from 'lib/hooks/useI18n'

export default function LinksBlock() {
  const { t } = useI18n()
  return (
    <div className="flex flex-col items-center">
      <h4 className="my-2 w-full text-center text-4xl">
        {t('links_block_title')}
      </h4>
      <div className="flex flex-col items-center">
        <a
          href="https://github.com/Ant1mas/number-to-words-ru/blob/master/README.md#api"
          target="_blank"
          rel="noreferrer"
          className="flex w-full items-center justify-center hover:underline"
        >
          <RxExternalLink className="mr-1 text-xl" />
          {t('links_block_link_api')}
        </a>
        <a
          href="https://github.com/Ant1mas/number-to-words-ru/blob/master/README.md#api"
          target="_blank"
          rel="noreferrer"
          className="flex w-full items-center justify-center hover:underline"
        >
          <RxExternalLink className="mr-1 text-xl" />
          {t('links_block_link_example_codesandbox')}
        </a>
      </div>
    </div>
  )
}
