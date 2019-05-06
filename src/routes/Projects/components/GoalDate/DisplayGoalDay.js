import React from 'react';
import moment from 'moment';
import Icon from '@mdi/react';
import PropTypes from 'prop-types';
import styles from './GoalDate.styles';
import { mdiKeyboardBackspace } from '@mdi/js';
import { Spring } from 'react-spring/renderprops';
import { Grid, Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

export const DisplayGoalDay = ({ goalDay, classes, onDelete }) => (
	<React.Fragment>
		<Grid item align='right' className={classes.goalDayTitle}>
			<Tooltip title='Reset Goal Day'>
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
