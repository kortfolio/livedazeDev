import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: orange,
      main: '#009be5',
      dark: '#006db3',
      contrastText: '#fff',
    
    },
  },
});

export default theme;