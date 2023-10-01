import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import DefaultMetadata from 'components/DefaultMetadata'
import Layout from 'components/Layout'
import SectionTitle from 'components/SectionTitle'
import SectionResult from 'components/SectionResult'
import SectionExamples from 'components/SectionExamples'
import SectionOptions from 'components/SectionOptions'
import SectionCode from 'components/SectionCode'
import SectionLinks from 'components/SectionLinks'
import SectionInstallation from 'components/SectionInstallation'
import InputNumberField from 'components/InputNumberField'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          number-to-words-ru node module - Convert number to russian words
        </title>
        <meta
          name="description"
          content="Node.js module to convert number to words in russian"
        />
        <DefaultMetadata />
      </Head>
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
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  }
}
