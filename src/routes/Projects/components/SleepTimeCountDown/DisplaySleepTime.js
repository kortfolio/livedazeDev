import React from 'react';
import Icon from '@mdi/react';
import PropTypes from 'prop-types';
import styles from './SleepTime.styles';
import { Grid } from '@material-ui/core';
import { mdiKeyboardBackspace } from '@mdi/js';
import Tooltip from '@material-ui/core/Tooltip';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { AfterSetSleepTime } from './SleepTime_BackUp/AfterSetSleepTime';
import moment from 'moment';

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
		<Typography align='right' className={classes.goalDayTitle}>
			My Bedtime
		</Typography>
		{/* Goal Day Picker */}
		<AfterSetSleepTime sleepTime={sleepTime} />
		<Typography align='right' className={classes.goalDayTitle}>
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
