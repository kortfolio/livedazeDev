import React from 'react';
import PropTypes from 'prop-types';
import { compose, withStateHandlers, withHandlers } from 'recompose';
import { withFirebase } from 'react-redux-firebase';
import ConfirmCompleteDialog from '../ConfirmCompleteDialog';

import { UserIsAuthenticated } from 'utils/router';
import { connect } from 'react-redux';
import Tooltip from '@material-ui/core/Tooltip';

import { Checkbox } from '@material-ui/core';

export const DeleteButtonComponent = ({ createTodo, wasSent, isDone, keykey, classes, name }) => (
	<div>
		<ConfirmDeleteDialog
			onSubmit={isDone}
			open={wasSent}
			onRequestClose={createTodo}
			name={name}
		/>
		<Tooltip title='Complete'>
			<Tooltip title='delete'>
				<IconButton onClick={onDelete}>
					<DeleteIcon />
				</IconButton>
			</Tooltip>

			<Checkbox
				onChange={createTodo}
				style={{
					color: 'black'
				}}
			/>
		</Tooltip>
	</div>
);

SimpleComponent.propTypes = {
	firebase: PropTypes.shape({
		push: PropTypes.func.isRequired
	}),
	createTodo: PropTypes.func, // from enhancer (withHandlers)
	wasSent: PropTypes.bool, // from enhancer (withStateHandlers)
	isDone: PropTypes.func
	//	classes: PropTypes.object.isRequired
};

const enhance = compose(
	withFirebase,
	UserIsAuthenticated,
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
		createTodo: ({ wasSent, toggleConfirm }) => (event) => {
			return toggleConfirm();
		},
		//Workin
		isDone: (props, wasSent, toggleConfirm) => (newInstance) => {
			console.log(props);
			//	const { firebase, uid, showError, showSuccess, toggleDialog2 } = props;
			const { firebase } = props;
			return firebase
				.update(`projects/${props.keykey}`, { isDone: true })
				.then(() => {
					console.log('Task Completed');
				})
				.catch((err) => {
					console.error('Error:', err); // eslint-disable-line no-console
					return Promise.reject(err);
				});
		}
	})
);

export default enhance(DeleteButtonComponent);
