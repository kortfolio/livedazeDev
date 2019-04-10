import { compose } from 'redux';
import { connect } from 'react-redux';
import { LIST_PATH } from 'constants/paths';
import { withHandlers, withStateHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import { firebaseConnect } from 'react-redux-firebase';
import { withStyles } from '@material-ui/core/styles';
import { withNotifications } from 'modules/notification';
import { spinnerWhileLoading } from 'utils/components';
import { UserIsAuthenticated } from 'utils/router';
//import theme from 'containers/Navbar/NavbarTheme';
import theme from './ProjectsPage.styles.1';

export default compose(
	// redirect to /login if user is not logged in
	UserIsAuthenticated,
	// Map auth uid from state to props
	connect(({ firebase: { auth: { uid } } }) => ({
		uid
	})),
	// Wait for uid to exist before going further
	spinnerWhileLoading([ 'uid' ]),
	// Create listeners based on current users UID
	firebaseConnect(({ params, uid }) => [
		{
			path: 'projects',
			queryParams: [ 'orderByChild=createdBy', `equalTo=${uid}` ]
		}
	]),
	// Map projects from state to props
	connect(({ firebase: { ordered } }) => ({
		projects: ordered.projects
	})),
	spinnerWhileLoading([ 'projects' ]),
	// Add props.router
	withRouter,
	// Add props.showError and props.showSuccess
	withNotifications,
	// Add state and state handlers as props
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
	),
	// Add handlers as props
	withHandlers({
		addGoalDate: (props) => (newInstance) => {
			const { firebase, uid, showError, showSuccess } = props;
			if (!uid) {
				return showError('You must be logged in to create a project');
			}
			//This is where you send data to firebase.
			return firebase
				.push('goalDays', {
					...newInstance,
					createdBy: uid,
					createdAt: firebase.database.ServerValue.TIMESTAMP
				})
				.then(() => {
					showSuccess('Your goal day is sucessfully set. Good Luck!');
				})
				.catch((err) => {
					console.error('Error:', err); // eslint-disable-line no-console
					showError(err.message || 'Could not add project');
					return Promise.reject(err);
				});
		},
		addSleepTime: (props) => (newInstance) => {
			const { firebase, uid, showError, showSuccess } = props;
			if (!uid) {
				return showError('You must be logged in to create a project');
			}
			//This is where you send data to firebase.
			return firebase
				.push('sleepTimes', {
					...newInstance,
					createdBy: uid,
					createdAt: firebase.database.ServerValue.TIMESTAMP
				})
				.then(() => {
					showSuccess('done');
				})
				.catch((err) => {
					console.error('Error:', err); // eslint-disable-line no-console
					showError(err.message || 'Could not add project');
					return Promise.reject(err);
				});
		},
		addProject: (props) => (newInstance) => {
			const { firebase, uid, showError, showSuccess, toggleDialog } = props;
			if (!uid) {
				return showError('You must be logged in to create a project');
			}
			//This is where you send data to firebase.
			return firebase
				.push('projects', {
					...newInstance,
					isDone: false,
					createdBy: uid,
					createdAt: firebase.database.ServerValue.TIMESTAMP
				})
				.then(() => {
					toggleDialog();
					showSuccess('New Task is added sucessfuly.');
				})
				.catch((err) => {
					console.error('Error:', err); // eslint-disable-line no-console
					showError(err.message || 'Could not add project');
					return Promise.reject(err);
				});
		},
		editProject: (props) => (newInstance) => {
			const { firebase, showError, showSuccess, toggleDialog } = props;
			return firebase
				.update(`projects/${props.keykey}`, { name: props.name })
				.then(() => {
					toggleDialog();
					showSuccess('edit project success');
				})
				.catch((err) => {
					console.error('Error:', err); // eslint-disable-line no-console
					showError(err.message || 'Could not edit project');
					return Promise.reject(err);
				});
		},
		deleteProject: (props) => (project) => {
			const { firebase, showError, showSuccess } = props;
			return firebase
				.remove(`projects/${project.key}`)
				.then(() => showSuccess('Project deleted successfully'))
				.catch((err) => {
					console.error('Error:', err); // eslint-disable-line no-console
					showError(err.message || 'Could not delete project');
					return Promise.reject(err);
				});
		},

		deleteGoalDay: (props) => (goalDay) => {
			const { firebase, showError, showSuccess } = props;
			return firebase
				.remove(`goalDays/${goalDay.key}`)
				.then(() => showSuccess('Project deleted successfully'))
				.catch((err) => {
					console.error('Error:', err); // eslint-disable-line no-console
					showError(err.message || 'Could not delete project');
					return Promise.reject(err);
				});
		},
		goToProject: ({ history }) => (project) => {
			history.push(`${LIST_PATH}/${project.key}`);
		}
	}),
	withStyles(theme)
);
