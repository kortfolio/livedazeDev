import React from 'react';
import PropTypes from 'prop-types';
import { compose, withStateHandlers, withHandlers } from 'recompose';
import { withFirebase, firebaseConnect } from 'react-redux-firebase';
import ConfirmCompleteDialog from '../ConfirmCompleteDialog.1';

import { UserIsAuthenticated } from 'utils/router';
import { connect } from 'react-redux';
import Tooltip from '@material-ui/core/Tooltip';
import Icon from '@mdi/react';
import { Grid, Card, Typography, CardContent, Fab } from '@material-ui/core';
import { mdiStarOutline } from '@mdi/js';
import StarRatingComponent from 'react-star-rating-component';
import { mdiHelpCircleOutline } from '@mdi/js';

import { Checkbox, IconButton } from '@material-ui/core';
//	onDelete={() => deleteProject(project)}
import { mdiDelete } from '@mdi/js';
import { spinnerWhileLoading } from 'utils/components';
import { withNotifications } from 'modules/notification';

import { Field } from 'redux-form';

const buttonStyle = {
	textDecoration: 'none',
	letterSpacing: '0.1rem',
	fontFamily: 'isotonic',
	fontSize: '12px',
	marginRight: '0px',
	paddingLeft: '20px',
	paddingRight: '20px',
	backgroundColor: 'black'
};

const updateRating = (rating, lastRating, name, StarRating) => {
	rating = StarRating;
};

export const SelfDiagnosis = ({
	toggleConfirmDialog,
	wasSent,
	isDone,
	deleteProject,
	keykey,
	StarRating,
	name,
	rating,
	classes,
	updateSelfDiagnosis,
	uid
}) => (
	<Card className={classes.card}>
		<CardContent>
			<Grid
				container
				justify='center'
				style={{
					height: '100%'
				}}>
				<Icon path={mdiStarOutline} size={3} color='white' height='100%' />
			</Grid>
		</CardContent>
		<CardContent className={classes.content}>
			<Grid item align='right' className={classes.goalDayTitle}>
				<Tooltip title='Rate your progress. It refreshes every hour'>
					<Icon path={mdiHelpCircleOutline} size={0.5} color='white' />
				</Tooltip>
			</Grid>
			<Typography align='right' className={classes.CardTitleTextDecorator}>
				My Progress
			</Typography>
			<Grid container align='right' alignItems='flex-end' justify='flex-end' direction='row'>
				<Grid item xs={12}>
					<div className='starRatingComponent'>
						{/* STAR RATING COMPONENT */}
						<StarRatingComponent
							name='rate1'
							starCount={5}
							value={StarRating}
							onStarClick={updateRating}
							starColor='yellow'
						/>
					</div>
				</Grid>

				<Grid item xs={12}>
					<div>
						<ConfirmCompleteDialog
							onSubmit={updateSelfDiagnosis}
							open={wasSent}
							onRequestClose={toggleConfirmDialog}
							name={name}
							rating={StarRating}
							starRating={StarRating}
						/>
					</div>
					<Fab
						style={buttonStyle}
						variant='extended'
						size='small'
						aria-label='Add'
						onClick={toggleConfirmDialog}
						className={classes.outLinedBtn}>
						Update
					</Fab>
				</Grid>
			</Grid>
		</CardContent>
	</Card>
);

SelfDiagnosis.propTypes = {
	firebase: PropTypes.shape({
		push: PropTypes.func.isRequired
	}),
	toggleConfirmDialog: PropTypes.func, // from enhancer (withHandlers)
	wasSent: PropTypes.bool, // from enhancer (withStateHandlers)
	isDone: PropTypes.func
	//	classes: PropTypes.object.isRequired
};

const enhance = compose(
	withFirebase,
	UserIsAuthenticated,
	withNotifications,
	connect(({ firebase: { auth: { uid } } }) => ({ uid })),
	// Wait for uid to exist before going further
	spinnerWhileLoading([ 'uid' ]),
	// Create listeners based on current users UID
	firebaseConnect(({ params, uid }) => [
		{
			path: 'ReviewsRating',
			queryParams: [ 'orderByChild=createdBy', `equalTo=${uid}` ]
		}
	]),
	// Map projects from state to props
	connect(({ firebase: { ordered } }) => ({
		ReviewsRating: ordered.ReviewsRating
	})),
	withStateHandlers(
		({ initialWasSent = false }) => ({
			wasSent: initialWasSent
		}),
		{
			toggleConfirm: ({ wasSent }) => () => ({
				wasSent: !wasSent
			})
		}
	),
	withHandlers({
		toggleConfirmDialog: ({ wasSent, toggleConfirm }) => (event) => {
			return toggleConfirm();
		},

		//Workin
		updateSelfDiagnosis: (props) => (newInstance) => {
			const { firebase, uid, showError, showSuccess, starRating } = props;
			if (!uid) {
				//	return showError('You must be logged in to create a project');
			}
			//This is where you send data to firebase.
			return firebase
				.push('ReviewsRating', {
					...newInstance,
					createdBy: uid,
					createdAt: firebase.database.ServerValue.TIMESTAMP
				})
				.then(() => {
					showSuccess('done');
				})
				.catch((err) => {
					console.error('Error:', err); // eslint-disable-line no-console
					showError(err.message || 'Could not add project');
					return Promise.reject(err);
				});
		}
	})
);

export default enhance(SelfDiagnosis);
