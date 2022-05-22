import Head from 'next/head'
import Grid from '@mui/material/Grid'

import Layout from 'components/Layout'
import ModuleTitle from 'components/ModuleTitle'
import InputNumberField from 'components/InputNumberField'
import ResultBlock from 'components/ResultBlock'
import OptionsBlock from 'components/OptionsBlock'
import CodeBlock from 'components/CodeBlock'
import LinksBlock from 'components/LinksBlock'
import InstallationBlock from 'components/InstallationBlock'
import ExamplesBlock from 'components/ExamplesBlock'

export function Home() {
  return (
    <>
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
        <Grid item xs={12} lg={6}>
          <ExamplesBlock />
          <OptionsBlock />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Grid container direction="column" spacing={6}>
            <Grid item xs={12} sx={{ width: '100%' }}>
              <CodeBlock />
            </Grid>
            <Grid item>
              <LinksBlock />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <InstallationBlock />
        </Grid>
      </Layout>
    </>
  )
}

export default Home
