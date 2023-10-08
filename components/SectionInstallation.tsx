import InstallWith from '@/components/InstallWith'
import SectionLayout from '@/components/SectionLayout'
import { useTranslation } from '@/lib/config/i18n/server'

export default async function SectionInstallation() {
  const { t } = await useTranslation()

  return (
    <SectionLayout title={t('installation_block_title')}>
      <div className="flex w-full flex-wrap">
        <InstallWith language="npm" />
        <InstallWith language="yarn" />
        <InstallWith language="pnpm" />
        <InstallWith language="bun" />
      </div>
    </SectionLayout>
  )
}
