import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { Grid, Typography } from '@material-ui/core';
import { mdiPencil } from '@mdi/js';
import Icon from '@mdi/react';
import EditTaskDialog from '../EditTaskDialog';
import ConfirmCompleteCheckBox from './ConfirmCompleteCheckBox';
import DeleteButtonIcon from './DeleteButtonIcon';

export const ProjectTile = ({
	classes,
	onDelete,
	name,
	key,
	editProject,
	newDialogOpen,
	toggleDialog,
	isOver,
	keykey,
	displayCompletedTask
}) => (
	<React.Fragment>
		{!isOver && (
			<Grid
				container
				justify='space-between'
				spacing={0}
				direction='row'
				className={classes.root}>
				<Grid item xs={1}>
					<ConfirmCompleteCheckBox keykey={keykey} name={name} />
				</Grid>
				<Grid item xs={9} style={{ marginTop: '12px' }}>
					<Typography>{name}</Typography>
				</Grid>
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
				<Grid item xs={1}>
					<DeleteButtonIcon keykey={keykey} name={name} />
				</Grid>
			</Grid>
		)}
	</React.Fragment>
);

ProjectTile.propTypes = {
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
