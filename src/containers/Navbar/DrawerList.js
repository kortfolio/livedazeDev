import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import BarChartIcon from '@material-ui/icons/BarChart';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';

import FeedbackIcon from '@material-ui/icons/Feedback';

import AlarmIcon from '@material-ui/icons/Alarm';
import theme from './NavbarTheme';
import { Link } from 'react-router-dom';

import { FOCUSTIME_PATH } from 'constants/paths';
import { LIST_PATH } from 'constants/paths';
import { Typography } from '@material-ui/core';

function DrawerList(props) {
	return (
		<React.Fragment>
			<List>
				{[ 'Home', 'Dashboard', 'Focus Time', 'Break Time' ].map((text, index) => (
					<ListItem
						button
						key={text}
						component={Link}
						to={
							<React.Fragment>
								{(index === 0 && LIST_PATH) || (index === 1 && FOCUSTIME_PATH)}
							</React.Fragment>
						}
						style={{
							textTransform: 'initial'
						}}>
						<ListItemIcon style={{ color: '#e2e2e2' }}>
							<React.Fragment>
								{index === 0 && <HomeIcon />}
								{index === 1 && <BarChartIcon />}
								{index === 2 && <AlarmIcon />}
								{index === 3 && <BeachAccessIcon />}
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
						{/*<ListItemText primary={text} />*/}
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{[ 'Settings', 'Notification', 'Feedback' ].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon style={{ color: '#e2e2e2' }}>
							<React.Fragment>
								{index === 0 && <SettingsIcon />}
								{index === 1 && <NotificationsIcon />}
								{index === 2 && <FeedbackIcon />}
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
