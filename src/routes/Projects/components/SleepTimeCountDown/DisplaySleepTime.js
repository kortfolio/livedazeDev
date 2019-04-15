import React from 'react';
import moment from 'moment';
import Icon from '@mdi/react';
import PropTypes from 'prop-types';
import styles from './SleepTime.styles';
import { Grid } from '@material-ui/core';
import { mdiKeyboardBackspace } from '@mdi/js';
import Tooltip from '@material-ui/core/Tooltip';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { SleepTimer } from './SleepTimer';

export const DisplaySleepTime = ({ classes, sleepTime, onDelete }) => (
	<CardContent className={classes.content}>
		<Grid item align='right' className={classes.goalDayTitle}>
			<Tooltip title='Delete current set time'>
				<Icon
					path={mdiKeyboardBackspace}
					onClick={onDelete}
					size={0.5}
					color='white'
					cursor='pointer'
				/>
			</Tooltip>
		</Grid>
		<Typography align='right' className={classes.boldText}>
			My Bedtime
		</Typography>
		{/* Goal Day Picker */}
		<SleepTimer sleepTime={sleepTime} onDelete={sleepTime} />
		<Typography align='right' className={classes.boldTextSmall}>
			Left until {moment(sleepTime).format('hh:mm a')}
		</Typography>
	</CardContent>
);

DisplaySleepTime.defaultProps = {
	showDelete: true
};
DisplaySleepTime.propTypes = {
	onDelete: PropTypes.func,
	showDelete: PropTypes.bool
};
export default withStyles(styles, { withTheme: true })(DisplaySleepTime);
