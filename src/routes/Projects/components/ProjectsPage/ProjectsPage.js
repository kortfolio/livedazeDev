import React from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'react-redux-firebase'
import { Route, Switch } from 'react-router-dom'
import ProjectRoute from 'routes/Projects/routes/Project'
import ProjectTile from '../ProjectTile'
import NewProjectTile from '../NewProjectTile'
import NewProjectDialog from '../NewProjectDialog'

import "moment-timezone";
import "moment-duration-format";
import { BeforeSetSleepTime } from '../SleepTimeCountDown/BeforeSetSleepTime';
import { PreWakeUpTime } from '../WakeUpTime/PreWakeUpTime';
import { BeforeSetGoalDate } from '../GoalDate/BeforeSetGoalDate';



const renderChildren = (routes, match, parentProps) =>
  routes.map(route => (
    <Route
      key={`${match.url}-${route.path}`}
      path={`${match.url}/${route.path}`}
      render={props => <route.component {...parentProps} {...props} />}
    />
  ))

export const ProjectsPage = ({
  projects,
  collabProjects,
  auth,
  newDialogOpen,
  toggleDialog,
  deleteProject,
  addProject,
  classes,
  match,
  goToProject
}) => (
  <Switch>
    {/* Child routes */}
    {renderChildren([ProjectRoute], match, { auth })}
    {/* Main Route */}
    <Route
      exact
      path={match.path}
      render={() => (
        <div className="container">  
        <div className={classes.root}>
        <div className="row flex">
          <div className="col l4 s12">
            <div className="card-panel livedazeGrey">
              <span className="white-text">
                <BeforeSetSleepTime />
              </span>
            </div>
          </div>

          {/**Wake Up Time **/}
          <div className="col l4 s12">
            <div className="card-panel livedazeGrey">
              <span className="white-text">
                <PreWakeUpTime />
              </span>
            </div>
          </div>

          <div className="col l4 s12">
            <div className="card-panel livedazeGrey">
              <span className="white-text">
              <BeforeSetGoalDate/>
            </span>
            </div>
          </div>
        </div>
          <NewProjectDialog
            onSubmit={addProject}
            open={newDialogOpen}
            onRequestClose={toggleDialog}
          />
          <div className={classes.tiles}>
            <NewProjectTile onClick={toggleDialog} />
            {!isEmpty(projects) &&
              projects.map((project, ind) => (
                <ProjectTile
                  key={`Project-${project.id}-${ind}`}
                  name={project.name}
                  onSelect={() => goToProject(project.id)}
                  onDelete={() => deleteProject(project.id)}
                />
              ))}
          </div>
        
        </div>
        </div>
      )}
    />
  </Switch>
)

ProjectsPage.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  match: PropTypes.object.isRequired, // from enhancer (withRouter)
  auth: PropTypes.object, // from enhancer (connect + firebaseConnect - firebase)
  projects: PropTypes.array, // from enhancer (connect + firebaseConnect - firebase)
  newDialogOpen: PropTypes.bool, // from enhancer (withStateHandlers)
  toggleDialog: PropTypes.func.isRequired, // from enhancer (withStateHandlers)
  deleteProject: PropTypes.func.isRequired, // from enhancer (withHandlers - firebase)
  collabProjects: PropTypes.object, // from enhancer (withHandlers - firebase)
  addProject: PropTypes.func.isRequired, // from enhancer (withHandlers - firebase)
  goToProject: PropTypes.func.isRequired // from enhancer (withHandlers - router)
}

export default ProjectsPage
