import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import "moment-timezone";
import "moment-duration-format";
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
    this.expiration = moment(this.state.wakeUpTime);

    // get the difference between the moments
    this.diff = this.now.diff(this.expiration);

    //express as a duration
    this.diffDuration = moment.duration(this.diff);
  }

  render() {
    return (
      <div>
        <div className="livedaze_TabTitle">IT's BEEN</div>
        <div className="timeSuperSet">
          {this.diffDuration.hours()}
          <sub className="timeSubset">HRS</sub>
          {this.diffDuration.minutes()}
          <sub className="timeSubset">MIN</sub>
          {this.diffDuration.seconds()}
          <sub className="timeSubset">SEC</sub>
        </div>
        <div className="livedaze_TabTitle">SINCE YOU WAKE UP</div>
        <div>RESET</div>
      </div>
    );
  }
}
