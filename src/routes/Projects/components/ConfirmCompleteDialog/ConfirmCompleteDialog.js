import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Icon from '@mdi/react';
import { mdiCheckCircle } from '@mdi/js';

import { mdiAlert } from '@mdi/js';
import { Grid, Fab } from '@material-ui/core';
const ConfirmCompleteDialog = ({
	handleSubmit,
	open,
	onRequestClose,
	name,
	classes,
	pristine,
	submitting,
	display,
	isDeleteTab
}) => (
	<Dialog open={open} onClose={onRequestClose} maxWidth='xs' fullWidth={true}>
		<Grid container justify='center' direction='row' alignItems='center' spacing={0}>
			<Grid item sm={1} />
			<Grid item sm={2}>
				{isDeleteTab ? (
					<Icon path={mdiAlert} color='#dd000b' size={2.5} />
				) : (
					<Icon path={mdiCheckCircle} color='#9ed166' size={2.5} />
				)}
			</Grid>
			<Grid item sm={8}>
				<div className='textDialogBold'>{isDeleteTab ? 'Delete Task?' : 'Complete?'}</div>
				<DialogContent style={{ padding: '0px 24px 0 0' }}>
					<div className='textDialogSmall'>
						{isDeleteTab ? (
							'Deleting a task will permanentely remove it from your daily to do list.'
						) : (
							name
						)}
					</div>
					<form onSubmit={handleSubmit}>
						<DialogActions>
							<Fab
								variant='extended'
								size='small'
								color='primary'
								className={classes.outlinedConfirmDeleteFab}
								onClick={onRequestClose}>
								{isDeleteTab ? 'No, Keep Task.' : 'Not Yet'}
							</Fab>
							<Fab
								size='small'
								variant='extended'
								aria-label='Delete'
								className={isDeleteTab ? classes.confirmDeleteFab : classes.fab}
								type='submit'>
								{isDeleteTab ? 'Yes, Delete Task.' : 'Yes, It is Completed.'}
							</Fab>
						</DialogActions>
					</form>
				</DialogContent>
			</Grid>
			<Grid item sm={1} />
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
