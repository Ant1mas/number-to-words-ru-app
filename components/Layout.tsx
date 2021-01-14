import {
  Container,
  Grid,
} from '@material-ui/core';

// import styles from './Layout.module.sass'
import Header from 'components/Header'
import Footer from 'components/Footer'

const Layout = ({ children }) => {
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
        <Grid item component='main' style={{flexGrow: 1,}}>
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

export default Layout;
