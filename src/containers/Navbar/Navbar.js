import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import { LIST_PATH } from 'constants/paths';
import LoginMenu from './LoginMenu';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { CssBaseline, IconButton, Hidden, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import theme from './NavbarTheme';
import DrawerList from './DrawerList';
import defaultUserImageUrl from 'static/User.png';

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
						color='inherit'
						className='livedazeLogoFont'
						component={Link}
						to={authExists ? LIST_PATH : '/'}>
						Livedaze
					</Typography>
					{authExists ? (
						<React.Fragment>
							{/* <AccountMenu
								avatarUrl={avatarUrl}
								displayName={displayName}
								onLogoutClick={handleLogout}
								goToAccount={goToAccount}
								closeAccountMenu={closeAccountMenu}
								handleMenu={handleMenu}
								anchorEl={anchorEl}
							/> */}
							<section className={classes.rightToolbar}>
								<Chip
									avatar={
										<Avatar
											src={
												avatarUrl != null ? avatarUrl : defaultUserImageUrl
											}
										/>
									}
									label={displayName != null ? displayName : 'Guest'}
									onClick={goToAccount}
									style={{
										background: '#55587a',
										border: 'none',
										color: 'white',
										fontFamily: 'isotonicBold',
										cursor: 'pointer'
									}}
									className={classes.chip}
									variant='outlined'
								/>
								<IconButton
									className={classes.menuButton}
									color='inherit'
									aria-label='Open drawer'
									onClick={handleDrawerToggle}>
									{/** DO NOT MODIFY onClick. It is working. **/}
									<MenuIcon />
								</IconButton>
							</section>
						</React.Fragment>
					) : (
						<section className={classes.rightToolbar}>
							<LoginMenu />
						</section>
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
							classes={{
								paper: classes.drawerPaper
							}}>
							<div>
								<div className={classes.toolbar} />
								<Divider />
								<DrawerList onLogoutClick={handleLogout} />
							</div>
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
								<DrawerList onLogoutClick={handleLogout} />
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
	mobileOpen: PropTypes.bool
};

Navbar.defaultProps = {
	mobileOpen: false
};

export default withStyles(theme, { withTheme: true })(Navbar);
