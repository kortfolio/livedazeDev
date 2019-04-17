import React from 'react';
import moment from 'moment';
import { mdiStar, mdiStarOutline, mdiStarHalf } from '@mdi/js';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { Grid, Divider, Typography, IconButton } from '@material-ui/core';

import Icon from '@mdi/react';
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from 'prop-types';
import { isEmpty } from 'react-redux-firebase';
import DialogTitle from '@material-ui/core/DialogTitle';

import CloseIcon from '@material-ui/icons/Close';

const DisplayAllReviewsDialog = ({
	open,
	onRequestClose,
	ReviewsRating,
	AverageRating,
	RatingLength,
	classes
}) => (
	<Dialog open={open} onClose={onRequestClose} maxWidth='xs' fullWidth={true}>
		<DialogTitle align='center' className={classes.dialogText}>
			<div className={classes.dialogText}>My Progress</div>
			<IconButton aria-label='Close' className={classes.closeButton} onClick={onRequestClose}>
				<CloseIcon />
			</IconButton>
		</DialogTitle>
		<DialogContent>
			<Grid container justify='center' direction='row' alignItems='center' spacing={0}>
				<Typography className={classes.largeText}>{AverageRating}</Typography>
				<StarRatingComponent
					name='displayAvgStarRating'
					editing={false}
					starCount={5}
					value={AverageRating}
					renderStarIconHalf={(index, value) => {
						return (
							<span>
								<Icon
									path={index <= value ? mdiStarHalf : mdiStarHalf}
									size={1.5}
									color={index <= value ? '#ffd800' : '#ffd800'}
								/>
							</span>
						);
					}}
					renderStarIcon={(index, value) => {
						return (
							<span>
								<Icon
									path={index <= value ? mdiStar : mdiStarOutline}
									size={1.5}
									color={index <= value ? '#ffd800' : '#909090'}
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
					{RatingLength} Reviews
				</span>
			</Grid>

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
							<Grid item xs={6} sm={3}>
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
							<Grid item xs={6} sm={9}>
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
