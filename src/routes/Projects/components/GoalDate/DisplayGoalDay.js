import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Tooltip } from '@material-ui/core';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@mdi/react';
import { mdiKeyboardBackspace } from '@mdi/js';
import { Spring } from 'react-spring/renderprops';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from './GoalDate.styles';

export const DisplayGoalDay = ({ goalDay, classes, onDelete }) => (
	<React.Fragment>
		<Grid item align='right' className={classes.goalDayTitle}>
			<Tooltip title='Set your goals high, and don&#39;t stop till you get there.'>
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
			My Goal Day
		</Typography>
		<Grid
			container
			alignItems='flex-start'
			justify='flex-end'
			direction='row'
			style={{ width: '100%' }}>
			<Spring
				from={{ number: 0 }}
				to={{
					number: Math.abs(moment(new Date(), 'days').diff(goalDay, 'days')) + 1
				}}>
				{(props) => (
					<div className='livedaze_daysRemaining'>{Math.floor(props.number)}</div>
				)}
			</Spring>
			<span className='DaysLeftTextDecorator'>
				Days
				<br />
				Left
			</span>
		</Grid>
		<Typography align='right' className={classes.goalDayTitle}>
			{goalDay}
		</Typography>
	</React.Fragment>
);

DisplayGoalDay.defaultProps = {
	showDelete: true
};
DisplayGoalDay.propTypes = {
	onDelete: PropTypes.func,
	showDelete: PropTypes.bool
};

export default withStyles(styles, { withTheme: true })(DisplayGoalDay);
