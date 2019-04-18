import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'react-redux-firebase';
import moment from 'moment';
import { Field } from 'redux-form';
import { goalDateValidate } from 'utils/form';
import Fab from '@material-ui/core/Fab';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@mdi/react';
import { mdiCalendarCheck } from '@mdi/js';
import DisplayGoalDay from './DisplayGoalDay';
import { mdiHelpCircleOutline } from '@mdi/js';
import { DatePickerField } from './DatePickerField';

import styles from './GoalDate.styles';

const handleDateChangeRaw = (e) => {
	e.preventDefault();
};
const GoalDate = ({ handleSubmit, goalDays, deleteGoalDay, onDelete, classes }) => (
	<Card className={classes.root}>
		<Icon path={mdiCalendarCheck} size={3.5} color='white' style={{ height: '100%' }} />
		{!isEmpty(goalDays) &&
			goalDays.map((goalDay, ind) => (
				<CardContent className={classes.content} key={`GoalDay-${goalDay.id}-${ind}`}>
					<DisplayGoalDay
						goalDay={goalDay.value['goalDay']}
						onDelete={() => deleteGoalDay(goalDay)}
					/>
				</CardContent>
			))}

		{isEmpty(goalDays) && (
			<CardContent className={classes.content}>
				<Grid item align='right' className={classes.goalDayTitle}>
					<Tooltip title='Set your goals high, and don&#39;t stop till you get there.'>
						<Icon path={mdiHelpCircleOutline} size={0.5} color='white' />
					</Tooltip>
				</Grid>
				<Typography align='right' className={classes.goalDayTitle}>
					My Goal Day
				</Typography>
				{/* Goal Day Picker */}
				<Grid container alignItems='flex-start' justify='flex-end' direction='row'>
					<form onSubmit={handleSubmit}>
						<Field
							normalize={(value) =>
								value ? moment(value).format('MM/DD/YYYY') : null}
							validate={[ goalDateValidate ]}
							onChangeRaw={handleDateChangeRaw}
							className='DatePickerCustomStyle'
							component={DatePickerField}
							placeholderText='MM/DD/YYY'
							autoComplete='off'
							name='goalDay'
							type='text'
						/>
						<Grid container alignItems='flex-start' justify='flex-end' direction='row'>
							<Fab
								variant='extended'
								size='small'
								color='primary'
								aria-label='Update Goal Day'
								className={classes.outLinedBtn}
								type='submit'>
								Update
							</Fab>
						</Grid>
					</form>
				</Grid>
			</CardContent>
		)}
	</Card>
);

GoalDate.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	goalDays: PropTypes.array,
	onDelete: PropTypes.func
};

DisplayGoalDay.defaultProps = {
	showDelete: true
};
export default withStyles(styles, { withTheme: true })(GoalDate);
