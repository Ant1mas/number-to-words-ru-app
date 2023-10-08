import { useTranslation } from '@/lib/config/i18n/server'

import CodePreview from '@/components/CodePreview'

const SCRIPTS = {
  npm: 'npm install number-to-words-ru',
  yarn: 'yarn add number-to-words-ru',
  pnpm: 'pnpm add number-to-words-ru',
  bun: 'bun add number-to-words-ru',
}

type Props = {
  language: 'npm' | 'yarn' | 'pnpm' | 'bun'
}

export default async function InstallWith({ language }: Props) {
  const { t } = await useTranslation()

  return (
    <div className="w-full p-2 lg:w-1/2">
      <div className="mb-1 text-base">
        {t(`installation_${language}_title`)}
      </div>
      <CodePreview code={SCRIPTS[language]} language="bash" />
    </div>
  )
}
