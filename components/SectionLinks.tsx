import { RxExternalLink } from 'react-icons/rx'

import useI18n from '@/lib/hooks/useI18n'
import LoadingText from '@/components/LoadingText'

export default function SectionLinks() {
  const { t } = useI18n()
  return (
    <div className="flex flex-col items-center">
      <h4 className="my-2 flex w-full justify-center text-center text-4xl">
        <LoadingText
          text={t('links_block_title')}
          skeletonWidth={280}
          skeletonHeight={40}
        />
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
          <LoadingText
            text={t('links_block_link_api')}
            skeletonWidth={200}
            skeletonHeight={24}
          />
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
          <LoadingText
            text={t('links_block_link_example_codesandbox')}
            skeletonWidth={200}
            skeletonHeight={24}
          />
        </a>
      </div>
    </div>
  )
}
