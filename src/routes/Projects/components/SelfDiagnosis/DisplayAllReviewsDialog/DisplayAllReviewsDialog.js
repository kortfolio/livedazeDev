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
			<Grid container justify='center' direction='row' alignItems='center' spacing={0}>
				<Typography className={classes.largeText}>{AverageRating}</Typography>
				<StarRatingComponent
					name='displayAvgStarRating'
					editing={false}
					starCount={5}
					value={Number.parseFloat(AverageRating)}
					renderStarIconHalf={(index, value) => {
						return (
							<span>
								<Icon
									path={index <= value ? mdiStarHalf : mdiStarHalf}
									size={1.5}
									color={index <= value ? '#ffd800' : 'ffd800'}
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
									color={index <= value ? '#ffd800' : 'white'}
								/>
							</span>
						);
					}}
				/>
				<span
					className={classes.largeText}
					style={{
						color: 'white',
						textTransform: 'none',
						fontSize: '12px'
					}}>
					{RatingLength} Reviews
				</span>
			</Grid>
			<IconButton aria-label='Close' className={classes.closeButton} onClick={onRequestClose}>
				<CloseIcon />
			</IconButton>
		</DialogTitle>
		<DialogContent className={classes.customDialogContent}>
			<Grid container justify='center' direction='row' alignItems='center' spacing={0} />
			{!isEmpty(ReviewsRating) &&
				ReviewsRating.slice(0).reverse().map((rating, ind) => (
					<Grid
						container
						justify='center'
						direction='row'
						alignItems='center'
						spacing={0}
						key={ind}>
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
							<Typography style={{ color: '#999', fontFamily: 'isotonic' }}>
								{moment(rating.value['createdAt']).fromNow()}
							</Typography>
						</Grid>
						<Grid item xs={12} sm={12}>
							<Typography style={{ color: '#333', fontFamily: 'isotonic' }}>
								{rating.value['feedback']}
							</Typography>
						</Grid>
						<Grid item xs={12} sm={12}>
							<Divider />
						</Grid>
					</Grid>
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
