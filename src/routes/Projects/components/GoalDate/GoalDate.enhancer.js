import { compose } from 'recompose';
import { reduxForm } from 'redux-form';
import { NEW_GOALDATE_FORM_NAME } from 'constants/formNames';

import { connect } from 'react-redux';

import { withHandlers, withStateHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import { firebaseConnect } from 'react-redux-firebase';
import { withNotifications } from 'modules/notification';
import { spinnerWhileLoading } from 'utils/components';
import { UserIsAuthenticated } from 'utils/router';

export default compose(
	reduxForm({
		form: NEW_GOALDATE_FORM_NAME,
		onSubmitSuccess: (result, dispatch, props) => props.reset()
	}),
	// redirect to /login if user is not logged in
	UserIsAuthenticated,
	// Map auth uid from state to props
	connect(({ firebase: { auth: { uid } } }) => ({ uid })),
	// Wait for uid to exist before going further
	spinnerWhileLoading([ 'uid' ]),
	// Create listeners based on current users UID
	firebaseConnect(({ params, uid }) => [
		{
			path: 'goalDays',
			queryParams: [ 'orderByChild=createdBy', `equalTo=${uid}` ]
		}
	]),
	// Map projects from state to props
	connect(({ firebase: { ordered } }) => ({
		goalDays: ordered.goalDays
	})),
	spinnerWhileLoading([ 'goalDays' ]),
	// Add props.router
	withRouter,
	// Add props.showError and props.showSuccess
	withNotifications,
	// Add state and state handlers as props
	withStateHandlers(
		// Setup initial state
		({ initialDialogOpen = false }) => ({
			newDialogOpen: initialDialogOpen
		})
	),
	withHandlers({
		deleteGoalDay: (props) => (goalDay) => {
			const { firebase, showError, showSuccess } = props;
			return firebase
				.remove(`goalDays/${goalDay.key}`)
				.then(() => showSuccess('goal day deleted successfully'))
				.catch((err) => {
					console.error('Error:', err); // eslint-disable-line no-console
					showError(err.message || 'Could not delete project');
					return Promise.reject(err);
				});
		}
	})
);
