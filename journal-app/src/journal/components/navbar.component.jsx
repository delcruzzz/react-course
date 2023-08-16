import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Link, Toolbar, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { logoutFirebase } from '../../firebase/providers.firebase'

export const Navbar = ({ drawerWidth = 240 }) => {
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(logoutFirebase())
  }

  return (
    <AppBar 
      position='fixed' 
      sx={{ 
        width: {sm: `calc(100% - ${drawerWidth}px)`}, 
        ml: {sm: `${drawerWidth}px`} 
      }}
    >
      <Toolbar>
        <IconButton 
          color='inherit' 
          edge='start' 
          sx={{ mr: 2, display: {sm: 'none'} }}
        >
          <MenuOutlined />
        </IconButton>
        <Grid 
          container 
          direction='row' 
          justifyContent='space-between' 
          alignItems='center'
        >
          <Link href='/'  color='inherit' sx={{ textDecoration: 'none' }}>
            <Typography variant='h6' noWrap component='div'>JournalApp</Typography>
          </Link>
          <Link href='test' color='inherit' sx={{ textDecoration: 'none' }}>
            <Typography variant='h6' noWrap component='div'>Users test</Typography>
          </Link>
          <IconButton onClick={onLogout} color='error'>
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}