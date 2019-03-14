import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import "moment-timezone";
import "moment-duration-format";
import { Grid, Icon } from "@material-ui/core";
import { PreWakeUpTime } from "./PreWakeUpTime";

export class AfterWakeUpTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      wakeUpTime: props.WakeUpTime
    };
    this.now = moment(new Date());
    this.expiration = moment(this.state.wakeUpTime);

    console.log(this.expiration);

    // get the difference between the moments.
    this.diff = this.now.diff(this.expiration);
    // and then express as a duration.
    this.diffDuration = moment.duration(this.diff);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  handleSubmit = e => {
    console.log(moment)
    e.preventDefault();
    this.setState({
      isClicked: true
    });
  };


  tick() {
    const moment = require("moment");
    this.setState({ date: new Date() });
    this.now = moment(new Date());
    this.expiration = moment(this.state.wakeUpTime);

    // get the difference between the moments
    this.diff = this.now.diff(this.expiration);
    //express as a duration
    this.diffDuration = moment.duration(this.diff);
  }

  render() {
    let isClicked = this.state.isClicked;
    /*  const today = new Date();*/
    return (
      
      <React.Fragment>
        {isClicked ? (
         <PreWakeUpTime/>
        ) : (
          <form onSubmit={this.handleSubmit}>
          <Grid
            container
            spacing={8}
            alignItems="center"
            justify="center"
          >
          <Grid item alignItems="center" alignContent="center">
          <Icon color="action"> wb_sunny </Icon>
          </Grid>
          <Grid item alignItems="center">
            <div className="SetGoalDatePlaceHolder">  
            You've stayed awake for
            </div>
          </Grid>
      </Grid>
      <div className="centerStuff">
             <span className="subDescription">Good Luck! <br/>
             Make today count.
            </span>
      </div>

          <div className="timeSuperSet">
            {this.diffDuration.hours()}
            <sub className="timeSubset">HRS</sub>
            {this.diffDuration.minutes()}
            <sub className="timeSubset">MIN</sub>
            {this.diffDuration.seconds()}
            <sub className="timeSubset">SEC</sub>
          </div>
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
