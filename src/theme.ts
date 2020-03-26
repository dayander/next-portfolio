import { createMuiTheme } from '@material-ui/core/styles';
import { red, common } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#485D35',
    },
    secondary: {
      main: '#828B85',
      dark: '#686F6A',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: common.white,
    },
  },
});

export default theme;
