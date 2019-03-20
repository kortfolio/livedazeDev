import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "react-redux-firebase";
import { Route, Switch } from "react-router-dom";
import ProjectRoute from "routes/Projects/routes/Project";

//import ProjectTile from "../ProjectTile";
//import NewProjectTile from "../NewProjectTile";
import NewProjectDialog from "../NewProjectDialog";
import { Paper, Grid, Typography } from "@material-ui/core";


//Moment JS for time/date manipulation 
import "moment-timezone";
import "moment-duration-format";

//Livedaze core components
import { BeforeSetSleepTime } from "../SleepTimeCountDown/BeforeSetSleepTime";
import { PreWakeUpTime } from "../WakeUpTime/PreWakeUpTime";
import { BeforeSetGoalDate } from "../GoalDate/BeforeSetGoalDate";
import { SelfDiagnosis } from "../SelfDiagnosis/SelfDiagnosis";
import { KanbanBoard } from "../KanbanBoard/KanbanBoard";



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
        <React.Fragment>
        <main className={classes.content}>
          <div className={classes.toolbar}/> 
         
         {/*<div className={classes.layout}> 
         <div className={classes.toolbar}>*/} 
         <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
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

            <Grid container spacing={24}>
              
            <Grid item md={4}>
                  <KanbanBoard/>
            </Grid>
            
            {/* 
            <Grid item md={4}>
                <Paper>
                  <CompletedTask />
                </Paper>
              </Grid>
            */}  
              <Grid item md={8}>
                    <SelfDiagnosis />
              </Grid>
              </Grid>
         
           

            
            
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
          </main>
          </React.Fragment>
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
