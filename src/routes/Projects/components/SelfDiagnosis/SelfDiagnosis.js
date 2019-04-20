import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { spinnerWhileLoading } from 'utils/components';
import { withNotifications } from 'modules/notification';
import { withStateHandlers, withHandlers } from 'recompose';
import { withFirebase, firebaseConnect } from 'react-redux-firebase';
import Tooltip from '@material-ui/core/Tooltip';
import { UserIsAuthenticated } from 'utils/router';
import { Grid, Card, Typography, CardContent, Fab } from '@material-ui/core';
import { isEmpty } from 'react-redux-firebase';
import Icon from '@mdi/react';
import { mdiStar, mdiStarOutline, mdiHelpCircleOutline, mdiStarFace } from '@mdi/js';
import StarRatingComponent from 'react-star-rating-component';
import DialogForSelfRating from '../DialogForSelfRating';
import DisplayAllReviewsDialog from './DisplayAllReviewsDialog/index';

let sumAll = 0;

export const SelfDiagnosis = ({
	toggleConfirmDialog,
	toggleDisplayReviewDialog,
	ReviewsRating,
	wasOpen,
	wasSent,
	classes,
	updateSelfDiagnosis
}) => (
	<Card className={classes.root} style={{ height: '200px' }}>
		<Icon path={mdiStarFace} size={3.5} color='white' style={{ height: '100%' }} />
		<CardContent className={classes.content}>
			<Grid item align='right' className={classes.goalDayTitle}>
				<Tooltip title='Rate your progress.'>
					<Icon path={mdiHelpCircleOutline} size={0.5} color='white' />
				</Tooltip>
			</Grid>
			<Typography align='right' className={classes.CardTitleTextDecorator}>
				My Progress
			</Typography>
			<Grid container align='right' alignItems='flex-end' justify='flex-end' direction='row'>
				<DialogForSelfRating
					onSubmit={updateSelfDiagnosis}
					open={wasSent}
					onRequestClose={toggleConfirmDialog}
				/>
				<Fab
					aria-label='Write a Review'
					variant='extended'
					size='small'
					align='right'
					onClick={toggleConfirmDialog}
					className={classes.outLinedBtn2}>
					Write a Review
				</Fab>
				<Grid item xs={12}>
					<div className='starRatingComponent'>
						{!isEmpty(ReviewsRating) &&
							ReviewsRating.map((rating, ind) => (
								<div style={{ display: 'none' }} key={ind}>
									{(sumAll += rating.value['starRating'])}
								</div>
							))}
						<span className='totalRatings'>
							{!isEmpty(ReviewsRating) ? (
								(sumAll / ReviewsRating.length).toFixed(1)
							) : (
								0
							)}
						</span>
						<StarRatingComponent
							name='displayAvgStarRating'
							value={
								!isEmpty(ReviewsRating) ? (
									sumAll / ReviewsRating.length.toFixed(1)
								) : (
									0
								)
							}
							editing={false}
							starCount={5}
							renderStarIcon={(index, value) => {
								return (
									<span>
										<Icon
											path={index <= value ? mdiStar : mdiStarOutline}
											size={0.6}
											color={index <= value ? '#ffd800' : '#f5f5f5'}
										/>
									</span>
								);
							}}
						/>
						<DisplayAllReviewsDialog
							open={wasOpen}
							onRequestClose={toggleDisplayReviewDialog}
							ReviewsRating={ReviewsRating}
							AverageRating={
								!isEmpty(ReviewsRating) ? (
									(sumAll / ReviewsRating.length).toFixed(1)
								) : (
									0
								)
							}
							RatingLength={!isEmpty(ReviewsRating) ? ReviewsRating.length : 0}
						/>
						<span
							className='totalRatings'
							onClick={toggleDisplayReviewDialog}
							style={{
								color: 'white',
								textDecoration: 'underline',
								cursor: 'pointer',
								textTransform: 'none'
							}}>
							{!isEmpty(ReviewsRating) ? ReviewsRating.length : 0}
							Rating
						</span>
						<div style={{ display: 'none' }}>{(sumAll = 0)}</div>
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
	toggleDisplayReviewDialog: PropTypes.func,
	average: PropTypes.number,
	sumAll: PropTypes.number,
	updateStarRatingDialog: PropTypes.func, // from enhancer (withHandlers)
	wasSent: PropTypes.bool, // from enhancer (withStateHandlers)
	isDone: PropTypes.func,
	ReviewsRating: PropTypes.array,
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
		({ initialWasSent = false }) => ({
			wasSent: initialWasSent,
			wasOpen: initialWasSent
		}),
		{
			toggleConfirm: ({ wasSent }) => (event) => ({
				wasSent: !wasSent
			}),

			toggleDisplayReview: ({ wasOpen }) => (event) => ({
				wasOpen: !wasOpen
			})
		}
	),
	withHandlers({
		toggleConfirmDialog: ({ wasSent, toggleConfirm }) => (event) => {
			return toggleConfirm();
		},
		toggleDisplayReviewDialog: ({ wasOpen, toggleDisplayReview }) => (event) => {
			return toggleDisplayReview();
		},
		updateSelfDiagnosis: (props) => (newInstance) => {
			const { firebase, uid, showError, showSuccess, toggleConfirm } = props;
			if (!uid) {
				return showError('You must be logged in to upload a review');
			}

			return firebase
				.push('ReviewsRating', {
					...newInstance,
					createdBy: uid,
					createdAt: firebase.database.ServerValue.TIMESTAMP
				})
				.then(() => {
					showSuccess('Upload rating complete');
					toggleConfirm();
				})
				.catch((err) => {
					console.error('Error:', err); // eslint-disable-line no-console
					showError(err.message || 'Could not update self review');
					return Promise.reject(err);
				});
		},
		clearStuff: (props) => (event) => {
			props.reset();
		}
	})
);

export default enhance(SelfDiagnosis);
