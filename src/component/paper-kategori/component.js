import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Gambar from '../../asset/kemeja.png';
import Image from '../../asset/handphone.png';
import Komputer from '../../asset/komputer.png';
import Fashion from '../../asset/fashion.png';
import JamTangan from '../../asset/jamtangan.png';
import Kecantikan from '../../asset/kecantikan.png';
import SepatuPria from '../../asset/sepatupria.png';
import SepatuWanita from '../../asset/sepatuwanita.png';
import Rumah from '../../asset/rumah.png'
import Elektronik from '../../asset/elektronik.png';
import Olahraga from '../../asset/olahraga.png'
function PaperCategory() {
  return (
    <React.Fragment>
      <Paper style={{border:'50%'}}>
        <Typography>KATEGORI</Typography>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <img src={Gambar} style={{ maxWidth: '50px' }} />
            <Typography style={{ fontSize: '12px' }}>Pakaian Pria</Typography>
          </Grid>
          <Grid item xs={2}>
            <img src={Image} style={{ maxWidth: '50px' }} />
            <Typography style={{ fontSize: '12px' }}>
              Handphone & Aksesoris
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <img src={Komputer} style={{ maxWidth: '50px' }} />
            <Typography style={{ fontSize: '12px' }}>
              Komputer & Aksesoris
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <img src={Fashion} style={{ maxWidth: '50px' }} />
            <Typography style={{ fontSize: '12px' }}>Fashion Muslim</Typography>
          </Grid>
          <Grid item xs={2}>
            <img src={JamTangan} style={{ maxWidth: '50px' }} />
            <Typography style={{ fontSize: '12px', marginLeft: '8px' }}>
              Jam Tangan
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <img src={Kecantikan} style={{ maxWidth: '50px' }} />
            <Typography style={{ fontSize: '12px', marginLeft: '-10px' }}>
              Kecantikan
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <img src={SepatuPria} style={{ maxWidth: '50px' }} />
            <Typography style={{ fontSize: '12px' }}>Sepatu Pria</Typography>
          </Grid>
          <Grid item xs={2}>
            <img src={SepatuWanita} style={{ maxWidth: '50px' }} />
            <Typography style={{ fontSize: '12px' }}>
              Sepatu Wanita
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <img src={Rumah} style={{ maxWidth: '50px' }} />
            <Typography style={{ fontSize: '12px',marginLeft:'-10px' }}>
              Perlengkapan Rumah
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <img src={Fashion} style={{ maxWidth: '50px' }} />
            <Typography style={{ fontSize: '12px' }}>Fashion Muslim</Typography>
          </Grid>
          <Grid item xs={2}>
            <img src={Elektronik} style={{ maxWidth: '50px' }} />
            <Typography style={{ fontSize: '12px', marginLeft: '-8px' }}>
              Elektronik
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <img src={Olahraga} style={{ maxWidth: '50px' }} />
            <Typography style={{ fontSize: '12px', marginLeft: '-10px' }}>
              Olahraga dan Outdor
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
}

export default PaperCategory;
