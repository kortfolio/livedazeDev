import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToApp from '@material-ui/icons/ExitToApp';
import theme from './NavbarTheme';
import { Link } from 'react-router-dom';

import { LIST_PATH, ACCOUNT_PATH } from 'constants/paths';
import { Typography } from '@material-ui/core';

function DrawerList(props) {
	return (
		<React.Fragment>
			<List>
				{[ 'Home' ].map((text, index) => (
					<ListItem
						button
						key={text}
						style={{
							textTransform: 'initial'
						}}>
						<ListItemIcon style={{ color: '#e2e2e2' }}>
							<React.Fragment>{index === 0 && <HomeIcon />}</React.Fragment>
						</ListItemIcon>
						<ListItemText
							disableTypography
							primary={
								<Typography
									style={{
										color: '#FFFFFF',
										fontFamily: 'isotonicBold',
										textTransform: 'uppercase'
									}}>
									{text}
								</Typography>
							}
						/>
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{[ 'Account', 'Notification', 'Sign out' ].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon style={{ color: '#e2e2e2' }}>
							<React.Fragment>
								{index === 0 && <SettingsIcon />}
								{index === 1 && <NotificationsIcon />}
								{index === 2 && <ExitToApp />}
							</React.Fragment>
						</ListItemIcon>
						<ListItemText
							disableTypography
							primary={
								<Typography
									style={{
										color: '#FFFFFF',
										fontFamily: 'isotonicBold',
										textTransform: 'uppercase'
									}}>
									{text}
								</Typography>
							}
						/>
					</ListItem>
				))}
			</List>
		</React.Fragment>
	);
}

DrawerList.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(theme)(DrawerList);
