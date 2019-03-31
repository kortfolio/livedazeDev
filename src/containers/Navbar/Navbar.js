import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { LIST_PATH } from 'constants/paths';
import AccountMenu from './AccountMenu';
import LoginMenu from './LoginMenu';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import ClippedDrawer from './ClippedDrawer';
import { CssBaseline, IconButton, Hidden, Drawer } from '@material-ui/core';
import logo from './logo.png'; // with import
import MenuIcon from '@material-ui/icons/Menu';
//import ResponsiveDrawer1 from './ResponsiveDrawer.1'
//import ResponsiveDrawer from './ResponsiveDrawer';

import Divider from '@material-ui/core/Divider';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import theme from './NavbarTheme';
//import ClippedDrawer from "./ClippedDrawer";

const buttonStyle = {
	textDecoration: 'none',
	backgroundColor: '#55587a'
};

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
	closeDrawerToggle,
	theme,
	drawer,
	mobileOpen
}) => (
	<React.Fragment>
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position={authExists ? 'fixed' : 'static'}
				style={buttonStyle}
				className={authExists ? classes.appBar : classes.appBar2}>
				<Toolbar>
					<Typography
						variant='h6'
						color='inherit'
						className={classes.grow}
						component={Link}
						to={authExists ? LIST_PATH : '/'}>
						<img src={logo} width='150px' className='logoImage' alt='livedaze' />
					</Typography>
					{authExists ? (
						<React.Fragment>
							<AccountMenu
								avatarUrl={avatarUrl}
								displayName={displayName}
								onLogoutClick={handleLogout}
								goToAccount={goToAccount}
								closeAccountMenu={closeAccountMenu}
								handleMenu={handleMenu}
								anchorEl={anchorEl}
							/>
							<IconButton
								className={classes.menuButton}
								color='inherit'
								aria-label='Open drawer'
								onClick={handleDrawerToggle}>
								{/** DO NOT MODIFY onClick. It is working. **/}
								<MenuIcon />
							</IconButton>
						</React.Fragment>
					) : (
						<LoginMenu />
					)}
				</Toolbar>
			</AppBar>

			{authExists ? (
				<nav className={classes.drawer}>
					{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
					<Hidden smUp implementation='css'>
						<Drawer
							variant='temporary'
							anchor={theme.direction === 'rtl' ? 'right' : 'left'}
							open={mobileOpen}
							onClose={closeDrawerToggle}
							//open={this.state.mobileOpen}
							//onClose={this.handleDrawerToggle}
							classes={{
								paper: classes.drawerPaper
							}}>
							<div>
								<div className={classes.toolbar} />
								<Divider />
								<List>
									{[
										'Inbox',
										'Starred',
										'Send email',
										'Drafts'
									].map((text, index) => (
										<ListItem button key={text}>
											<ListItemIcon>
												{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
											</ListItemIcon>
											<ListItemText primary={text} />
										</ListItem>
									))}
								</List>
								<Divider />
								<List>
									{[ 'All mail', 'Trash', 'Spam' ].map((text, index) => (
										<ListItem button key={text}>
											<ListItemIcon>
												{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
											</ListItemIcon>
											<ListItemText primary={text} />
										</ListItem>
									))}
								</List>
							</div>
							{console.log('value of mobile Open from bottom Drawer' + mobileOpen)}
						</Drawer>
					</Hidden>
					<Hidden xsDown implementation='css'>
						<Drawer
							classes={{
								paper: classes.drawerPaper
							}}
							variant='permanent'
							open>
							<div>
								<div className={classes.toolbar} />
								<Divider />
								<List>
									{[
										'Inbox',
										'Starred',
										'Send email',
										'Drafts'
									].map((text, index) => (
										<ListItem button key={text}>
											<ListItemIcon>
												{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
											</ListItemIcon>
											<ListItemText primary={text} />
										</ListItem>
									))}
								</List>
								<Divider />
								<List>
									{[ 'All mail', 'Trash', 'Spam' ].map((text, index) => (
										<ListItem button key={text}>
											<ListItemIcon>
												{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
											</ListItemIcon>
											<ListItemText primary={text} />
										</ListItem>
									))}
								</List>
							</div>
						</Drawer>
					</Hidden>
				</nav>
			) : (
				''
			)}
		</div>
	</React.Fragment>
);

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
	mobileOpen: PropTypes.func
};

Navbar.defaultProps = {
	mobileOpen: false
};

export default withStyles(theme, { withTheme: true })(Navbar);
