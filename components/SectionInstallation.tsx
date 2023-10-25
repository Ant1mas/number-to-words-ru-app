import InstallWith from '@/components/InstallWith'
import SectionLayout from '@/components/SectionLayout'
import { getDictionary } from '@/lib/config/i18n/functions/getDictionary'

export default async function SectionInstallation() {
  const dictionary = await getDictionary()

  return (
    <SectionLayout title={dictionary.sectionInstallation.title}>
      <div className="flex w-full flex-wrap">
        <InstallWith tool="npm" />
        <InstallWith tool="yarn" />
        <InstallWith tool="pnpm" />
        <InstallWith tool="bun" />
      </div>
    </SectionLayout>
  )
}
