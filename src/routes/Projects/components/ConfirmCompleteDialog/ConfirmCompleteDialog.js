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

const ConfirmCompleteDialog = ({ handleSubmit, open, onRequestClose }) => (
	<Dialog open={open} onClose={onRequestClose}>
		<DialogTitle id='new-project-dialog-title'>edit edit edit Task</DialogTitle>

		<form onSubmit={handleSubmit}>
			<DialogContent>
				<Field
					name='name'
					component={TextField}
					label='Add a Task'
					validate={[ required ]}
					fullWidth
				/>
			</DialogContent>

			<DialogActions>
				<Button type='submit' color='primary'>
					Update
				</Button>
				<Button onClick={onRequestClose} color='secondary'>
					Cancel
				</Button>
			</DialogActions>
		</form>
	</Dialog>
);

ConfirmCompleteDialog.propTypes = {
	//	handleSubmit: PropTypes.func.isRequired, // from enhancer (reduxForm)
	//	open: PropTypes.bool.isRequired,
	//	onRequestClose: PropTypes.func.isRequired
};
export default ConfirmCompleteDialog;
