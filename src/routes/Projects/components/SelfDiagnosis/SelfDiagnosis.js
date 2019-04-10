import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { spinnerWhileLoading } from 'utils/components';
import { withNotifications } from 'modules/notification';
import { compose, withStateHandlers, withHandlers } from 'recompose';
import { withFirebase, firebaseConnect } from 'react-redux-firebase';

import Tooltip from '@material-ui/core/Tooltip';
import { UserIsAuthenticated } from 'utils/router';
import { Grid, Card, Typography, CardContent } from '@material-ui/core';

import Icon from '@mdi/react';
import { mdiStar, mdiStarOutline, mdiHelpCircleOutline } from '@mdi/js';

import StarRatingComponent from 'react-star-rating-component';
import DialogForSelfRating from '../DialogForSelfRating';

export const SelfDiagnosis = ({
	toggleConfirmDialog,
	wasSent,
	enhancedStarRating,
	rating,
	classes,
	updateSelfDiagnosis
}) => (
	<Card className={classes.card}>
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
					{/* Dialog - Add Comment about Review */}
					<DialogForSelfRating
						onSubmit={updateSelfDiagnosis}
						open={wasSent}
						onRequestClose={toggleConfirmDialog}
						starRating={enhancedStarRating}
					/>
					{/* Star Rating Component */}
					<div className='starRatingComponent'>
						<StarRatingComponent
							name='selfRating'
							starCount={5}
							value={rating}
							onStarClick={toggleConfirmDialog}
							renderStarIcon={(index, value) => {
								return (
									<span>
										<Icon
											path={index <= value ? mdiStar : mdiStarOutline}
											size={1.5}
											color={index <= value ? '#ffd800' : '#f5f5f5'}
										/>
									</span>
								);
							}}
						/>
					</div>
				</Grid>
			</Grid>
		</CardContent>
	</Card>
);

SelfDiagnosis.propTypes = {
	firebase: PropTypes.shape({
		push: PropTypes.func.isRequired
	}),
	toggleConfirmDialog: PropTypes.func,
	updateStarRatingDialog: PropTypes.func, // from enhancer (withHandlers)
	wasSent: PropTypes.bool, // from enhancer (withStateHandlers)
	isDone: PropTypes.func,
	enhancedStarRating: PropTypes.number
};

const enhance = compose(
	withFirebase,
	UserIsAuthenticated,
	withNotifications,
	connect(({ firebase: { auth: { uid } } }) => ({ uid })),
	spinnerWhileLoading([ 'uid' ]),
	firebaseConnect(({ params, uid }) => [
		{
			path: 'ReviewsRating',
			queryParams: [ 'orderByChild=createdBy', `equalTo=${uid}` ]
		}
	]),
	connect(({ firebase: { ordered } }) => ({
		ReviewsRating: ordered.ReviewsRating
	})),
	withStateHandlers(
		({ initialWasSent = false, initialEnhancedStarRating = 0 }) => ({
			wasSent: initialWasSent,
			enhancedStarRating: initialEnhancedStarRating
		}),
		{
			toggleConfirm: ({ wasSent, rating }) => (rating) => ({
				wasSent: !wasSent,
				enhancedStarRating: rating
			})
		}
	),
	withHandlers({
		toggleConfirmDialog: ({ rating, toggleConfirm }) => (rating) => {
			if (rating > 0) {
				return toggleConfirm(rating);
			} else return toggleConfirm();
		},

		updateSelfDiagnosis: (props, rating) => (newInstance) => {
			const { firebase, uid, showError, showSuccess, toggleConfirm } = props;
			if (!uid) {
				return showError('You must be logged in to upload a review');
			}
			return firebase
				.push('ReviewsRating', {
					...newInstance,
					starRating: props.enhancedStarRating,
					createdBy: uid,
					createdAt: firebase.database.ServerValue.TIMESTAMP
				})
				.then(() => {
					showSuccess('Upload complete');
					toggleConfirm();
				})
				.catch((err) => {
					console.error('Error:', err); // eslint-disable-line no-console
					showError(err.message || 'Could not update self review');
					return Promise.reject(err);
				});
		}
	})
);

export default enhance(SelfDiagnosis);
