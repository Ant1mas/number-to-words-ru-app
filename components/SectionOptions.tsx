import OptionsContent from '@/components/OptionsContent'
import SectionLayout from '@/components/SectionLayout'
import { getDictionary } from '@/lib/config/i18n/functions/getDictionary'

export default async function SectionOptions() {
  const dictionary = await getDictionary()

  return (
    <SectionLayout title={dictionary.sectionOptions.title}>
      <div className="w-full">
        <OptionsContent />
      </div>
    </SectionLayout>
  )
}
