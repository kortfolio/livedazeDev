import { compose } from 'recompose';
import { reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import styles from './DialogForSelfRating.styles';

export default compose(
	reduxForm({
		form: 'UPDATE_SELFREVIEW_DIALOG_FORM',
		// Clear the form for future use (creating another project)
		onSubmit: (result, dispatch, props) => props.reset(),
		onSubmitSuccess: (result, dispatch, props) => props.reset()
	}),
	withStyles(styles)
);
