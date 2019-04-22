import { compose } from 'recompose';
import { reduxForm } from 'redux-form';
import { TODOTASK_FORM_NAME } from 'constants/formNames';
import { withStyles } from '@material-ui/core/styles';
import styles from './EditTaskDialog.styles';
export default compose(
	reduxForm({
		form: TODOTASK_FORM_NAME,
		// Clear the form for future use (creating another project)
		//enableReinitialize: true,
		onSubmitSuccess: (result, dispatch, props) => props.reset()
	}),
	withStyles(styles)
);
