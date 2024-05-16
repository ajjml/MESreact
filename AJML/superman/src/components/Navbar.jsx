import React from 'react'
import { AppBar,Toolbar,Typography,Button }from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant="h2">home</Typography>
                <Typography variant="h2">Login</Typography>&nbsp;&nbsp;&nbsp;
                <Button variant="contained"><Link to='/reg'   >ENTER</Link> </Button>
                <Button variant='contained'><Link to='/u' >NEXT</Link></Button>
                <Button variant='contained'><Link to='/c' >Counter</Link></Button>
                <Button variant='contained'><Link to='/n' >use</Link></Button>
                <Button variant='contained'><Link to='/m' >Viewdata</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar