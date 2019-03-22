import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { LIST_PATH } from 'constants/paths'
import AccountMenu from './AccountMenu'
import LoginMenu from './LoginMenu'


import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ClippedDrawer from './ClippedDrawer';
import { CssBaseline } from '@material-ui/core';
import logo from './logo.png'; // with import


const buttonStyle = {
  textDecoration: 'none',
  backgroundColor: '#55587a'
}

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
        <AccountMenu
          avatarUrl={avatarUrl}
          displayName={displayName}
          onLogoutClick={handleLogout}
          goToAccount={goToAccount}
          closeAccountMenu={closeAccountMenu}
          handleMenu={handleMenu}
          anchorEl={anchorEl}
        />
      ) : (
        <LoginMenu />
      )}
    </Toolbar>
  </AppBar>
  {
    authExists ? (  <ClippedDrawer/> ) : ""}
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
  anchorEl: PropTypes.object // from enhancer (withStateHandlers - handleMenu)
}

export default Navbar
