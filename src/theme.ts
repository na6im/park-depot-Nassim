import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { grey } from '@mui/material/colors'

const theme = createTheme({
  shape: {
    borderRadius: 8,
  },
  palette: {
    primary: {
      main: '#fff',
    },
    error: {
      main: '#E50914',
    },
    secondary: {
      main: grey[100],
    },
    text: {
      primary: '#000',
      secondary: '#9A9A9A',
    },
    background: {
      default: '#FFF',
    },
  },
  typography: {
    fontFamily: 'Urbanist',
  },
})
const respTheme = responsiveFontSizes(theme)

export default respTheme
