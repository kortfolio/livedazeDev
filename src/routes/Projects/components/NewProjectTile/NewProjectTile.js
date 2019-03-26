import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core';

export const NewProjectTile = ({ onClick, classes }) => ( 
    <Typography onClick={onClick}>
    Add a task + 
    </Typography>
)

NewProjectTile.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  onClick: PropTypes.func.isRequired
}

export default NewProjectTile
