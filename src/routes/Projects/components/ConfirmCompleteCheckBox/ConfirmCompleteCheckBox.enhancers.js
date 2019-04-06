import { compose } from 'recompose';
import { reduxForm } from 'redux-form';
import { TODOTASK_FORM_NAME } from 'constants/formNames';
import { withStyles } from '@material-ui/core/styles';
import styles from './ConfirmCompleteCheckBox.style';

export default compose(
	reduxForm({
		form: 'SERIOUS_MAN',

		// Clear the form for future use (creating another project)
		onSubmitSuccess: (result, dispatch, props) => props.reset()
	}),
	withStateHandlers(
		// Setup initial state
		({ initialDialogOpen = false }) => ({
			newDialogOpen: initialDialogOpen
		}),
		// Add state handlers as props
		{
			toggleDialog: ({ newDialogOpen }) => () => ({
				newDialogOpen: !newDialogOpen
			})
		},
		({ initialDialogOpen = false }) => ({
			newDialogOpen2: initialDialogOpen
		}),
		// Add state handlers as props
		{
			toggleDialog2: ({ newDialogOpen2 }) => () => ({
				newDialogOpen2: !newDialogOpen2
			})
		}
		// Setup Initial state for checkbox
	),
	withStyles(styles)
);
