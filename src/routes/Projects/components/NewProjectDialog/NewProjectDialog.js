import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { required } from 'utils/form';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Icon from '@mdi/react';
import { mdiPencilCircle } from '@mdi/js';
import { Grid, Fab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';

const DialogTitle = withStyles((theme) => ({
	root: {
		//borderBottom: `1px solid ${theme.palette.divider}`,
		margin: 0,
		padding: theme.spacing.unit * 2
	},
	closeButton: {
		position: 'absolute',
		right: theme.spacing.unit,
		top: theme.spacing.unit,
		color: theme.palette.grey[500]
	}
}))((props) => {
	const { children, classes, onRequestClose } = props;
	return (
		<MuiDialogTitle disableTypography className={classes.root}>
			{children}
			<IconButton aria-label='Close' className={classes.closeButton} onClick={onRequestClose}>
				<CloseIcon />
			</IconButton>
		</MuiDialogTitle>
	);
});

const NewProjectDialog = ({
	showDelete,
	classes,
	handleSubmit,
	open,
	onRequestClose,
	pristine,
	submitting
}) => (
	<Dialog open={open} onClose={onRequestClose} maxWidth='sm' fullWidth={true}>
		<Grid container justify='center' direction='row' alignItems='center' spacing={0}>
			<Grid item sm={2} className={classes.root}>
				<Icon path={mdiPencilCircle} color='#8693ab' size={2.5} />
			</Grid>
			<Grid item sm={10}>
				<DialogTitle id='customized-dialog-title' onRequestClose={onRequestClose}>
					<div className='textDialogBold'>ADD A TASK</div>
				</DialogTitle>

				<DialogContent style={{ padding: '0px 24px 0 0' }}>
					<Field
						name='name'
						component={TextField}
						style={{ width: '100%', fontSize: '12px' }}
						InputProps={{
							classes: {
								input: classes.resize
							}
						}}
						className={classes.textField}
						validate={[ required ]}
						placeholder='Write a task you need to complete today'
						autoComplete='off'
						rowsMax='10'
					/>
					<form onSubmit={handleSubmit}>
						<DialogActions>
							<Fab
								size='small'
								variant='extended'
								aria-label='Delete'
								className={classes.fab}
								type='submit'
								disabled={pristine || submitting}>
								{submitting ? 'Updating' : 'Update'}
							</Fab>
						</DialogActions>
					</form>
				</DialogContent>
			</Grid>
		</Grid>
	</Dialog>
);

NewProjectDialog.propTypes = {
	classes: PropTypes.object.isRequired, // from enhancer (withStyles)
	handleSubmit: PropTypes.func.isRequired, // from enhancer (reduxForm)
	open: PropTypes.bool.isRequired,
	onRequestClose: PropTypes.func.isRequired,
	pristine: PropTypes.bool.isRequired, // from enhancer (reduxForm)
	submitting: PropTypes.bool.isRequired // from enhancer (reduxForm)
};

export default NewProjectDialog;
