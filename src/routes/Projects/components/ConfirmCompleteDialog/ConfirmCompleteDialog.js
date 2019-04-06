import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { required } from 'utils/form';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import Icon from '@mdi/react';
import { mdiCheckCircle } from '@mdi/js';
import { Grid, Fab } from '@material-ui/core';
const ConfirmCompleteDialog = ({ handleSubmit, open, onRequestClose, name, classes }) => (
	<Dialog open={open} onClose={onRequestClose} maxWidth='xs' fullWidth={true}>
		<Grid
			container
			justify='center'
			direction='row'
			alignItems='center'
			justify='center'
			spacing={0}>
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
								variant='outlined'
								size='small'
								color='primary'
								style={{
									textDecoration: 'none',
									letterSpacing: '0.1rem',
									fontFamily: 'isotonic',
									fontSize: '12px',
									marginRight: '0px',
									borderRadius: '50px'
								}}
								onClick={onRequestClose}>
								Not Yet
							</Button>

							<Fab
								size='small'
								variant='extended'
								aria-label='Delete'
								className={classes.fab}
								style={{
									textDecoration: 'none',
									letterSpacing: '0.1rem',
									fontFamily: 'isotonic',
									fontSize: '12px',
									marginRight: '0px',
									paddingLeft: '20px',
									paddingRight: '20px'
								}}
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

ConfirmCompleteDialog.propTypes = {
	//	handleSubmit: PropTypes.func.isRequired, // from enhancer (reduxForm)
	//	open: PropTypes.bool.isRequired,
	//	onRequestClose: PropTypes.func.isRequired
};
export default ConfirmCompleteDialog;
