import useI18n from 'lib/hooks/useI18n'
import CodePreview from 'components/CodePreview'
import LoadingText from 'components/LoadingText'

const CODE_NPM = `npm install number-to-words-ru`
const CODE_YARN = `yarn add number-to-words-ru`
const CODE_PNPM = `pnpm add number-to-words-ru`
const CODE_BUN = `bun add number-to-words-ru`

export default function SectionInstallation() {
  const { t } = useI18n()

  return (
    <div className="flex flex-col items-center">
      <h4 className="my-2 flex w-full justify-center text-center text-4xl">
        <LoadingText
          text={t('installation_block_title')}
          skeletonWidth={200}
          skeletonHeight={40}
        />
      </h4>
      <div className="flex w-full flex-wrap">
        <div className="w-full px-2 lg:w-1/3">
          <div className="mb-2 text-base">
            <LoadingText
              text={t('installation_npm_title')}
              skeletonWidth={200}
              skeletonHeight={24}
            />
          </div>
          <CodePreview code={CODE_NPM} language="bash" />
        </div>
        <div className="w-full px-2 lg:w-1/3">
          <div className="mb-2 text-base">
            <LoadingText
              text={t('installation_yarn_title')}
              skeletonWidth={200}
              skeletonHeight={24}
            />
          </div>
          <CodePreview code={CODE_YARN} language="bash" />
        </div>
        <div className="w-full px-2 lg:w-1/3">
          <div className="mb-2 text-base">
            <LoadingText
              text={t('installation_pnpm_title')}
              skeletonWidth={200}
              skeletonHeight={24}
            />
          </div>
          <CodePreview code={CODE_PNPM} language="bash" />
        </div>
        <div className="w-full px-2 lg:w-1/3">
          <div className="mb-2 text-base">
            <LoadingText
              text={t('installation_bun_title')}
              skeletonWidth={200}
              skeletonHeight={24}
            />
          </div>
          <CodePreview code={CODE_BUN} language="bash" />
        </div>
      </div>
    </div>
  )
}
