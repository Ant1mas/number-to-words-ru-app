import CodeContent from '@/components/CodeContent'
import SectionLayout from '@/components/SectionLayout'
import { getDictionary } from '@/lib/config/i18n/functions/getDictionary'

export default async function SectionCode() {
  const dictionary = await getDictionary()

  return (
    <SectionLayout title={dictionary.sectionCode.title}>
      <div className="w-full">
        <CodeContent dictionary={dictionary} />
      </div>
    </SectionLayout>
  )
}
