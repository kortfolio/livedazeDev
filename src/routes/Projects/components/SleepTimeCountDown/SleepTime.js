import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import moment from "moment";
import { Field, reduxForm } from "redux-form";
import { goalDateValidate } from "utils/form";
import { mdiFire } from "@mdi/js";
import {
   TextField,TimePicker
  } from 'redux-form-material-ui'
  
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import { Spring } from "react-spring/renderprops";
import { mdiHelpCircleOutline } from "@mdi/js";

import { isEmpty } from "react-redux-firebase";
import Fab from "@material-ui/core/Fab";
import { TimePickerField } from "./TimePickerField";

import { Grid } from "@material-ui/core";
import Icon from "@mdi/react";
import { mdiCrown } from "@mdi/js";

import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
//import TimePicker from '@material-ui/core/TimePicker';
//import { TimePicker } from 'material-ui-pickers';




const MUITimePicker  = ({ input, defaultValue, meta: { touched, error },  ...other }) => (
    <TimePicker 
        errorText = {touched && error} 
        {...input}
        container="inline"
        mode="landscape"
        value = {input.value != '' ? moment(moment().format('DD MMM YYYY')+' '+input.value).toDate() : null}
        autoComplete="off"  
        onChange = {(event, value) => {input.onChange(moment(value).format('h:mm a'))}} 
        {...other}
        />
)

const styles = theme => ({
  card: {
    display: "flex",
    background: "#4c89db",
    backgroundColor: "#ff7878",
    backgroundImage: "linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
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

const SleepTime = ({
  handleSubmit,
  sleepTimes,
  sleepTime,
  goalDays,
  deleteGoalDay,
  onDelete,
  classes,

}) => (
<React.Fragment>
  
    {isEmpty(sleepTimes) && (
     <Card className={classes.card}>      
    <CardMedia>
      <Grid container justify="center" style={{ height: "100%" }}>
        <Icon path={mdiFire} size={3.5} color="white" />
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
       
    <Tooltip title="Set a bedtime. wake at the same time.">
          <Icon path={mdiHelpCircleOutline}  size={0.5} color="white" />
        </Tooltip>
         </Grid>
        <Typography align="right" className={classes.goalDayTitle}>
          My Bedtime
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
                id="deadlineIDzz"
                component={TimePickerField}
                name="sleepTime"
                placeholderText="00:00"     
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
       
   </Card>)}
  </React.Fragment>
    );

SleepTime.propTypes = {
  handleSubmit: PropTypes.func.isRequired, // from enhancer (reduxForm)
  sleepTimes: PropTypes.array, // from enhancer (connect + firebaseConnect - firebase)
  onDelete: PropTypes.func
};

SleepTime.defaultProps = {
  showDelete: true
};

export default withStyles(styles, { withTheme: true })(SleepTime);
