import CodePreview from '@/components/CodePreview'
import { useTranslation } from '@/lib/config/i18n/server'

const CODE_NPM = `npm install number-to-words-ru`
const CODE_YARN = `yarn add number-to-words-ru`
const CODE_PNPM = `pnpm add number-to-words-ru`
const CODE_BUN = `bun add number-to-words-ru`

export default async function SectionInstallation() {
  const { t } = await useTranslation()

  return (
    <div className="flex flex-col items-center">
      <h4 className="my-2 flex w-full justify-center text-center text-4xl">
        {t('installation_block_title')}
      </h4>
      <div className="flex w-full flex-wrap">
        <div className="w-full p-2 lg:w-1/2">
          <div className="mb-1 text-base">{t('installation_npm_title')}</div>
          <CodePreview code={CODE_NPM} language="bash" />
        </div>
        <div className="w-full p-2 lg:w-1/2">
          <div className="mb-1 text-base">{t('installation_yarn_title')}</div>
          <CodePreview code={CODE_YARN} language="bash" />
        </div>
        <div className="w-full p-2 lg:w-1/2">
          <div className="mb-1 text-base">{t('installation_pnpm_title')}</div>
          <CodePreview code={CODE_PNPM} language="bash" />
        </div>
        <div className="w-full p-2 lg:w-1/2">
          <div className="mb-1 text-base">{t('installation_bun_title')}</div>
          <CodePreview code={CODE_BUN} language="bash" />
        </div>
      </div>
    </div>
  )
}
