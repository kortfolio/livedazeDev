import React, { Component } from "react";
import { Timer } from "../_components/Timer";

export class PomodoroTimer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: {},
      seconds: 1500
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({
      time: timeLeftVar
    });
  }

  startTimer() {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <div className="card-panel livedazeGrey">
        <span className="white-text">
          <div className="livedaze_pomodoroTimer_headline">Pomodoro Timer </div>{" "}
          <div className="timeSuperSet">
            {" "}
            {this.state.time.m} <sub class="timeSubset"> MIN </sub>
            {this.state.time.s} <sub class="timeSubset"> SEC </sub>{" "}
          </div>{" "}
          <a class="waves-effect waves-light btn-small" onClick={this.startTimer}>START</a>

        </span>{" "}
      </div>
    );
  }
}
