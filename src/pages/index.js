import Head from 'next/head';
// import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import CarouselFadeExample from 'src/components/CarouselFadeExample';

const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>
        Dashboard | Mahango Deal 
      </title>
    </Head>
    <CarouselFadeExample />
    
    {/* <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            md={6}
            lg={4}
          >
          
          </Grid>
        </Grid>
      </Container>
    </Box> */}
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
