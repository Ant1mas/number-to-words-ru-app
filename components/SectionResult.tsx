import ButtonCopyResultText from '@/components/ButtonCopyResultText'
import ModuleResult from '@/components/ModuleResult'
import SectionLayout from '@/components/SectionLayout'
import { getDictionary } from '@/lib/config/i18n/functions/getDictionary'

export default async function SectionResult() {
  const dictionary = await getDictionary()

  return (
    <SectionLayout title={dictionary.sectionResult.title}>
      <ModuleResult />
      <div className="mt-3 flex w-full justify-center">
        <ButtonCopyResultText dictionary={dictionary} />
      </div>
    </SectionLayout>
  )
}
