import React from 'react';
import { required } from 'utils/form';
import { Field } from 'redux-form';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid, Fab, IconButton } from '@material-ui/core';
import { TextField } from 'redux-form-material-ui';
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
	<Dialog open={open} onClose={onRequestClose} maxWidth='xs' fullWidth={true}>
		<DialogTitle style={{ padding: '0px' }}>
			<div className='textDialogBold'>Review your Progress</div>
		</DialogTitle>
		<Grid
			container
			justify='center'
			direction='row'
			alignItems='center'
			spacing={0}
			className={classes.root}>
			<IconButton aria-label='Close' className={classes.closeButton} onClick={onRequestClose}>
				<CloseIcon />
			</IconButton>
			<DialogContent style={{ padding: '0px 10px 10px 10px' }}>
				<Grid item sm={12}>
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
								className={classes.fab2}
								type='submit'>
								SUBMIT
							</Fab>
						</DialogActions>
					</form>
				</Grid>
			</DialogContent>
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
