import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';

import { Checkbox, Grid } from '@material-ui/core';
import { mdiPencil } from '@mdi/js';
import Icon from '@mdi/react';
import EditTaskDialog from '../EditTaskDialog';
import SimpleComponent from './SimpleComponent';

const taskTabDecorator = {
	color: 'white',
	background: 'white',
	marginBottom: '20px',
	marginTop: '20px',
	padding: '0',
	borderRadius: '5px',
	border: '1px',
	boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
};
export const ProjectTile = ({
	toggleSent,
	classes,
	onDelete,
	wasSent,
	name,
	key,
	editProject,
	newDialogOpen,
	toggleDialog,
	editTask,
	isDone,
	isOver,
	keykey,
	toggleConfirm
}) => (
	<React.Fragment>
		{!isOver && (
			<Grid
				container
				justify='space-between'
				spacing={0}
				style={taskTabDecorator}
				className={classes.root}>
				{/* CHECKBOX FOR TODO TAB */}
				<Grid item xs={1}>
					<SimpleComponent keykey={keykey} name={name} />
				</Grid>

				{/* TODO VALUE*/}
				<Grid item xs={9} style={{ color: 'black' }}>
					<p
						style={{
							whiteSpace: 'nowrap',
							textOverflow: 'ellipsis',
							overflow: 'hidden'
						}}>
						{name}
					</p>
				</Grid>
				{/* DELETE BUTTON */}
				<Grid item xs={1}>
					<Tooltip title='delete'>
						<IconButton onClick={onDelete}>
							<DeleteIcon />
						</IconButton>
					</Tooltip>
				</Grid>
				{/* EDIT BUTTON */}
				<Grid item xs={1}>
					<Tooltip title='Edit Task'>
						<IconButton onClick={toggleDialog}>
							<Icon path={mdiPencil} color='grey' size={1} />
						</IconButton>
					</Tooltip>
					<EditTaskDialog
						onSubmit={editProject}
						open={newDialogOpen}
						onRequestClose={toggleDialog}
						name={name}
					/>
				</Grid>
			</Grid>
		)}
		{/* display Completed task  */}
		{isOver && (
			<Grid
				container
				justify='space-between'
				spacing={0}
				style={taskTabDecorator}
				className={classes.root}>
				{/* Checkbox for 
				completed task */}
				<Grid item xs={1}>
					<Checkbox checked='false' disabled={true} />
				</Grid>
				<Grid item xs={11} style={{ color: 'grey' }}>
					<p>[COMPLETED] {name}</p>
				</Grid>
			</Grid>
		)}
	</React.Fragment>
);

ProjectTile.propTypes = {
	//name: PropTypes.string,
	//onSelect: PropTypes.func.isRequired,
	onDelete: PropTypes.func,
	onEdit: PropTypes.func,
	showDelete: PropTypes.bool,
	handleSubmit: PropTypes.func,
	newDialogOpen2: PropTypes.bool,
	toggleDialog2: PropTypes.bool,
	wasSent: PropTypes.bool // from enhancer (withStateHandlers)
};
ProjectTile.defaultProps = {
	showDelete: true,
	newDialogOpen2: false,
	onRequestClose: false
};

export default ProjectTile;
