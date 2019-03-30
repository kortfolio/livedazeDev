import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { goalDateValidate } from "utils/form";
import { mdiFire } from "@mdi/js";

//MUI (Material UI) Core libraries
import Card from "@material-ui/core/Card";
import moment from "moment";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { mdiHelpCircleOutline } from "@mdi/js";

import { isEmpty } from "react-redux-firebase";
import Fab from "@material-ui/core/Fab";
import { TimePickerField } from "./TimePickerField";

import { Grid } from "@material-ui/core";
import Icon from "@mdi/react";
import Tooltip from "@material-ui/core/Tooltip";
import { DisplaySleepTime } from "./DisplaySleepTime";
//import TimePicker from '@material-ui/core/TimePicker';
//import { TimePicker } from 'material-ui-pickers';
import { withStyles } from "@material-ui/core/styles";
import styles from "./SleepTime.styles";

const buttonStyle = {
  textDecoration: "none",
  letterSpacing: "0.1rem",
  fontFamily: "isotonic",
  fontSize: "12px",
  marginRight: "0px",
  paddingLeft: "20px",
  paddingRight: "20px",
  backgroundColor: "black"
};

export const SleepTime = ({
  handleSubmit,
  sleepTimes,
  sleepTime,
  deleteSleepTime,
  onDelete,
  classes
}) => (
    
    <Card className={classes.card}>
    {console.log("From SleepTime.js classes.card val" + classes)}
    <CardMedia>
          <Grid container justify="center" style={{ height: "100%" }}>
            <Icon path={mdiFire} size={3.5} color="white" />
          </Grid>
    </CardMedia>
    {isEmpty(sleepTimes) && (  
        <Fragment>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Grid item align="right" className={classes.goalDayTitle}>
              <Tooltip title="Set a bedtime. wake at the same time.">
                <Icon path={mdiHelpCircleOutline} size={0.5} color="white" />
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
              <form onSubmit={handleSubmit} autoComplete="off">
                {/* Time Picker Field */}
                <Field
                  className="DatePickerCustomStyle2"
                  id="sleepTime"
                  component={TimePickerField}
                  name="sleepTime"
                  placeholderText="00:00"
                  validate={[goalDateValidate]}
                  normalize={value =>
                    value ? moment(value).format('LLLL') : null
                  }
                  dateFormat="h:mm aa"
                  timeCaption="Time"
                  
                  
                  
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
          </CardContent>
        </div>
        </Fragment>
    )}

    {!isEmpty(sleepTimes) &&
      sleepTimes.map((sleepTime, ind) => (
        
        <DisplaySleepTime
          key={`SleepTime-${sleepTime.id}-${ind}`}
          sleepTime={sleepTime.value["sleepTime"]}
          onDelete={() => deleteSleepTime(sleepTime)}
          classes={classes}
        />
      ))}
  </Card>
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
