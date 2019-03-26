import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import moment from "moment";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import BackSpaceIcon from "@material-ui/icons/Backspace"; 
import Icon from "@mdi/react";
import { mdiCrown } from "@mdi/js";
import { Spring } from "react-spring/renderprops";

export const DisplayGoalDay = ({ goalDay, classes, today, onDelete }) => (
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
                    <div className="SetGoalDatePlaceHolder">Your Goal Day
      
               </div>
                 
                  </Grid>
                </Grid>
                <div className="centerStuff">
                  <span className="subDescription">
                    Good Luck!
                    <br />
                    Do your best!!
                  </span>
                </div>
    <Grid item xs={12} sm container alignItems="center">
      <Grid item xs={12} sm={6}>
        <div className="livedaze_daysRemaining">
          <Spring
            from={{ number: 0 }}
            to={{ number: Math.abs(moment(new Date(), "days").diff(goalDay, "days")) + 1}}
          >
            {props => <div>{Math.floor(props.number)}</div>}
          </Spring>
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className="DaysLeftTextDecorator">
          Days
          <br/>
          Left
        </div>    
            
      </Grid>
      <div className="centerStuff">
      
      <span className="GoalDayTextDecorator">
      {goalDay}
      <br></br>
      <span className="resetTextDecorator" onClick={onDelete}>
        GO back
        </span>
      </span>
      </div>
      
    </Grid>

    
  </React.Fragment>
);

DisplayGoalDay.defaultProps = {
  showDelete: true
};
DisplayGoalDay.propTypes = {
  onDelete: PropTypes.func,
  showDelete: PropTypes.bool
};

export default DisplayGoalDay;
