import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import "moment-timezone";
import "moment-duration-format";
export class AfterSetSleepTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      sleepTime: props.SleepTime
    };
    this.now = moment(new Date());
    this.expiration = moment(this.state.sleepTime);

    console.log(this.expiration);

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

  render() {
    return (
      <div>
        <div className="livedaze_TabTitle">remaining time of today</div>
        <div className="timeSuperSet">
          {this.diffDuration.hours()}
          <sub className="timeSubset">HRS</sub>
          {this.diffDuration.minutes()}
          <sub className="timeSubset">MIN</sub>
          {this.diffDuration.seconds()}
          <sub className="timeSubset">SEC</sub>
        </div>
        <button
          type="submit"
          className="waves-effect waves-light btn PrimaryBtnColor"
        >
          reset
        </button>
      </div>
    );
  }
}
