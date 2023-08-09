import { Box, Toolbar } from '@mui/material'
import { Navbar } from '../components/navbar.component'
import { Sidebar } from '../components/sidebar.component'

const drawerWidth = 240

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* navbar */}
      <Navbar drawerWidth={drawerWidth} />
      {/* sidebar */}
      <Sidebar drawerWidth={drawerWidth} />

      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        {/* toolbar */}
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}