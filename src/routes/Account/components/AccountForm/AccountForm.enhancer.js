import PropTypes from 'prop-types';
import { compose, setPropTypes } from 'recompose';
import { reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import { ACCOUNT_FORM_NAME } from 'constants/formNames';
import styles from './AccountForm.styles';

export default compose(
	// make the component a redux-form
	setPropTypes({
		onSubmit: PropTypes.func.isRequired // used by reduxForm
	}),
	reduxForm({ form: ACCOUNT_FORM_NAME }),
	// add styles as props
	withStyles(styles)
);
