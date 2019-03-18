import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import Icon from '@mdi/react';
import { mdiCrown } from '@mdi/js';
import { Grid } from "@material-ui/core";
import {BeforeSetGoalDate} from './BeforeSetGoalDate';
import Fab from "@material-ui/core/Fab";
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
    let isClicked = this.state.isClicked;
    // today
    const date = new Date();
    const goalDate = this.state.goalDate;
    //const startDay = "2018-10-10";
    const moment = require("moment");
    const momentizedGoalDate = moment(goalDate).format("LL");
    const remainingDays =
      Math.abs(moment(date, "days").diff(momentizedGoalDate, "days")) + 1;
    
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
 
 return (
    <React.Fragment>
     {
       isClicked ? (
      <BeforeSetGoalDate/>
     ) : (
      <form onSubmit={this.handleSubmit}>
      <div className="fixedHeightPaper">
            <Grid container spacing={8} alignItems="center" justify="center">
              <Grid item alignItems="center" alignContent="center">
                <Icon
                  path={mdiCrown}
                  size={1}
                  horizontal
                  vertical
                  rotate={180}
                  color="grey"
                />
              </Grid>
              <Grid item alignItems="center">
                <div className="SetGoalDatePlaceHolder">Your D DAY</div>
              </Grid>
            </Grid>
            <div className="centerStuff">
              <span className="subDescription">
                Good Luck! <br />
              </span>
            </div>
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
      <Fab
                style={buttonStyle}
                variant="extended"
                size="small"
                color="primary"
                aria-label="Add"
                className="btnMargin"
                type="submit"
              >
                Reset
              </Fab>
    </div>
    </div>
      </form>
     )}
   </React.Fragment>

    
    );
  }
}
