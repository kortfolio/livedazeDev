import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Icon from '@mdi/react';
import { mdiCheckCircle } from '@mdi/js';
import { Grid, Fab } from '@material-ui/core';

const ConfirmDeleteDialog = ({
	handleSubmit,
	open,
	onRequestClose,
	name,
	classes,
	pristine,
	submitting
}) => (
	<Dialog open={open} onClose={onRequestClose} maxWidth='xs' fullWidth={true}>
		<Grid container justify='center' direction='row' alignItems='center' spacing={0}>
			<Grid item sm={1} />
			<Grid item sm={2}>
				<Icon path={mdiCheckCircle} color='#9ed166' size={2.5} />
			</Grid>
			<Grid item sm={8}>
				<div className='textDialogBold'>Complete?</div>
				<DialogContent style={{ padding: '0px 24px 0 0' }}>
					<div className='textDialogSmall'>{name}</div>
					<form onSubmit={handleSubmit}>
						<DialogActions>
							<Button
								size='small'
								variant='extended'
								color='primary'
								className={classes.outlinedBtn}
								onClick={onRequestClose}>
								Not Yet
							</Button>
							<Fab
								size='small'
								variant='extended'
								aria-label='Delete'
								className={classes.fab}
								type='submit'>
								YES
							</Fab>
						</DialogActions>
					</form>
				</DialogContent>
			</Grid>
			<Grid item sm={1} />
		</Grid>
	</Dialog>
);

ConfirmDeleteDialog.propTypes = {
	//	handleSubmit: PropTypes.func.isRequired, // from enhancer (reduxForm)
	//	open: PropTypes.bool.isRequired,
	//	onRequestClose: PropTypes.func.isRequired
};
export default ConfirmDeleteDialog;
