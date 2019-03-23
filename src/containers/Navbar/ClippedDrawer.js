import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import HomeIcon from "@material-ui/icons/Home";
import BarChartIcon from "@material-ui/icons/BarChart";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";

import SettingsIcon from "@material-ui/icons/Settings";
import NotificationsIcon from "@material-ui/icons/Notifications";

import FeedbackIcon from "@material-ui/icons/Feedback";

import AlarmIcon from "@material-ui/icons/Alarm";
import theme from "./NavbarTheme";

function ClippedDrawer(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <List>
          {["Home", "Dashboard", "Focus Time", "Break Time"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  
                  {index === 0 && <HomeIcon />}
                  {index === 1 && <BarChartIcon />}
                  {index === 2 && <AlarmIcon />}
                  {index === 3 && <BeachAccessIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
        <Divider />
        <List>
          {["Settings", "Notification", "Feedback"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 && <SettingsIcon />}
                {index === 1 && <NotificationsIcon />}
                {index === 2 && <FeedbackIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(theme)(ClippedDrawer);
