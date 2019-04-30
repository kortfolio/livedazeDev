import React from 'react';
import moment from 'moment';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { Grid, Divider, Typography, IconButton } from '@material-ui/core';
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
	<Dialog open={open} onClose={onRequestClose} maxWidth='sm' fullWidth={true}>
		<DialogTitle align='center' className={classes.dialogText}>
			<div className={classes.dialogText}>VIEW ALL HISTORY</div>
			<Grid container justify='center' direction='row' alignItems='center' spacing={0}>
				<Typography className={classes.largeText}>{AverageRating}</Typography>
				<IconButton
					aria-label='Close'
					className={classes.closeButton}
					onClick={onRequestClose}>
					<CloseIcon />
				</IconButton>
			</Grid>
		</DialogTitle>

		<DialogContent className={classes.customDialogContent}>
			{!isEmpty(ReviewsRating) &&
				ReviewsRating.slice(0).reverse().map((project, ind) => (
					<Grid
						container
						direction='row'
						alignItems='center'
						justify='center'
						spacing={8}
						key={ind}>
						<Grid item xs={4} sm={2}>
							<Typography
								style={{
									color: 'white',
									//	border: '1px ',
									borderRadius: '10px',
									fontSize: '10px',
									background: project.value['isDone']
										? '#4cb15d'
										: 'rgb(225, 0, 80)',
									textTransform: 'uppercase',
									fontFamily: 'isotonicBold',
									textAlign: 'center',
									width: '80px'
								}}>
								{project.value['isDone'] ? 'complete' : 'Incomplete'}
							</Typography>
						</Grid>
						<Grid item xs={8} sm={8}>
							<span
								style={{
									color: '#333',
									fontSize: '10px',
									lineHeight: '1px'
								}}>
								{project.value['name']}
							</span>
						</Grid>
						<Grid item xs={12} sm={2} align='right'>
							<span
								style={{
									color: '#999',
									textAlign: 'right',
									textTransform: 'uppercase',
									fontSize: '10px',
									width: '20px'
								}}>
								{moment(project.value['createdAt']).format('LL')}
							</span>
						</Grid>
						<Grid item xs={12}>
							<Divider />
						</Grid>

						{/* {moment(rating.value['createdAt']).fromNow()} */}
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
