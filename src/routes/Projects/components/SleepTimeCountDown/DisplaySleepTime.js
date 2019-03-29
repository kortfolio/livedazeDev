import React from "react";
import PropTypes from "prop-types";
import { Grid, Avatar, Paper } from "@material-ui/core";
import moment from "moment";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import BackSpaceIcon from "@material-ui/icons/Backspace";
import Icon from "@mdi/react";
import { mdiCrown } from "@mdi/js";

import { mdiFire } from "@mdi/js";

import { mdiKeyboardBackspace } from "@mdi/js";
import { mdiCalendarCheck } from "@mdi/js";
import { Spring } from "react-spring/renderprops";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import theme from "./SleepTime.styles";

import { AfterSetSleepTime } from "./SleepTime_BackUp/AfterSetSleepTime";

const styles = theme => ({
  card: {
    display: "flex",
    background: "#4c89db",
    backgroundColor: "#045de9",
    backgroundImage: "linear-gradient(315deg, #045de9 0%, #09c6f9 74%)"
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

export const DisplaySleepTime = ({
  sleepTime,
  classes,
  today,
  onDelete
}) => (
    <div>
      <CardContent>
        <Grid item align="right">
          <Tooltip title="Set a bedtime. wake at the same time.">
            <Icon
              path={mdiKeyboardBackspace}
              onClick={onDelete}
              size={0.5}
              color="white"
              cursor="pointer"
            />
          </Tooltip>
        </Grid>
        <Typography align="right">
          My Bedtime
        </Typography>
        {/* Goal Day Picker */}
        <Grid
          container
          alignItems="flex-start"
          justify="flex-end"
          direction="row"
        >
          <AfterSetSleepTime sleepTime={sleepTime} />
        </Grid>
      </CardContent>
    </div>
);

DisplaySleepTime.defaultProps = {
  showDelete: true
};
DisplaySleepTime.propTypes = {
  onDelete: PropTypes.func,
  showDelete: PropTypes.bool
};

export default withStyles(theme, { withTheme: true })(DisplaySleepTime);
