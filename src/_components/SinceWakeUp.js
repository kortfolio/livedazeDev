import React, { Component } from 'react';
import Moment from "react-moment";
import "moment-timezone";
import "moment-duration-format";
import moment from "moment";

export class SinceWakeUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };

    this.now = moment(new Date());
    this.expiration = moment("2019-02-05T06:00-0800");

    // get the difference between the moments
    this.diff = this.expiration.diff(this.now);

    //express as a duration
    this.diffDuration = moment.duration(this.diff);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
    this.now = moment(new Date());
    this.expiration = moment("2019-02-05T06:00-0800");

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
      </div>
    );
  }
}
