import React from 'react'
import PropTypes from 'prop-types'
import ContentAddCircle from '@material-ui/icons/AddCircle'
import Paper from '@material-ui/core/Paper'
import { Typography } from '@material-ui/core';

const iconSize = '1rem'
const iconStyle = { width: iconSize, height: iconSize }

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
