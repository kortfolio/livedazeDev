import React from "react";
import PropTypes from "prop-types";
import { Grid, Avatar } from "@material-ui/core";
import moment from "moment";
import { withStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import BackSpaceIcon from "@material-ui/icons/Backspace";
import Icon from "@mdi/react";
import { mdiCrown } from "@mdi/js";

import { mdiFire } from "@mdi/js";

import { mdiKeyboardBackspace } from "@mdi/js";
import { mdiCalendarCheck } from "@mdi/js";
import { Spring } from "react-spring/renderprops";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
const styles = theme => ({
  card: {
    display: "flex",
    background: "#4c89db",
    backgroundColor: "#ff7878",
    backgroundImage: "linear-gradient(315deg, #ff7878 0%, #ff0000 74%)"
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
  }
});

export const DisplaySleepTime = ({ goalDay, classes, today, onDelete }) => (
  <Card className={classes.card}>
    <CardMedia>
      <Grid container justify="center" style={{ height: "100%" }}>
        <Icon path={mdiFire} size={3.5} color="white" />
      </Grid>
    </CardMedia>
    
    <div className={classes.details}>
      <CardContent className={classes.content}>
        <Grid
          item
          align="right"
          className={classes.goalDayTitle}
        >
          <Icon path={mdiKeyboardBackspace}  onClick={onDelete} size={0.5} color="white" cursor="pointer"  />
         </Grid>
        <Typography align="right" className={classes.goalDayTitle}>
          Remaining time
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
        <Grid
          container
          align="right"
          alignContent="flex-end"
          direction="row"
          alignItems="center"
        >
          <span className="GoalDayTextDecorator" />
        </Grid>
      </CardContent>
    </div>
  </Card>
);

DisplaySleepTime.defaultProps = {
  showDelete: true
};
DisplaySleepTime.propTypes = {
 // onDelete: PropTypes.func,
  //showDelete: PropTypes.bool
};

export default withStyles(styles, { withTheme: true })(DisplaySleepTime);
