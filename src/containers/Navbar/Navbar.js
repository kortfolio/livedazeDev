import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { LIST_PATH } from 'constants/paths'
import AccountMenu from './AccountMenu'
import LoginMenu from './LoginMenu'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
//import ClippedDrawer from './ClippedDrawer';
import { CssBaseline, IconButton, Hidden, Drawer } from '@material-ui/core';
import logo from './logo.png'; // with import
import MenuIcon from '@material-ui/icons/Menu';
//import ResponsiveDrawer1 from './ResponsiveDrawer.1'
//import ResponsiveDrawer from './ResponsiveDrawer';
const drawerWidth = 240;

const buttonStyle = {
  textDecoration: 'none',
  backgroundColor: '#55587a'
}

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

//const { , theme } = this.props;


export const Navbar = ({
  avatarUrl,
  displayName,
  authExists,
  goToAccount,
  handleLogout,
  closeAccountMenu,
  anchorEl,
  handleMenu,
  classes,
  handleDrawerToggle,
  theme,
  drawer,
  mobileOpen,
  container,
}) => (

  <React.Fragment>
       <div className={classes.root}>
       <CssBaseline />
  <AppBar position={authExists ? "fixed" : "static"
   }
  style={buttonStyle}
  className={classes.appBar}>
    <Toolbar>
      <Typography
        variant="h6"
        color="inherit"
        className={classes.grow}
        component={Link}
        to={authExists ? LIST_PATH : '/'}>
        <img src = {logo}
             width = "150px"
             className = "logoImage"
             alt="livedaze"
        />
      </Typography>
      {authExists ? (
        <React.Fragment> 
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerToggle}
            >
          <MenuIcon />
          </IconButton>

         <AccountMenu
          avatarUrl={avatarUrl}
          displayName={displayName}
          onLogoutClick={handleLogout}
          goToAccount={goToAccount}
          closeAccountMenu={closeAccountMenu}
          handleMenu={handleMenu}
          anchorEl={anchorEl}
        />
        </React.Fragment>
      ) : (
        <LoginMenu />
      )}
    </Toolbar> 
  </AppBar>
  
  
  {  authExists ? ( 
    
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        ) : ""}
   
     
   
  
    </div>
    
    </React.Fragment>
)

Navbar.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  displayName: PropTypes.string, // from enhancer (flattenProps - profile)
  avatarUrl: PropTypes.string, // from enhancer (flattenProps - profile)
  authExists: PropTypes.bool, // from enhancer (withProps - auth)
  goToAccount: PropTypes.func.isRequired, // from enhancer (withHandlers - router)
  handleLogout: PropTypes.func.isRequired, // from enhancer (withHandlers - firebase)
  closeAccountMenu: PropTypes.func.isRequired, // from enhancer (withHandlers - firebase)
  handleMenu: PropTypes.func.isRequired, // from enhancer (withHandlers - firebase)
  anchorEl: PropTypes.object, // from enhancer (withStateHandlers - handleMenu)


  theme: PropTypes.object.isRequired,

}

Navbar.defaultProps = {
  mobileOpen: false
}

export default withStyles(styles, { withTheme: true })(Navbar);