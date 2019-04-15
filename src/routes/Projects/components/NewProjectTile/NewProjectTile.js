import React from 'react';
import PropTypes from 'prop-types';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
export const NewProjectTile = ({ onClick, classes }) => (
	<Fab
		aria-label='Add a New Task'
		variant='extended'
		size='small'
		color='primary'
		align='right'
		onClick={onClick}
		className={classes.outLinedBtn}>
		+ Add a new task
	</Fab>
);

NewProjectTile.propTypes = {
	classes: PropTypes.object.isRequired, // from enhancer (withStyles)
	onClick: PropTypes.func.isRequired
};

export default NewProjectTile;
