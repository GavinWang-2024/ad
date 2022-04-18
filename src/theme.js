import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#2793FF',
    },
    secondary: {
      main: '#ff9327',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
  },
});

export default theme;
