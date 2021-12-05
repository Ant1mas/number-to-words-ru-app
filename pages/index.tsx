import Head from 'next/head'
import Grid from '@mui/material/Grid'
import ModuleParamsProvider from 'lib/context/moduleParamsContext'
import ApiInfoBlock from 'components/ApiInfoBlock'
import CodeBlock from 'components/CodeBlock'
import InputNumberField from 'components/InputNumberField'
import InstallationBlock from 'components/InstallationBlock'
import Layout from 'components/Layout'
import ModuleTitle from 'components/ModuleTitle'
import OptionsBlock from 'components/OptionsBlock'
import ResultBlock from 'components/ResultBlock'

export default function Home() {
  return (
    <>
      <ModuleParamsProvider>
        <Head>
          <title>
            number-to-words-ru node module - convert number to russian words
          </title>
          <meta
            name="description"
            content="Node.js module to convert number to words in russian"
          />
        </Head>
        <Layout>
          <Grid item xs={12}>
            <ModuleTitle />
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="center">
              <Grid item xs={12} sm={6}>
                <InputNumberField />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <ResultBlock />
          </Grid>
          <Grid item xs={12} md={6}>
            <OptionsBlock />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container direction="column" spacing={6}>
              <Grid item xs={12}>
                <CodeBlock />
              </Grid>
              <Grid item>
                <ApiInfoBlock />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <InstallationBlock />
          </Grid>
        </Layout>
      </ModuleParamsProvider>
    </>
  )
}
