import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { sleepTimeValidate } from 'utils/form';

//MUI (Material UI) Core libraries
import Card from '@material-ui/core/Card';
import moment from 'moment';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { mdiHelpCircleOutline } from '@mdi/js';
import { mdiWeatherNight } from '@mdi/js';

import { isEmpty } from 'react-redux-firebase';
import Fab from '@material-ui/core/Fab';
import { TimePickerField } from './TimePickerField';

import { Grid } from '@material-ui/core';
import Icon from '@mdi/react';
import Tooltip from '@material-ui/core/Tooltip';
import { DisplaySleepTime } from './DisplaySleepTime';
import { withStyles } from '@material-ui/core/styles';
import styles from './SleepTime.styles';

const handleDateChangeRaw = (e) => {
	e.preventDefault();
};

export const SleepTime = ({
	handleSubmit,
	sleepTimes,
	sleepTime,
	deleteSleepTime,
	onDelete,
	classes
}) => (
	<Card className={classes.root}>
		<Icon path={mdiWeatherNight} size={3.5} color='white' style={{ height: '100%' }} />
		{isEmpty(sleepTimes) && (
			<CardContent className={classes.content}>
				<Grid item align='right' className={classes.goalDayTitle}>
					<Tooltip title='Set a bedtime. wake at the same time.'>
						<Icon path={mdiHelpCircleOutline} size={0.5} color='white' />
					</Tooltip>
				</Grid>
				<Typography align='right' className={classes.goalDayTitle}>
					My Bedtime
				</Typography>
				{/* Goal Day Picker */}
				<Grid container alignItems='flex-start' justify='flex-end' direction='row'>
					<form onSubmit={handleSubmit} autoComplete='off'>
						{/* Time Picker Field */}
						<Field
							className='DatePickerCustomStyle2'
							id='sleepTime'
							component={TimePickerField}
							name='sleepTime'
							placeholderText='00:00'
							validate={[ sleepTimeValidate ]}
							normalize={(value) => (value ? moment(value).format('LLLL') : null)}
							dateFormat='h:mm aa'
							timeCaption='Time'
							onChangeRaw={handleDateChangeRaw}
						/>
						<Grid container alignItems='flex-start' justify='flex-end' direction='row'>
							<Fab
								variant='extended'
								size='small'
								color='primary'
								aria-label='Add'
								className={classes.outLinedBtn}
								type='submit'>
								Update
							</Fab>
						</Grid>
					</form>
				</Grid>
			</CardContent>
		)}

		{!isEmpty(sleepTimes) &&
			sleepTimes.map((sleepTime, ind) => (
				<DisplaySleepTime
					key={`SleepTime-${sleepTime.id}-${ind}`}
					sleepTime={sleepTime.value['sleepTime']}
					onDelete={() => deleteSleepTime(sleepTime)}
					classes={classes}
				/>
			))}
	</Card>
);

SleepTime.propTypes = {
	handleSubmit: PropTypes.func.isRequired, // from enhancer (reduxForm)
	sleepTimes: PropTypes.array, // from enhancer (connect + firebaseConnect - firebase)
	onDelete: PropTypes.func
};

SleepTime.defaultProps = {
	showDelete: true
};

export default withStyles(styles, { withTheme: true })(SleepTime);
