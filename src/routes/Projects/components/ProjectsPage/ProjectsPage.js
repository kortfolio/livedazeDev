import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'react-redux-firebase';
import { Route, Switch } from 'react-router-dom';
import ProjectRoute from 'routes/Projects/routes/Project';

import ProjectTile from '../ProjectTile';
import NewProjectTile from '../NewProjectTile';
import NewProjectDialog from '../NewProjectDialog';
import { Grid, Typography, Card, CardContent, Hidden } from '@material-ui/core';

import Icon from '@mdi/react';
import { mdiFormatListCheckbox, mdiAccessPoint } from '@mdi/js';

import 'moment-timezone';
import 'moment-duration-format';

//Livedaze core components
import GoalDate from '../GoalDate';
import SleepTime from '../SleepTimeCountDown';
import PomodoroTimer from '../PomodoroTimer';
import SelfDiagnosis from '../SelfDiagnosis';

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
	goalDate,
	sleepTime,
	auth,
	newDialogOpen,
	toggleDialog,
	deleteProject,
	editProject,
	addProject,
	addGoalDate,
	addSleepTime,
	classes,
	match,
	goToProject
}) => (
	<Switch>
		{/* Child routes */}
		{renderChildren([ ProjectRoute ], match, {
			auth
		})}
		{/* Main Route */}
		<Route
			exact
			path={match.path}
			render={() => (
				<main className={classes.root}>
					<Grid container justify='center' spacing={40}>
						<Grid item xs={12} md={4}>
							<GoalDate onSubmit={addGoalDate} />
						</Grid>
						<Grid item xs={12} md={4}>
							<SleepTime onSubmit={addSleepTime} />
						</Grid>
						<Grid item xs={12} md={4}>
							<PomodoroTimer />
						</Grid>

						<Grid item xs={12} md={8}>
							<Card className={classes.cardDecorator}>
								<Icon path={mdiFormatListCheckbox} size={3.5} color='white' />
								<CardContent className={classes.content}>
									<Typography
										align='right'
										className={classes.CardTitleTextDecorator}>
										My Daily To do List
									</Typography>
									{!isEmpty(projects) &&
										projects.map((project, ind) => (
											<ProjectTile
												key={`Project-${project.id}-${ind}`}
												keykey={project.key}
												name={project.value['name']}
												onDelete={() => deleteProject(project)}
												isOver={project.value['isDone']}
											/>
										))}
									<NewProjectDialog
										onSubmit={addProject}
										open={newDialogOpen}
										onRequestClose={toggleDialog}
									/>
									<Typography align='right'>
										{' '}
										<NewProjectTile align='right' onClick={toggleDialog} />
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={12} md={4}>
							<SelfDiagnosis />
						</Grid>
					</Grid>
				</main>
			)}
		/>
	</Switch>
);

ProjectsPage.propTypes = {
	classes: PropTypes.object.isRequired,
	match: PropTypes.object.isRequired,
	auth: PropTypes.object,
	projects: PropTypes.array,
	goalDate: PropTypes.array,
	sleepTime: PropTypes.array,
	newDialogOpen: PropTypes.bool,
	toggleDialog: PropTypes.func.isRequired,
	deleteProject: PropTypes.func.isRequired,
	addProject: PropTypes.func.isRequired,
	addGoalDate: PropTypes.func.isRequired,
	addSleepTime: PropTypes.func.isRequired,
	toggleSent: PropTypes.func.isRequired,
	goToProject: PropTypes.func.isRequired
};

export default ProjectsPage;
