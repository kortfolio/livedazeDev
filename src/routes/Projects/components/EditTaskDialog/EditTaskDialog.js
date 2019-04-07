import React from 'react';
import PropTypes from 'prop-types';
import { required } from 'utils/form';
import { TextField } from 'redux-form-material-ui';
import { Field } from 'redux-form';
import { mdiPencilCircle } from '@mdi/js';
import Icon from '@mdi/react';
/* MATERIAL UI */
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { Fab, Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';

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
	showDelete,
	onEdit,
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
					<Field
						name='name'
						component={TextField}
						style={{ width: '100%', fontSize: '15px' }}
						validate={[ required ]}
						placeholder={name}
						autoComplete='off'
						multiline
						rowsMax='10'
						defaultValue='fkfkpfkpekfpekfpk'
					/>
					<form onSubmit={handleSubmit}>
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
	classes: PropTypes.object.isRequired, // from enhancer (withStyles)
	open: PropTypes.bool.isRequired,
	onRequestClose: PropTypes.func.isRequired
};
export default EditTaskDialog;
