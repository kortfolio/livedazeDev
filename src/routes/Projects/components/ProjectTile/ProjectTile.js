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

import 'moment-timezone';
import 'moment-duration-format';
import moment from 'moment';

export const ProjectTile = ({
	classes,
	onDelete,
	name,
	showDelete,
	key,
	editProject,
	newDialogOpen,
	toggleDialog,
	isOver,
	keykey,
	today,
	createdAt,
	displayCompleted,
	project
}) => (
	<React.Fragment>
		{!isOver &&
		moment(createdAt).format('L') === moment(new Date()).format('L') && (
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
					<Typography className={classes.taskTypography}>{name}</Typography>
				</Grid>
				<Grid item xs={1}>
					<Tooltip title='Edit Task'>
						<IconButton onClick={toggleDialog}>
							<Icon path={mdiPencil} color='grey' size={1} />
						</IconButton>
					</Tooltip>
					<EditTaskDialog
						//initialValues={{ namep: name }}
						onSubmit={editProject}
						open={newDialogOpen}
						onRequestClose={toggleDialog}
						name={name}
						initialValues={{ name: name }}
					/>
				</Grid>
				<Grid item xs={1}>
					{showDelete && onDelete ? (
						showDelete && <DeleteButtonIcon keykey={keykey} name={name} />
					) : null}
					}
				</Grid>
			</Grid>
		)}

		{isOver &&
		moment(createdAt).format('L') === moment(new Date()).format('L') && (
			<Grid
				container
				justify='space-between'
				spacing={0}
				direction='row'
				className={classes.root}>
				<Grid item xs={1}>
					<ConfirmCompleteCheckBox keykey={keykey} name={name} displayComplete={true} />
				</Grid>
				<Grid item xs={9} style={{ marginTop: '12px' }}>
					<Typography className={classes.taskTypographyDisabled}>{name}</Typography>
				</Grid>
				<Grid item xs={1}>
					{/* <Tooltip title='Edit Task'>
						<IconButton onClick={toggleDialog}>
							<Icon path={mdiPencil} color='grey' size={1} />
						</IconButton>
					</Tooltip>
					<EditTaskDialog
						onSubmit={editProject}
						open={newDialogOpen}
						onRequestClose={toggleDialog}
						name={name}
					/> */}
				</Grid>
				<Grid item xs={1}>
					{/* <DeleteButtonIcon keykey={keykey} name={name} /> */}
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
	wasSent: PropTypes.bool, // from enhancer (withStateHandlers),
	today: PropTypes.object
};
ProjectTile.defaultProps = {
	showDelete: true,
	newDialogOpen2: false,
	onRequestClose: false
};

export default ProjectTile;
