import React from 'react';
import { required } from 'utils/form';
import { Field } from 'redux-form';

import { mdiStar, mdiStarOutline, mdiStarHalf, mdiEmoticonHappyOutline } from '@mdi/js';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { Grid, Fab, IconButton } from '@material-ui/core';
import { TextField } from 'redux-form-material-ui';
import Icon from '@mdi/react';
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from 'prop-types';
import { StarRatingReduxFieldForm } from './StarRatingReduxFieldForm';
import CloseIcon from '@material-ui/icons/Close';
const DialogForSelfRating = ({
	handleSubmit,
	open,
	onRequestClose,
	classes,
	pristine,
	rating,
	submitting,
	display,
	isDeleteTab
}) => (
	<Dialog open={open} onClose={onRequestClose} maxWidth='sm' fullWidth={true}>
		<Grid container justify='center' direction='row' alignItems='center' spacing={0}>
			<Grid item sm={2} className={classes.root}>
				<Icon path={mdiEmoticonHappyOutline} size={3} color='black' height='100%' />
			</Grid>
			<Grid item sm={10} className={classes.root}>
				<div className='textDialogBold'>Review your Progress</div>
				<IconButton
					aria-label='Close'
					className={classes.closeButton}
					onClick={onRequestClose}>
					<CloseIcon />
				</IconButton>

				<DialogContent style={{ padding: '0px' }}>
					<Grid
						container
						justify='center'
						direction='row'
						alignItems='center'
						spacing={0}>
						<div className='textDialogSmall' />
						<Field
							name='starRating'
							component={StarRatingReduxFieldForm}
							fullWidth
							validate={[ required ]}
						/>
						<Field
							id='reviewRatingTextField'
							style={{ width: '100%' }}
							component={TextField}
							validate={[ required ]}
							name='feedback'
							placeholder='Describe your opinion about your progress.'
							autoComplete='off'
							margin='dense'
							rows='2'
							multiline
							variant='outlined'
							fullWidth
						/>
						<form onSubmit={handleSubmit}>
							<DialogActions align='right'>
								<Fab
									size='small'
									variant='extended'
									aria-label='Delete'
									className={classes.fab}
									type='submit'>
									SUBMIT
								</Fab>
							</DialogActions>
						</form>
					</Grid>
				</DialogContent>
			</Grid>
		</Grid>
	</Dialog>
);

DialogForSelfRating.propTypes = {
	handleSubmit: PropTypes.func.isRequired, // from enhancer (reduxForm)
	open: PropTypes.bool.isRequired,
	onRequestClose: PropTypes.func.isRequired
};

DialogForSelfRating.defaultProps = {
	isDeleteTab: false
};
export default DialogForSelfRating;
