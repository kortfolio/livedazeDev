import red from '@material-ui/core/colors/red'
import purple from '@material-ui/core/colors/purple';
import Colors from '@material-ui/core/colors/';
import deepPurple from '@material-ui/core/colors/deepPurple';
import orange from '@material-ui/core/colors/orange';

import { createMuiTheme } from '@material-ui/core/styles'

export default theme => console.log(theme) || ({
  palette: {

    primary: {
      main: orange,
       light: orange, 
       dark: orange,
        contrastText: orange
      }


  },
    flex: {
    flexGrow: 1
  }
});