import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import Icon from '@mdi/react';
import { mdiCrown } from '@mdi/js';
import { Grid } from "@material-ui/core";
import {BeforeSetGoalDate} from './BeforeSetGoalDate';

export class AfterSetGoalDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goalDate: props.newDate,
      startDate: new Date(),
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      isClicked: true
    });
  };

  render() {
    // today
    const date = new Date();
    const goalDate = this.state.goalDate;

    //const startDay = "2018-10-10";
    const moment = require("moment");

    const momentizedGoalDate = moment(goalDate).format("LL");
    const remainingDays =
      Math.abs(moment(date, "days").diff(momentizedGoalDate, "days")) + 1;

   /* const durationSince =
   Math.abs(moment(date, "days").diff(startDay, "days")) + 1;
  */

    let isClicked = this.state.isClicked;
 return (
    <React.Fragment>
     {
       isClicked ? (
      <BeforeSetGoalDate/>
     ) : (
      <form onSubmit={this.handleSubmit}>
       <Grid
            container
            spacing={8}
            alignItems="center"
            justify="center"
          >
          <Grid item alignItems="center" alignContent="center">
          <Icon path={mdiCrown}
        size={1}
        horizontal
        vertical
        rotate={180}
        color="grey"
        //spin
        />
          </Grid>
          <Grid item alignItems="center">
            <div className="SetGoalDatePlaceHolder">  
            Your D DAY
            </div>
          </Grid>
      </Grid>
      {/* Display remaining days */}
        <Grid item xs={12} sm container   alignItems="center">        
         
          <Grid item xs={12} sm={6}>
            <div className="livedaze_daysRemaining">
            {remainingDays}
            </div>
          </Grid>
        <Grid item xs={12} sm={6}>
            <div className="fhfhfkfeofepf">
            Days<br/>Left
            </div>
        </Grid>
        </Grid>
     
      <div className="goalDate">{momentizedGoalDate}</div>
      <div className="centerStuff">
      <button
      type="submit"
      className="waves-effect waves-light btn PrimaryBtnColor"
    >
      reset
    </button>
    </div>
      </form>
     )}
   </React.Fragment>

    
    );
  }
}
