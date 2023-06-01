import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



const Header = () => {
  return (<>
  <AppBar position="static" style={{backgroundColor:"black"}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Button color="inherit" component={Link} to="/">
        <Typography style={{fontFamily:"sans-serif" ,fontSize:"1.5rem"}}>
        Giphy
        </Typography>
        </Button>
        
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/favourite">
          Favourite
        </Button>
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
      </Toolbar>
    
    </AppBar>
  
  </>
  
  );
};

export default Header;





