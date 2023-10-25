import ExampleSelect from '@/components/ExampleSelect'
import SectionLayout from '@/components/SectionLayout'
import { getDictionary } from '@/lib/config/i18n/functions/getDictionary'

export default async function SectionExamples() {
  const dictionary = await getDictionary()

  return (
    <SectionLayout title={dictionary.sectionExamples.title}>
      <ExampleSelect dictionary={dictionary} />
    </SectionLayout>
  )
}
