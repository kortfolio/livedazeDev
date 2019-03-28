import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import moment from "moment";
import { Field, reduxForm } from "redux-form";
import { goalDateValidate } from "utils/form";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { mdiKeyboardBackspace } from "@mdi/js";
import { withStyles } from "@material-ui/core/styles";

import { Spring } from "react-spring/renderprops";
import { mdiCalendarCheck } from "@mdi/js";
import { mdiHelpCircleOutline } from "@mdi/js";

import { isEmpty } from "react-redux-firebase";
import Fab from "@material-ui/core/Fab";
import { DatePickerField } from "./DatePickerField";

import { Grid } from "@material-ui/core";
import Icon from "@mdi/react";
import { mdiCrown } from "@mdi/js";
import DisplayGoalDay from "./DisplayGoalDay";

import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';


const styles = theme => ({
  card: {
    display: "flex",
    background: "#4c89db",
    backgroundColor: "#045de9",
    backgroundImage: "linear-gradient(315deg, #045de9 0%, #09c6f9 74%)",
    minHeight: "180px",
    maxHeight: "180px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  goalDayTitle: {
    display: "flex",
    flexDirection: "column",
    color: "white",
    fontFamily: "isotonicBold",
    textTransform: "uppercase",
    fontSize: "1.25rem"
  },
  content: {
    flex: "1 0 auto",
    width: "100%"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  playIcon: {
    height: 38,
    width: 38
  },
  outLinedBtn:
  {
    color:'white',
    backgroundColor:'black',
    borderColor:'white',
    textDecoration: "none",
    alignSelf: "center",
    letterSpacing: "0.1rem",
    fontFamily: "isotonic",
    fontSize: "12px",
    margin: "10px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  fab: {
    margin: theme.spacing.unit * 2,
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
  },
});

const buttonStyle = {
  textDecoration: "none",
  letterSpacing: "0.1rem",
  fontFamily: "isotonic",
  fontSize: "12px",
  marginRight: "0px",
  paddingLeft: "20px",
  paddingRight: "20px",
  backgroundColor:"black"
};

const GoalDate = ({
  handleSubmit,
  goalDays,
  deleteGoalDay,
  onDelete,
  classes
}) => (
  <React.Fragment>
     <Card className={classes.card}>
    
      {isEmpty(goalDays) && (
        
        <React.Fragment>
         
    <CardMedia>
      <Grid container justify="center" style={{ height: "100%" }}>
        <Icon path={mdiCalendarCheck} size={3.5} color="white" />
      </Grid>
    </CardMedia>
    {/* Card Content */}
    <div className={classes.details}>
      <CardContent className={classes.content}>
        <Grid
          item
          align="right"
          className={classes.goalDayTitle}
        >
       
    <Tooltip title="Set your goals high, and don't stop till you get there.">
          <Icon path={mdiHelpCircleOutline}  size={0.5} color="white" />
        </Tooltip>
         </Grid>
        <Typography align="right" className={classes.goalDayTitle}>
          My Goal Day
        </Typography>
        {/* Goal Day Picker */}
        <Grid
          container
          alignItems="flex-start"
          justify="flex-end"
          direction="row"
        >
        <form onSubmit={handleSubmit}>
              <Field
                className="DatePickerCustomStyle"
                id="deadlineID"
                name="goalDay"
                type="text"
                placeholderText="MM/DD/YYY"
                component={DatePickerField}
                autoComplete="off"
                normalize={value =>
                  value ? moment(value).format("MM/DD/YYYY") : null
                }
                validate={[goalDateValidate]}
              />
                  <Grid
          container
          alignItems="flex-start"
          justify="flex-end"
          direction="row"
        >
                 <Fab
              style={buttonStyle}
          variant="extended"
          size="small"
          color="primary"
          aria-label="Add"
          className={classes.outLinedBtn}
          type="submit"
        >
          Update
        </Fab> 
        </Grid>
          </form>
        </Grid>
        <Typography align="right" className={classes.goalDayTitle}>
     
        </Typography>
      </CardContent>
    </div>
        
         
          
        </React.Fragment>
      )}

{!isEmpty(goalDays) &&
        goalDays.map((goalDay, ind) => (
                <DisplayGoalDay
                  key={`GoalDay-${goalDay.id}-${ind}`}
                  goalDay={goalDay.value["goalDay"]}
                  onDelete={() => deleteGoalDay(goalDay)}
                />
   ))}
   </Card>
  </React.Fragment>
);

GoalDate.propTypes = {
  handleSubmit: PropTypes.func.isRequired, // from enhancer (reduxForm)
  goalDays: PropTypes.array, // from enhancer (connect + firebaseConnect - firebase)
  onDelete: PropTypes.func
};

DisplayGoalDay.defaultProps = {
  showDelete: true
};
export default withStyles(styles, { withTheme: true })(GoalDate);

