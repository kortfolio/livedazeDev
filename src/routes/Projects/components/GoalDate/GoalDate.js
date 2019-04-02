import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import { Field } from 'redux-form';
import { goalDateValidate } from 'utils/form';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { mdiCalendarCheck } from '@mdi/js';
import { mdiHelpCircleOutline } from '@mdi/js';

import { isEmpty } from 'react-redux-firebase';
import Fab from '@material-ui/core/Fab';
import { DatePickerField } from './DatePickerField';

import { Grid } from '@material-ui/core';
import Icon from '@mdi/react';

import DisplayGoalDay from './DisplayGoalDay';

import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import styles from './GoalDate.styles';

const buttonStyle = {
	textDecoration: 'none',
	letterSpacing: '0.1rem',
	fontFamily: 'isotonic',
	fontSize: '12px',
	marginRight: '0px',
	marginTop: '10px',
	paddingLeft: '20px',
	paddingRight: '20px',
	backgroundColor: 'black'
};

const GoalDate = ({ handleSubmit, goalDays, deleteGoalDay, onDelete, classes }) => (
	<React.Fragment>
		<Card className={classes.card}>
			{isEmpty(goalDays) && (
				<React.Fragment>
					<CardContent>
						<Grid container style={{ height: '100%' }}>
							<Icon path={mdiCalendarCheck} size={3} color='white' />
						</Grid>
					</CardContent>
					{/* Card Content */}
					<div className={classes.details}>
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
							<Grid
								container
								alignItems='flex-start'
								justify='flex-end'
								direction='row'>
								<form onSubmit={handleSubmit}>
									<Field
										className='DatePickerCustomStyle'
										id='deadlineID'
										name='goalDay'
										type='text'
										placeholderText='MM/DD/YYY'
										component={DatePickerField}
										autoComplete='off'
										normalize={(value) =>
											value ? moment(value).format('MM/DD/YYYY') : null}
										validate={[ goalDateValidate ]}
									/>
									<Grid
										container
										alignItems='flex-start'
										justify='flex-end'
										direction='row'>
										<Fab
											style={buttonStyle}
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
					</div>
				</React.Fragment>
			)}

			{!isEmpty(goalDays) &&
				goalDays.map((goalDay, ind) => (
					<DisplayGoalDay
						key={`GoalDay-${goalDay.id}-${ind}`}
						goalDay={goalDay.value['goalDay']}
						onDelete={() => deleteGoalDay(goalDay)}
					/>
				))}
		</Card>
	</React.Fragment>
);

GoalDate.propTypes = {
	handleSubmit: PropTypes.func.isRequired, // from enhancer (reduxForm)
	goalDays: PropTypes.array, // from enhancer (connect + firebaseConnect - firebase)
	onDelete: PropTypes.func
};

DisplayGoalDay.defaultProps = {
	showDelete: true
};
export default withStyles(styles, { withTheme: true })(GoalDate);
