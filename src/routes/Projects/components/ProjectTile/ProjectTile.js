import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

export const ProjectTile = ({ name, onSelect, onDelete, showDelete, classes }) => (
	<Chip
		color='secondary'
		deleteIcon={<DoneIcon />}
		onDelete={onDelete}
		label={name}
		style={{ width: '100%', background: 'white', color: 'black', margin: '5px' }}
		onClick={onSelect}
	/>
);
{
	/*
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
	onSelect: PropTypes.func.isRequired,
	onDelete: PropTypes.func,
	showDelete: PropTypes.bool
};

ProjectTile.defaultProps = {
	showDelete: true
};

export default ProjectTile;
