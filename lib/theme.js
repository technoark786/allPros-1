import { red, green } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // main: '#9191bf',
      main: '#3f0f3f',
    },
    secondary: {
      main: '#06060e',
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
