import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import moment from "moment";
import { withStyles } from "@material-ui/core/styles";

import Icon from "@mdi/react";

import { mdiKeyboardBackspace } from "@mdi/js";
import { mdiCalendarCheck } from "@mdi/js";
import { Spring } from "react-spring/renderprops";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import styles from "./GoalDate.styles";

export const DisplayGoalDay = ({ goalDay, classes, onDelete }) => (
  
  <React.Fragment>
    {/* Material Icon for the card */}
    <CardMedia>
      <Grid container justify="center" style={{ height: "100%" }}>
        <Icon path={mdiCalendarCheck} size={3.5} color="white" />
      </Grid>
    </CardMedia>
    {/* Card Content */}
    <div className={classes.details}>
      <CardContent className={classes.content}>
        <Grid item align="right" className={classes.goalDayTitle}>
          <Icon
            path={mdiKeyboardBackspace}
            onClick={onDelete}
            size={0.5}
            color="white"
            cursor="pointer"
          />
        </Grid>
        <Typography align="right" className={classes.goalDayTitle}>
          My Goal Day
        </Typography>
        <Grid
          container
          alignItems="flex-start"
          justify="flex-end"
          direction="row"
        >
          <Spring
            from={{ number: 0 }}
            to={{
              number:
                Math.abs(moment(new Date(), "days").diff(goalDay, "days")) + 1
            }}
          >
            {props => (
              <div className="livedaze_daysRemaining">
                {Math.floor(props.number)}
              </div>
            )}
          </Spring>
          <span className="DaysLeftTextDecorator">
            Days
            <br />
            Left
          </span>
        </Grid>
        <Typography align="right" className={classes.goalDayTitle}>
          {goalDay}
        </Typography>
      </CardContent>
    </div>
  </React.Fragment>
);

DisplayGoalDay.defaultProps = {
  showDelete: true
};
DisplayGoalDay.propTypes = {
  onDelete: PropTypes.func,
  showDelete: PropTypes.bool
};

export default withStyles(styles, { withTheme: true })(DisplayGoalDay);
