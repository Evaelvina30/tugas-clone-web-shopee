import React from 'react';
import Container from '@material-ui/core/Container';
import Navigation from '../../component/buttonnavigation';
import Stepper from '../../component/stepper';
import Search from '../../component/buttonsearch';
import Grids from '../../component/grid';
import Gambar from '../../asset/klaim.jpeg';
import PaperCategory from '../../component/paper-kategori';
function Home() {
  return (
    <Container maxWidth="xs">
      <Search />
      <Stepper />
      <Grids />
      <img src={Gambar} style={{ maxWidth: '385px' }} />
      <PaperCategory />
      <Navigation />
    </Container>
  );
}

export default Home;
