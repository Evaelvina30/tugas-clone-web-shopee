import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PersonIcon from '@material-ui/icons/Person';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import VideocamIcon from '@material-ui/icons/Videocam';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Home from '@material-ui/icons/Home'
import Box from '@material-ui/core/Box';

function Navigation(){
    return(
        <Box justifyContent="center" display="flex">
        <React.Fragment>
        <BottomNavigation style={{backgroundColor: '#f5f5f5',position:'fixed',bottom:0,width:'395px'}}>
            <BottomNavigationAction label="Home" value="home" icon={<Home />} />
            <BottomNavigationAction label="FilterNone" value="filternone" icon={<FilterNoneIcon />} />
            <BottomNavigationAction label="Videocam" value="Videocam" icon={<VideocamIcon/>} />
            <BottomNavigationAction label="Notifications" value="notifications" icon={<NotificationsIcon />} />
            <BottomNavigationAction label="Person" value="person" icon={<PersonIcon />} />
        </BottomNavigation>
        </React.Fragment>
        </Box>
    );
}

export default Navigation;