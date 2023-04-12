import Head from 'next/head'

import DefaultMetadata from 'components/DefaultMetadata'
import Layout from 'components/Layout'
import ModuleTitle from 'components/ModuleTitle'
import InputNumberField from 'components/InputNumberField'
import ResultBlock from 'components/ResultBlock'
import OptionsBlock from 'components/OptionsBlock'
import CodeBlock from 'components/CodeBlock'
import LinksBlock from 'components/LinksBlock'
import InstallationBlock from 'components/InstallationBlock'
import ExamplesBlock from 'components/ExamplesBlock'

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
          <ModuleTitle />
        </div>
        <div className="flex w-full justify-center p-4">
          <div className="w-full sm:w-1/2">
            <InputNumberField />
          </div>
        </div>
        <div className="w-full p-4">
          <ResultBlock />
        </div>
        <div className="w-full p-4 lg:w-1/2">
          <ExamplesBlock />
          <OptionsBlock />
        </div>
        <div className="flex w-full flex-col lg:w-1/2">
          <div className="w-full p-4">
            <CodeBlock />
          </div>
          <div className="w-full p-4">
            <LinksBlock />
          </div>
        </div>
        <div className="w-full p-4">
          <InstallationBlock />
        </div>
      </Layout>
    </>
  )
}
