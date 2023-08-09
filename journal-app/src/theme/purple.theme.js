import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

/* 
  esta es la configuración básica del tema de la aplicación
*/
const theme = createTheme({
  palette: {
    primary: {
      main: '#262254',
    },
    secondary: {
      main: '#543884',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
