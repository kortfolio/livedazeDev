import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import { FormControlLabel, Radio, Checkbox, Grid, Typography, TextField } from '@material-ui/core';
import { mdiCheckboxMarkedCircle } from '@mdi/js';
import { mdiPencil } from '@mdi/js';
import Icon from '@mdi/react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';

const renderCheckbox = ({ input, label }) => (
	<div>
		<FormControlLabel
			control={<Checkbox checked={input.value ? true : false} onChange={input.onChange} />}
			label={label}
			style={{ background: 'white', width: '100%' }}
		/>
	</div>
);

const helloWorld = {
	//background: 'red',
	width: '100%',
	color: 'white'
};
export const ProjectTile = ({
	project,
	displayName,
	onSelect,
	onDelete,
	onEdit,
	showDelete,
	classes,
	handleSubmit,
	account,
	submitting,
	pristine,
	name,
	key,
	kimoddi
}) => (
	<form onSubmit={handleSubmit}>
		<Grid container justify='space-between' spacing={16}>
			<Grid item xs={1}>
				<Checkbox />
			</Grid>
			<Grid item xs={9}>
				<FormControlLabel
					control={<Typography>{name}</Typography>}
					style={{
						background: 'white',
						width: '100%',
						borderRadius: '10px',
						margin: '5px'
					}}
					//onDelete={() => deleteProject(project)}
					//onSelect={() => editTask(project)}
				/>
			</Grid>
			<Grid item xs={1}>
				<Icon path={mdiPencil} color='grey' size={1} onClick={onDelete} />
				<Icon path={mdiCheckboxMarkedCircle} color='pink' size={1} onClick={onSelect} />
			</Grid>
		</Grid>
	</form>
);
{
	/*
		<TextField defaultValue={name} onChange={console.log('u clikcedme')} style={helloWorld} />
	<FormControlLabel
			control={
				<Grid container justify='space-between' spacing={16}>
					<Grid item xs={1}>
						<Checkbox />
					</Grid>
					<Grid item xs={9}>
						<Typography>{name}</Typography>
					</Grid>
					<Grid item xs={1}>
						<Icon
							path={mdiPencil}
							color='grey'
							size={1}
							onClick={console.log('hello!')}
						/>
				style={{
				background: 'white',
				width: '100%',
				borderRadius: '10px',
				margin: '5px'
			}}
	<Chip
			color='secondary'
			deleteIcon={<DoneIcon />}
			onDelete={onDelete}
			label=
			style={{ width: '100%', background: 'white', color: 'black', margin: '5px' }}
			onClick={onSelect}
		/>
		<div className={classes.todoItemTab}>
		<span className={classes.todoItem}>{name || 'no name'}</span>

	{showDelete && onDelete ? (
			<Tooltip title='delete'>
				<IconButton onClick={onDelete}>
					<DeleteIcon />
				</IconButton>
			</Tooltip>
		) : null}
	</div>
	*/
}

ProjectTile.propTypes = {
	name: PropTypes.string,
	//onSelect: PropTypes.func.isRequired,
	onDelete: PropTypes.func,
	onEdit: PropTypes.func,
	showDelete: PropTypes.bool
};

ProjectTile.defaultProps = {
	showDelete: true
};

export default ProjectTile;
