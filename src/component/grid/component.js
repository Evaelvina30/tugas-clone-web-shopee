import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Localmall from '@material-ui/icons/LocalMall';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Vibration from '@material-ui/icons/Vibration';
import Restaurant from '@material-ui/icons/Restaurant';
import LocalShipping from '@material-ui/icons/LocalShipping';
import Loyalty from '@material-ui/icons/Loyalty';
import AccessibilityNew from '@material-ui/icons/AccessibilityNew'
import LocalAtm from '@material-ui/icons/LocalAtm';
import Redeem from '@material-ui/icons/Redeem'

function Grids() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper style={{width:'50px',marginLeft:'18px'}}>
            <IconButton>
              <Localmall style={{color:'#d50000'}} />
            </IconButton>
          </Paper>
          <Typography style={{ fontSize: '12px',marginLeft:'13px' }}>ShopeeMall</Typography>
        </Grid>
        <Grid item xs={3}>
          <Paper style={{width:'50px',marginLeft:'15px'}}>
            <IconButton>
              <Vibration style={{color:'#26a69a'}}/>
            </IconButton>
          </Paper>
          <Typography style={{ fontSize: '12px',marginLeft:'10px'}}>Pulsa,Tiket & Tagihan</Typography>
        </Grid>
        <Grid item xs={3}>
          <Paper style={{width:'50px',marginLeft:'5px'}}>
            <IconButton>
              <Restaurant style={{color:'#d50000'}}/>
            </IconButton>
          </Paper>
          <Typography style={{ fontSize: '12px' }}>Food & Deals Voucher</Typography>
        </Grid>
        <Grid item xs={3}>
          <Paper style={{width:'50px',marginLeft:'1px'}}>
            <IconButton>
              <LocalShipping style={{color:'#d50000'}}/>
            </IconButton>
          </Paper>
          <Typography style={{ fontSize: '12px' }}>Gratis Ongkir Xtra</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={5}>
        <Grid item xs={3}>
          <Paper style={{width:'50px',marginLeft:'13px'}}>
            <IconButton>
              <Loyalty style={{color:'#26a69a'}}/>
            </IconButton>
          </Paper>
          <Typography style={{ fontSize: '12px', marginLeft:'20px' }}>Semua Promo</Typography>
        </Grid>
        <Grid item xs={3}>
          <Paper style={{width:'50px',marginLeft:'10px'}}>
            <IconButton>
              <AccessibilityNew style={{color:'#0d47a1'}}/>
            </IconButton>
          </Paper>
          <Typography style={{ fontSize: '12px', marginLeft:'10px' }}>Men Sale</Typography>
        </Grid>
        <Grid item xs={3}>
          <Paper style={{width:'50px',}}>
            <IconButton>
              <LocalAtm style={{color:'#ffd600'}}/>
            </IconButton>
          </Paper>
          <Typography style={{ fontSize: '12px' }}>Cashback dan Voucher</Typography>
        </Grid>
        <Grid item xs={3}>
          <Paper style={{width:'50px',marginLeft:'-10px'}}>
            <IconButton>
              <Redeem style={{color:'#26a69a'}}/>
            </IconButton>
          </Paper >
          <Typography style={{ fontSize: '12px',marginLeft:'-10px' }}>Shopee Games</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default Grids;
