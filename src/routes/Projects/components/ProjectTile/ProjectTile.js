import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import {
	FormControlLabel,
	Radio,
	Checkbox,
	Grid,
	Typography,
	TextField,
	Button
} from '@material-ui/core';
import { mdiCheckboxMarkedCircle } from '@mdi/js';
import { mdiPencil } from '@mdi/js';
import Icon from '@mdi/react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import EditTaskDialog from '../EditTaskDialog';
import ConfirmCompleteDialog from '../ConfirmCompleteDialog';
//import SimpleComponent from './SimpleComponent';
const renderCheckbox = ({ input, label }) => (
	<div>
		<FormControlLabel
			control={<Checkbox checked={input.value ? true : false} onChange={input.onChange} />}
			label={label}
			style={{ background: 'white', width: '100%' }}
		/>
	</div>
);

const openShit = (name) => (event) => {};

const taskTabDecorator = {
	color: 'white',
	background: 'white',
	marginBottom: '20px',
	marginTop: '20px',
	padding: '0',
	borderRadius: '50px',
	border: '1px',
	boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
};
const Hohoho = ({ onClick }) => <Typography onClick={onClick}>kpkpkpkpkpEDIT</Typography>;
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
	isDone
}) => (
	<React.Fragment>
		<Grid
			container
			justify='space-between'
			spacing={0}
			style={taskTabDecorator}
			className={classes.root}>
			{/* Checkbox for 
				completed task */}
			<Grid item xs={1}>
				<ConfirmCompleteDialog
					onSubmit={isDone}
					open={wasSent}
					onRequestClose={toggleSent}
				/>

				<Icon
					path={mdiPencil}
					color='pink'
					style={{ height: '100%' }}
					size={1}
					onClick={toggleSent}
				/>
			</Grid>

			<Grid item xs={9} style={{ color: 'black' }}>
				<p>{name}</p>
			</Grid>

			<Grid item xs={1}>
				<Tooltip title='delete'>
					<IconButton onClick={onDelete}>
						<DeleteIcon />
					</IconButton>
				</Tooltip>
			</Grid>

			<Grid item xs={1}>
				<EditTaskDialog
					onSubmit={editProject}
					open={newDialogOpen}
					onRequestClose={toggleDialog}
				/>
				<Icon
					path={mdiPencil}
					color='grey'
					style={{ height: '100%' }}
					size={1}
					onClick={toggleDialog}
				/>
			</Grid>
		</Grid>
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
