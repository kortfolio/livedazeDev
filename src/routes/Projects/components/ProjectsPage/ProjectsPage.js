import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "react-redux-firebase";
import { Route, Switch } from "react-router-dom";
import ProjectRoute from "routes/Projects/routes/Project";

//import ProjectTile from "../ProjectTile";
//import NewProjectTile from "../NewProjectTile";
import NewProjectDialog from "../NewProjectDialog";
import { Paper, Grid } from "@material-ui/core";


//Moment JS for time/date manipulation 
import "moment-timezone";
import "moment-duration-format";

//Livedaze core components
import { BeforeSetSleepTime } from "../SleepTimeCountDown/BeforeSetSleepTime";
import { PreWakeUpTime } from "../WakeUpTime/PreWakeUpTime";
import { BeforeSetGoalDate } from "../GoalDate/BeforeSetGoalDate";
import { SelfDiagnosis } from "../SelfDiagnosis/SelfDiagnosis";
import { KanbanBoard } from "../KanbanBoard/KanbanBoard";
import { CompletedTask } from "../CompletedTask/CompletedTask";




const renderChildren = (routes, match, parentProps) =>
  routes.map(route => (
    <Route
      key={`${match.url}-${route.path}`}
      path={`${match.url}/${route.path}`}
      render={props => <route.component {...parentProps} {...props} />}
    />
  ));
const thisIsProjectClickme = 5;
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
        <div className={classes.root}>
          <div className={classes.layout}>
            <Grid container spacing={24}>
              <Grid item md={4}>
                <Paper>
                  <BeforeSetSleepTime />
                </Paper>
              </Grid>

              <Grid item md={4}>
                <Paper>
                  <PreWakeUpTime />
                </Paper>
              </Grid>

              <Grid item md={4}>
                <Paper>
                  <BeforeSetGoalDate />
                </Paper>
              </Grid>
            </Grid>
            <Grid />

            <Grid container spacing={24}>
              <Grid item md={4}>
              <Paper>
                  <KanbanBoard/>
               </Paper>
              </Grid>

              <Grid item md={4}>
                <Paper>
                  <CompletedTask />
                </Paper>
              </Grid>

              <Grid item md={4}>
                <Paper>
                  <SelfDiagnosis />
                </Paper>
              </Grid>
            </Grid>
            <Grid />

            
            <NewProjectDialog
              onSubmit={addProject}
              open={newDialogOpen}
              onRequestClose={toggleDialog}
            />
            <div className={classes.tiles}>
             {/*
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
                 */}
            </div>
          </div>
        </div>
      )}
    />
  </Switch>
);

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
};

export default ProjectsPage;
