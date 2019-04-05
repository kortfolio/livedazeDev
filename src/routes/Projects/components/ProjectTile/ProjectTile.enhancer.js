import PropTypes from 'prop-types';
import { compose, setPropTypes, withStateHandlers } from 'recompose';
import { reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import { TODOTASK_FORM_NAME } from 'constants/formNames';
import theme from './ProjectTile.styles';
import { withHandlers } from 'recompose';
import { firebaseConnect } from 'react-redux-firebase';
import { UserIsAuthenticated } from 'utils/router';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';

import { spinnerWhileLoading } from 'utils/components';
import { withNotifications } from 'modules/notification';

export default compose(
	withFirebase,
	UserIsAuthenticated,
	connect(({ firebase: { ordered } }) => ({
		projects: ordered.projects
	})),
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
		({ initialWasSent = false }) => ({
			wasSent: initialWasSent
		}),
		{
			toggleSent: ({ wasSent }) => () => ({
				wasSent: !wasSent
			})
		}

		// Setup Initial state for checkbox
	),
	// set proptypes used in HOCs
	setPropTypes({
		showSuccess: PropTypes.func.isRequired,
		showError: PropTypes.func.isRequired,
		firebase: PropTypes.shape(
			{
				//updateProfile: PropTypes.func.isRequired
			}
		)
	}),
	withHandlers({
		editProject: (props, name) => (newInstance) => {
			const { firebase, uid, showError, showSuccess, toggleDialog } = props;
			return firebase
				.update(`projects/${props.keykey}`, { ...newInstance })
				.then(() => {
					toggleDialog();
					//	showSuccess('modification successful');
				})
				.catch((err) => {
					console.error('Error:', err); // eslint-disable-line no-console
					//showError(err.message || 'Could not add project');
					return Promise.reject(err);
				});
		},
		isDone: (props, name) => (newInstance) => {
			const { firebase, uid, showError, showSuccess, toggleDialog2 } = props;
			console.log('are u done?');
		}
	}),
	// make the component a redux-form
	reduxForm({ form: TODOTASK_FORM_NAME }),
	// add styles as props
	withStyles(theme)
);
