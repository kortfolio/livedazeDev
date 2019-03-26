const drawerWidth = 200;
const theme = theme => ({
  root: {
  display: 'flex',
  flexGrow: 1,
  
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
   
  },
  content: {
    width: 'auto',
    marginLeft: drawerWidth + 50,
    marginRight: 50,
    /*    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: drawerWidth + 50,
      marginRight: 10,
      }
 */
  },
  toolbar: theme.mixins.toolbar,
  
});

export default theme;