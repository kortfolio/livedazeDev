import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
export const ProjectTile = ({ name, onSelect, onDelete, showDelete, classes }) => (
	<div className={classes.todoItemTab}>
		<span className={classes.todoItem} onClick={onSelect}>
			{name || 'no name'}
		</span>
		{showDelete && onDelete ? (
			<Tooltip title='delete'>
				<IconButton onClick={onDelete}>
					<DeleteIcon />
				</IconButton>
			</Tooltip>
		) : null}
	</div>
);

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
