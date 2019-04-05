import { compose } from 'recompose';
import { reduxForm } from 'redux-form';
import { TODOTASK_FORM_NAME } from 'constants/formNames';
import { withStyles } from '@material-ui/core/styles';
import styles from './ConfirmCompleteDialog.styles';

export default compose(
	reduxForm({
		form: 'SERIOUS_MAN',

		// Clear the form for future use (creating another project)
		onSubmitSuccess: (result, dispatch, props) => props.reset()
	}),
	withStyles(styles)
);
