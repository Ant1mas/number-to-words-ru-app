import CodePreview from '@/components/CodePreview'
import { getDictionary } from '@/lib/config/i18n/functions/getDictionary'

const SCRIPTS = {
  npm: 'npm install number-to-words-ru',
  yarn: 'yarn add number-to-words-ru',
  pnpm: 'pnpm add number-to-words-ru',
  bun: 'bun add number-to-words-ru',
}

type Props = {
  tool: 'npm' | 'yarn' | 'pnpm' | 'bun'
}

export default async function InstallWith({ tool }: Props) {
  const dictionary = await getDictionary()

  return (
    <div className="w-full p-2 lg:w-1/2">
      <div className="mb-1 text-base">
        {dictionary.sectionInstallation.tools[tool]}
      </div>
      <CodePreview code={SCRIPTS[tool]} language="bash" />
    </div>
  )
}
