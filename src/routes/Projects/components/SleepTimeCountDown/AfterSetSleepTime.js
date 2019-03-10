import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import "moment-timezone";
import "moment-duration-format";
import { BeforeSetSleepTime } from "./BeforeSetSleepTime";
import { Grid, Icon } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
export class AfterSetSleepTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      sleepTime: props.SleepTime
    };
    this.now = moment(new Date());
    this.expiration = moment(this.state.sleepTime);

    console.log("value of this.expiration " + this.expiration);

    // get the difference between the moments.
    this.diff = this.expiration.diff(this.now);
    // and then express as a duration.
    this.diffDuration = moment.duration(this.diff);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const moment = require("moment");
    this.setState({ date: new Date() });
    this.now = moment(new Date());
    this.expiration = moment(this.state.sleepTime);

    // get the difference between the moments
    this.diff = this.expiration.diff(this.now);
    //express as a duration
    this.diffDuration = moment.duration(this.diff);
  }

  handleSubmit = e => {
    console.log(moment)
    e.preventDefault();
    this.setState({
      isClicked: true
    });
  };

  
  render() {

    const faviconStyle = {
      backgroundColor: red
    }

    let isClicked = this.state.isClicked;
    const today = new Date();
    return (
      <React.Fragment>
        {isClicked ? (
         <BeforeSetSleepTime/>
        ) : (
          <form onSubmit={this.handleSubmit}>
          <Grid
            container
            spacing={8}
            alignItems="center"
            justify="center"
          >
          <Grid item alignItems="center" alignContent="center">
          <Icon color="action">
                  hotel
              </Icon>
          </Grid>
          <Grid item alignItems="center">
            <div className="SetGoalDatePlaceHolder">  
            Remaining Time of today
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