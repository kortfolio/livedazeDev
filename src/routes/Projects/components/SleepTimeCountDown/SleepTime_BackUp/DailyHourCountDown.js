import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import moment from "moment";
import { Field, reduxForm } from "redux-form";
import { required } from "utils/form";

import { isEmpty } from "react-redux-firebase";
import Fab from "@material-ui/core/Fab";
import { DatePickerField } from "./DatePickerField";

import { Grid } from "@material-ui/core";
import Icon from "@mdi/react";
import { mdiCrown } from "@mdi/js";
import DisplayGoalDay from "./DisplayGoalDay";

const buttonStyle = {
  textDecoration: "none",
  alignSelf: "center",
  letterSpacing: "0.1rem",
  fontFamily: "isotonic",
  fontSize: "12px",
  margin: "10px",
  paddingLeft: "20px",
  paddingRight: "20px",
  backgroundImage:
    "radial-gradient(circle at 12.3% 19.3%, rgb(94, 104, 226) 0%, rgb(166, 171, 241) 100.2%)"
};

export const DailyHourCountDown = ({
  handleSubmit,
  goalDays,
  deleteGoalDay,
  onDelete
}) => (
  <React.Fragment>
    
      {isEmpty(goalDays) && (
        <React.Fragment>
          <Grid
            container
            spacing={8}
            alignItems="center"
            justify="center"
            alignContent="center"
          >
            <Grid item>
              <Icon
                path={mdiCrown}
                size={1}
                horizontal
                vertical
                rotate={180}
                color="rgb(229, 160, 62)"
              />
            </Grid>
            <Grid item>
              <div className="SetGoalDatePlaceHolder"> Your Goal Day</div>
            </Grid>
          </Grid>
          <div className="centerStuff">
            <span className="subDescription">
              Set the day that you <br />
              would like to count from today.
            </span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="redman"> &nbsp; </div>
            <div className="centerStuff">
              <Field
                className="DatePickerCustomStyle"
                id="deadlineID"
                name="goalDay"
                type="text"
                placeholderText="__/__/____"
                component={DatePickerField}
                autoComplete="off"
                normalize={value =>
                  value ? moment(value).format("MM/DD/YYYY") : null
                }
                validate={[required]}
              />
              <Fab
                style={buttonStyle}
                variant="extended"
                size="small"
                color="primary"
                aria-label="Add"
                className="btnMargin"
                type="submit"
              >
                Update
              </Fab>
            </div>
          </form>
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
  </React.Fragment>
);

DailyHourCountDown.propTypes = {
  handleSubmit: PropTypes.func.isRequired, // from enhancer (reduxForm)
  goalDays: PropTypes.array, // from enhancer (connect + firebaseConnect - firebase)
  onDelete: PropTypes.func
};

export default DailyHourCountDown;
