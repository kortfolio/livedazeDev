import { compose } from 'recompose';
import { reduxForm } from 'redux-form';
import { NEW_SLEEPTIME_FORM_NAME } from 'constants/formNames';
import { withStyles } from '@material-ui/core/styles';
import styles from './SleepTime.styles';

import { connect } from 'react-redux';
import { withHandlers, withStateHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import { firebaseConnect } from 'react-redux-firebase';
import { withNotifications } from 'modules/notification';
import { spinnerWhileLoading } from 'utils/components';
import { UserIsAuthenticated } from 'utils/router';

export default compose(
	reduxForm({
		form: NEW_SLEEPTIME_FORM_NAME,
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
			path: 'sleepTimes',
			queryParams: [ 'orderByChild=createdBy', `equalTo=${uid}` ]
		}
	]),
	// Map projects from state to props
	connect(({ firebase: { ordered } }) => ({
		sleepTimes: ordered.sleepTimes
	})),
	spinnerWhileLoading([ 'sleepTimes' ]),
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
		deleteSleepTime: (props) => (sleepTime) => {
			const { firebase, showError, showSuccess } = props;
			return firebase
				.remove(`sleepTimes/${sleepTime.key}`)
				.then(() => showSuccess('Reset Complete'))
				.catch((err) => {
					console.error('Error:', err); // eslint-disable-line no-console
					showError(err.message || 'Could not delete sleep time');
					return Promise.reject(err);
				});
		},
		handleDateChangeRaw: (props) => (e) => {
			e.preventDefault();
		}
	}),
	withStyles(styles)
);
