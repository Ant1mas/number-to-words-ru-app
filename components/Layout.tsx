import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Header from 'components/Header'
import Footer from 'components/Footer'

export default function Layout({ children }) {
  return (
    <>
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Grid item>
          <Header />
        </Grid>
        <Grid item component="main" style={{ flexGrow: 1 }}>
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
