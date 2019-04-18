import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card } from '@material-ui/core';

export const Dashboard = ({ classes, projects, deleteProject }) => (
	<div className={classes.root}>
		<Grid container justify='center' spacing={40}>
			<Grid item xs={8}>
				<Card>Completed so far</Card>
			</Grid>
			<Grid item xs={4}>
				<Card>Your rating historii</Card>
			</Grid>
		</Grid>
	</div>
);
Dashboard.propTypes = {
	classes: PropTypes.object // from enhancer (withStyles)
};

export default Dashboard;
