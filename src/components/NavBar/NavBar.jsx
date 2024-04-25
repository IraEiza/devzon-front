import './NavBar.css'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useContext } from 'react';
import { UserContext } from '../../context/userContext';

function NavBar() {

  const navigate = useNavigate()
  const { user } = useContext(UserContext)

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [logged, setLogged] = useState(localStorage.getItem('token'));
  const [pages, setPages] = useState([])

  useEffect(() => {
    if(user?.role === 'user') {
      setPages([
        {name: 'Favs', path: '/favs'}, 
        {name: 'My Purchases', path: '/my-purchases'}, 
        {name: 'Profile', path: '/profile'}
      ]);

    } else if(user?.role === 'admin') {
      setPages([
        {name: 'Products', path: '/products'}, 
        {name: 'Purchases', path: '/purchases'},
        {name: 'Users', path: '/users'}
      ]);
    }
  }, [user])

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (path) => {
    if(path) {
      navigate(path)
    }
    setAnchorElNav(null);
  };

  const handleLog = () => {
    if(logged) {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      setLogged(false)
    } else {
      navigate('/login')
    }
  }

  return (
    <AppBar position="static" sx={{height: {sx: 56, sm: 70}}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', sm: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to="/">
              <img src="https://res.cloudinary.com/dyxqi2emg/image/upload/v1713221681/Devzon/logo_white2_mkxbl4.webp" alt="" style={{width: '100px'}}/>
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', sm: 'none' },
              }}
            >
              {logged && pages.map((page) => (
                <MenuItem key={page.name} onClick={() => handleCloseNavMenu(page.path)}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', sm: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to="/">
              <img src="https://res.cloudinary.com/dyxqi2emg/image/upload/v1713221681/Devzon/logo_white2_mkxbl4.webp" alt="" style={{width: '100px'}}/>
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent: 'center' }}>
            {logged && pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page.path)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button 
            size="small" 
            variant="contained" 
            margin="dense"
            style={{backgroundColor: "black"}}
            onClick={handleLog}
          >
            {logged ? 'LOGOUT' : 'LOGIN'}
          </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;