import React from 'react';
import { required } from 'utils/form';
import { Field } from 'redux-form';

import { mdiStar } from '@mdi/js';
import { mdiStarOutline } from '@mdi/js';
import { mdiHelpCircleOutline } from '@mdi/js';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { Grid, Fab } from '@material-ui/core';
import { TextField } from 'redux-form-material-ui';
import Icon from '@mdi/react';
import { mdiCommentText } from '@mdi/js';
import StarRatingComponent from 'react-star-rating-component';

const ConfirmCompleteDialog = ({
	handleSubmit,
	open,
	onRequestClose,
	name,
	value,
	updateRating,
	starRating,
	classes,
	pristine,
	rating,
	submitting,
	display,
	isDeleteTab,
	TestBoi
}) => (
	<Dialog open={open} onClose={onRequestClose} maxWidth='xs' fullWidth={true}>
		<Grid container justify='center' direction='row' alignItems='center' spacing={0}>
			<div className='textDialogBold'>Rate and review</div>
			<DialogContent>
				<div className='textDialogSmall'>
					<div className='starRatingComponent'>
						<StarRatingComponent
							name='selfRating29'
							starCount={starRating}
							editing={false}
							value={starRating}
							emptyStarColor={'#fff'}
							renderStarIcon={(index, value) => {
								return (
									<span>
										<Icon
											path={index <= value ? mdiStar : mdiStar}
											size={1.5}
											color={index <= value ? '#ffd800' : 'white'}
										/>
									</span>
								);
							}}
						/>
					</div>
				</div>

				<Field
					id='reviewRatingTextField'
					style={{ width: '100%' }}
					component={TextField}
					name='feedback'
					validate={[ required ]}
					placeholder='Describe your opinion about your progress.'
					autoComplete='off'
					margin='dense'
					rows='5'
					multiline
					variant='outlined'
					value={starRating}
					rating={10000}
					fullWidth
				/>

				<form onSubmit={handleSubmit}>
					<DialogActions>
						<Fab
							variant='extended'
							size='small'
							color='primary'
							className={classes.outlinedConfirmDeleteFab}
							onClick={onRequestClose}
							value={rating}>
							CANCEL
						</Fab>
						<Fab
							size='small'
							variant='extended'
							aria-label='Delete'
							className={isDeleteTab ? classes.confirmDeleteFab : classes.fab}
							type='submit'>
							Okay, UPDATE My Rating
						</Fab>
					</DialogActions>
				</form>
			</DialogContent>
		</Grid>
	</Dialog>
);

ConfirmCompleteDialog.propTypes = {
	//	handleSubmit: PropTypes.func.isRequired, // from enhancer (reduxForm)
	//	open: PropTypes.bool.isRequired,
	//	onRequestClose: PropTypes.func.isRequired
};

ConfirmCompleteDialog.defaultProps = {
	isDeleteTab: false
};
export default ConfirmCompleteDialog;
