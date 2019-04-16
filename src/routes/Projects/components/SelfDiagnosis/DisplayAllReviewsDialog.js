import React from 'react';
import { required } from 'utils/form';
import { Field } from 'redux-form';
import moment from 'moment';
import { mdiStar, mdiStarOutline } from '@mdi/js';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { Grid, Fab, Divider, Typography } from '@material-ui/core';
import { TextField } from 'redux-form-material-ui';
import Icon from '@mdi/react';
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { spinnerWhileLoading } from 'utils/components';
import { withNotifications } from 'modules/notification';
import { compose, withStateHandlers, withHandlers } from 'recompose';
import { withFirebase, firebaseConnect } from 'react-redux-firebase';

import Tooltip from '@material-ui/core/Tooltip';
import { UserIsAuthenticated } from 'utils/router';
import { isEmpty, isLoaded, getVal, populate } from 'react-redux-firebase';

import { Route, Switch } from 'react-router-dom';
import DialogForSelfRating from '../DialogForSelfRating';

export const DisplayAllReviewsDialog = ({
	open,
	onRequestClose,
	ReviewsRating,
	AverageRating,
	RatingLength
}) => (
	<Dialog open={open} onClose={onRequestClose} maxWidth='sm' fullWidth={true}>
		<DialogContent>
			My Progress<br />
			{AverageRating}
			<StarRatingComponent
				name='displayAvgStarRating'
				editing={false}
				starCount={5}
				value={AverageRating}
				renderStarIcon={(index, value) => {
					return (
						<span>
							<Icon
								path={index <= value ? mdiStar : mdiStarOutline}
								size={2}
								color={index <= value ? '#ffd800' : '#f5f5f5'}
							/>
						</span>
					);
				}}
			/>
			<span
				style={{
					color: '#999',

					textTransform: 'none'
				}}>
				{' '}
				{RatingLength} Ratings
			</span>
			{!isEmpty(ReviewsRating) &&
				ReviewsRating.map((rating, ind) => (
					<React.Fragment>
						<Grid
							container
							justify='center'
							direction='row'
							alignItems='center'
							spacing={0}>
							{/**	<Grid item xs={12} md={4}> */}
							<Grid item xs={6} sm={4}>
								<StarRatingComponent
									name='displayAvgStarRating'
									editing={false}
									starCount={5}
									value={Number.parseInt(rating.value['starRating'])}
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
							</Grid>
							<Grid item xs={6} sm={8}>
								<Typography style={{ color: '#999' }}>
									{moment(rating.value['createdAt']).fromNow()}

									{/* {moment(rating.value['createdAt']).format('ll hh:mm a')} */}
								</Typography>
							</Grid>
							<Grid item xs={12} sm={12}>
								<Typography>{rating.value['feedback']}</Typography>
							</Grid>
						</Grid>
						<Divider />
					</React.Fragment>
				))}
		</DialogContent>
	</Dialog>
);

DisplayAllReviewsDialog.propTypes = {
	//handleSubmit: PropTypes.func.isRequired, // from enhancer (reduxForm)
	open: PropTypes.bool.isRequired,
	onRequestClose: PropTypes.func.isRequired
};

DisplayAllReviewsDialog.defaultProps = {
	isDeleteTab: false
};
export default DisplayAllReviewsDialog;
