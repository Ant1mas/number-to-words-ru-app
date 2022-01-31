import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import Header from 'components/Header'
import Footer from 'components/Footer'

export function Layout({ children }) {
  return (
    <>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Grid item>
          <Header />
        </Grid>
        <Grid item component="main" sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            {children}
          </Grid>
        </Grid>
        <Grid item>
          <Footer />
        </Grid>
      </Container>
    </>
  )
}

export default Layout
