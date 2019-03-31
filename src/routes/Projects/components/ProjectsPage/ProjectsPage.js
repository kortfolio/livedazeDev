import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'react-redux-firebase';
import { Route, Switch } from 'react-router-dom';
import ProjectRoute from 'routes/Projects/routes/Project';

import ProjectTile from '../ProjectTile';
import NewProjectTile from '../NewProjectTile';
import NewProjectDialog from '../NewProjectDialog';
import { Paper, Grid, Typography, CardMedia, Card, CardContent } from '@material-ui/core';
import { mdiFormatListCheckbox } from '@mdi/js';

//Moment JS for time/date manipulation
import 'moment-timezone';
import 'moment-duration-format';

//Livedaze core components
import { SelfDiagnosis } from '../SelfDiagnosis/SelfDiagnosis';
import GoalDate from '../GoalDate';
import SleepTime from '../SleepTimeCountDown';
import Icon from '@mdi/react';
const renderChildren = (routes, match, parentProps) =>
	routes.map((route) => (
		<Route
			key={`${match.url}-${route.path}`}
			path={`${match.url}/${route.path}`}
			render={(props) => <route.component {...parentProps} {...props} />}
		/>
	));

export const ProjectsPage = ({
	projects,
	props,
	goalDate,
	sleepTime,
	collabProjects,
	auth,
	newDialogOpen,
	toggleDialog,
	deleteProject,
	addProject,
	addGoalDate,
	addSleepTime,
	classes,
	match,
	goToProject
}) => (
	<Switch>
		{' '}
		{/* Child routes */}{' '}
		{renderChildren([ ProjectRoute ], match, {
			auth
		})}{' '}
		{/* Main Route */}{' '}
		<Route
			exact
			path={match.path}
			render={() => (
				<main className={classes.layout}>
					<div className={classes.toolbar} />{' '}
					{/*<div className={classes.layout}> 
                       
                   
                     <div className={classes.toolbar}>*/}{' '}
					<Grid container justify='center' spacing={40}>
						<Grid item xs={12} md={4}>
							<GoalDate onSubmit={addGoalDate} />{' '}
						</Grid>{' '}
						<Grid item xs={12} md={4}>
							<SleepTime onSubmit={addSleepTime} />{' '}
						</Grid>{' '}
						<Grid item xs={12} md={4}>
							<Card
								style={{
									display: 'flex',
									backgroundColor: '#3bb78f',
									backgroundImage:
										'linear-gradient(315deg, #3bb78f 0%, #0bab64 74%)',
									boxShadow:
										'0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08)'
									//#B3F6D8#52A7C1
								}}>
								<CardMedia>
									<Grid
										container
										justify='center'
										style={{
											height: '100%'
										}}>
										<Icon
											path={mdiFormatListCheckbox}
											size={3.5}
											color='white'
										/>
									</Grid>{' '}
								</CardMedia>{' '}
							</Card>
						</Grid>{' '}
					</Grid>
					{/* To do Task */}{' '}
					<Grid container justify='center' spacing={40}>
						<Grid item xs={12} md={8}>
							<Card
								style={{
									display: 'flex',
									backgroundColor: '#bdd4e7',
									backgroundImage:
										'linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%)',
									boxShadow:
										'0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08)'
								}}>
								<CardMedia>
									<Grid
										container
										justify='center'
										style={{
											height: '100%'
										}}>
										<Icon
											path={mdiFormatListCheckbox}
											size={3.5}
											color='white'
										/>
									</Grid>{' '}
								</CardMedia>{' '}
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										width: '100%'
									}}>
									<CardContent
										style={{
											flex: '1 0 auto',
											width: '100%'
										}}>
										<Typography
											align='right'
											className={classes.CardTitleTextDecorator}>
											My Daily To do List{' '}
										</Typography>{' '}
										{!isEmpty(projects) &&
											projects.map((project, ind) => (
												<ProjectTile
													key={`Project-${project.id}-${ind}`}
													name={project.value['name']}
													onSelect={() => goToProject(project)}
													onDelete={() => deleteProject(project)}
												/>
											))}{' '}
										<NewProjectDialog
											onSubmit={addProject}
											open={newDialogOpen}
											onRequestClose={toggleDialog}
										/>{' '}
										<NewProjectTile onClick={toggleDialog} />{' '}
									</CardContent>{' '}
								</div>{' '}
							</Card>{' '}
						</Grid>{' '}
						<Grid item md={4}>
							<Paper>
								<SelfDiagnosis />
							</Paper>{' '}
						</Grid>{' '}
					</Grid>{' '}
				</main>
			)}
		/>{' '}
	</Switch>
);

ProjectsPage.propTypes = {
	classes: PropTypes.object.isRequired, // from enhancer (withStyles)
	match: PropTypes.object.isRequired, // from enhancer (withRouter)
	auth: PropTypes.object, // from enhancer (connect + firebaseConnect - firebase)
	projects: PropTypes.array, // from enhancer (connect + firebaseConnect - firebase)
	goalDate: PropTypes.array,
	sleepTime: PropTypes.array,
	newDialogOpen: PropTypes.bool, // from enhancer (withStateHandlers)
	toggleDialog: PropTypes.func.isRequired, // from enhancer (withStateHandlers)
	deleteProject: PropTypes.func.isRequired, // from enhancer (withHandlers - firebase)
	collabProjects: PropTypes.object, // from enhancer (withHandlers - firebase)
	addProject: PropTypes.func.isRequired, // from enhancer (withHandlers - firebase)
	addGoalDate: PropTypes.func.isRequired,
	addSleepTime: PropTypes.func.isRequired,

	goToProject: PropTypes.func.isRequired // from enhancer (withHandlers - router)
};

export default ProjectsPage;
