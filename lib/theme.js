import { red, green } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // main: '#9191bf',
      main: '#1f54bf',
    },
    secondary: {
      main: '#000',
    },
    success: {
      main: green[600],
    },
    error: {
      main: red.A400,
    },
    danger: {
      main: 'rgb(214, 52, 119)',
    },
    background: {
      default: '#F8F8FF',
    },
    content: {
      main: '#F8F8FF',
    },
    
  },
  props: {
    MuiButton: {
      style: { minWidth: 120 },
    },
  },
});

export default theme;
