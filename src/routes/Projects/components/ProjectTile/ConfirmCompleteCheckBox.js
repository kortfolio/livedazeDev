import React from 'react';
import PropTypes from 'prop-types';
import { compose, withStateHandlers, withHandlers } from 'recompose';
import { withFirebase } from 'react-redux-firebase';
import ConfirmCompleteDialog from '../ConfirmCompleteDialog';
import { UserIsAuthenticated } from 'utils/router';
import { connect } from 'react-redux';
import Tooltip from '@material-ui/core/Tooltip';
import { Checkbox, FormControlLabel } from '@material-ui/core';

export const ConfirmCompleteCheckBox = ({
	toggleConfirmDialog,
	wasSent,
	isDone,
	keykey,
	classes,
	name
}) => (
	<React.Fragment>
		<FormControlLabel
			control={
				<Tooltip title='Complete'>
					<Checkbox
						checked={wasSent}
						onChange={toggleConfirmDialog}
						value={name}
						style={{
							color: '#333',
							whiteSpace: 'nowrap'
						}}
					/>
				</Tooltip>
			}
		/>
		<ConfirmCompleteDialog
			onSubmit={isDone}
			open={wasSent}
			onRequestClose={toggleConfirmDialog}
			name={name}
		/>
	</React.Fragment>
);

ConfirmCompleteCheckBox.propTypes = {
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

export default enhance(ConfirmCompleteCheckBox);
