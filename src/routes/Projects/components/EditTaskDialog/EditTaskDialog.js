import React from 'react';
import Icon from '@mdi/react';
import PropTypes from 'prop-types';
import { mdiPencilCircle } from '@mdi/js';
import Dialog from '@material-ui/core/Dialog';
import { Fab, Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import EditTaskTextField from './EditTaskTextField';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

const DialogTitle = withStyles((theme) => ({
	root: {
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

export const EditTaskDialog = ({
	classes,
	handleSubmit,
	open,
	onRequestClose,
	name,
	pristine,
	submitting
}) => (
	<Dialog open={open} onClose={onRequestClose} maxWidth='sm' fullWidth>
		<Grid container justify='center' direction='row' alignItems='center' spacing={0}>
			<Grid item sm={2} className={classes.root}>
				<Icon path={mdiPencilCircle} color='#8693ab' size={2.5} />
			</Grid>
			<Grid item sm={10}>
				<DialogTitle id='customized-dialog-title' onRequestClose={onRequestClose}>
					<div className='textDialogBold'>EDIT A TASK</div>
				</DialogTitle>
				<DialogContent style={{ padding: '0px 24px 0 0' }}>
					<form onSubmit={handleSubmit}>
						<EditTaskTextField initialValues={{ name: name }} />
						<DialogActions>
							<Fab
								size='small'
								variant='extended'
								aria-label='Edit Task'
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

EditTaskDialog.propTypes = {
	classes: PropTypes.object.isRequired,
	open: PropTypes.bool.isRequired,
	onRequestClose: PropTypes.func.isRequired
};

export default EditTaskDialog;
