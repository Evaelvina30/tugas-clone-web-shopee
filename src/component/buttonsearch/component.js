import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

function Search() {
  return (
    <Box display="flex" justifyContent="center">
      <React.Fragment>
        <AppBar
          position="static"
          color="default"
          style={{
            height: 40,
            maxWidth: '290px',
            position: 'fixed',
            marginTop: '10px',
            backgroundColor: 'transparent',
            marginLeft: '-30px'
          }}>
          <Toolbar>
            <SearchIcon style={{marginLeft:'2px',color:'white'}}/>
            <InputBase style={{color:'white'}}
              placeholder="Search…."
              inputProps={{ 'aria-label': 'search' }}
            />
            <ShoppingCart style={{ marginLeft: '200px', color:'white',marginLeft:'100px' }} />
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </Box>
  );
}

export default Search;
