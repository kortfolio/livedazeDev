import { compose } from 'recompose';
import { reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import styles from './AccountSummary.styles';

export default compose(
	// make the component a redux-form
	reduxForm({ form: 'ACCOUNT_SUMMARY_FORM_NAME' }),
	// add styles as props
	withStyles(styles)
);
