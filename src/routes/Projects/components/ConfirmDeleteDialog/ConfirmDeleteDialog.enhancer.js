import { compose } from 'recompose';
import { reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import styles from './ConfirmDeleteDialog.styles';

export default compose(
	reduxForm({
		form: 'CONFIRM_DELETE_DIALOG_FORM',
		// Clear the form for future use (creating another project)
		onSubmitSuccess: (result, dispatch, props) => props.reset()
	}),
	withStyles(styles)
);
