import useI18n from 'lib/hooks/useI18n'
import CodePreview from 'components/CodePreview'

const CODE_NPM = `npm install number-to-words-ru`
const CODE_YARN = `yarn add number-to-words-ru`
const CODE_PNPM = `pnpm add number-to-words-ru`

export default function InstallationBlock() {
  const { t } = useI18n()

  return (
    <div className="flex flex-col items-center">
      <h4 className="my-2 w-full text-center text-4xl">
        {t('installation_block_title')}
      </h4>
      <div className="flex w-full flex-wrap">
        <div className="w-full px-2 lg:w-1/3">
          <div className="mb-2 text-base">{t('installation_npm_title')}</div>
          <CodePreview code={CODE_NPM} language="bash" />
        </div>
        <div className="w-full px-2 lg:w-1/3">
          <div className="mb-2 text-base">{t('installation_yarn_title')}</div>
          <CodePreview code={CODE_YARN} language="bash" />
        </div>
        <div className="w-full px-2 lg:w-1/3">
          <div className="mb-2 text-base">{t('installation_pnpm_title')}</div>
          <CodePreview code={CODE_PNPM} language="bash" />
        </div>
      </div>
    </div>
  )
}
