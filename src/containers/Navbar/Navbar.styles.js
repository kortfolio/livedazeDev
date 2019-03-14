 
import orange from '@material-ui/core/colors/orange';
 

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