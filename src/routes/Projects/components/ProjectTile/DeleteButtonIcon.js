import React from 'react';
import PropTypes from 'prop-types';
import { compose, withStateHandlers, withHandlers } from 'recompose';
import { withFirebase } from 'react-redux-firebase';
import ConfirmCompleteDialog from '../ConfirmCompleteDialog';

import { withNotifications } from 'modules/notification';
import { UserIsAuthenticated } from 'utils/router';
import { connect } from 'react-redux';
import Tooltip from '@material-ui/core/Tooltip';
import Icon from '@mdi/react';

import { IconButton } from '@material-ui/core';
//	onDelete={() => deleteProject(project)}
import { mdiDelete } from '@mdi/js';
export const DeleteButtonIcon = ({
	toggleConfirmDialog,
	wasSent,
	isDone,
	deleteProject,
	keykey,
	classes,
	name
}) => (
	<div>
		<ConfirmCompleteDialog
			onSubmit={deleteProject}
			open={wasSent}
			onRequestClose={toggleConfirmDialog}
			name={name}
			isDeleteTab={true}
		/>
		<Tooltip title='Delete'>
			<IconButton onClick={toggleConfirmDialog}>
				<Icon path={mdiDelete} color='grey' size={1} />
			</IconButton>
		</Tooltip>
	</div>
);

DeleteButtonIcon.propTypes = {
	firebase: PropTypes.shape({
		push: PropTypes.func.isRequired
	}),
	toggleConfirmDialog: PropTypes.func, // from enhancer (withHandlers)
	wasSent: PropTypes.bool, // from enhancer (withStateHandlers)
	isDone: PropTypes.func
	//	classes: PropTypes.object.isRequired
};

const enhance = compose(
	withFirebase,
	UserIsAuthenticated,
	withNotifications,
	connect(({ firebase: { ordered } }) => ({
		projects: ordered.projects
	})),
	withStateHandlers(
		({ initialWasSent = false }) => ({
			wasSent: initialWasSent
		}),
		{
			toggleConfirm: ({ wasSent }) => () => ({
				wasSent: !wasSent
			})
		}
	),
	withHandlers({
		toggleConfirmDialog: ({ wasSent, toggleConfirm }) => (event) => {
			return toggleConfirm();
		},
		//Workin
		deleteProject: (props) => (project) => {
			const { firebase, showError, showSuccess } = props;
			return firebase
				.remove(`projects/${props.keykey}`)
				.then(() => showSuccess('Project deleted successfully'))
				.catch((err) => {
					console.error('Error:', err); // eslint-disable-line no-console
					showError(err.message || 'Could not delete project');
					return Promise.reject(err);
				});
		}
	})
);

export default enhance(DeleteButtonIcon);
