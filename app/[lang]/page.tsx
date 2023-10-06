import Root from '@/components/Root'
import RootProviders from '@/components/RootProviders'
import ReactHotToaster from '@/components/ReactHotToaster'
import Layout from '@/components/Layout'
import SectionTitle from '@/components/SectionTitle'
import InputNumberField from '@/components/InputNumberField'
import SectionResult from '@/components/SectionResult'
import SectionExamples from '@/components/SectionExamples'
import SectionOptions from '@/components/SectionOptions'
import SectionCode from '@/components/SectionCode'
import SectionLinks from '@/components/SectionLinks'
import SectionInstallation from '@/components/SectionInstallation'

export default async function Page() {
  return (
    <div id="app" className={'flex justify-center'}>
      <ReactHotToaster />
      <RootProviders>
        <Root />
        <Layout>
          <div className="mt-2 w-full px-4">
            <SectionTitle />
          </div>
          <div className="flex w-full justify-center p-4">
            <div className="w-full sm:w-1/2">
              <InputNumberField />
            </div>
          </div>
          <div className="w-full p-4">
            <SectionResult />
          </div>
          <div className="w-full lg:w-1/2">
            <SectionExamples />
            <SectionOptions />
          </div>
          <div className="flex w-full flex-col lg:w-1/2">
            <div className="w-full p-4">
              <SectionCode />
            </div>
            <div className="w-full p-4">
              <SectionLinks />
            </div>
          </div>
          <div className="w-full p-4">
            <SectionInstallation />
          </div>
        </Layout>
      </RootProviders>
    </div>
  )
}
