import React, { Component } from "react";

export class PomodoroTimer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: {},
      seconds: 1500,
      isOn: false
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
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
    this.setState({ time: timeLeftVar });
  }

  startTimer() {
    if (this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
    isOn: true;
  }

  stopTimer() {
    this.setState({ isOn: false });
    clearInterval(this.timer);
  }
  resetTimer() {
    this.setState({
      time: {},
      seconds: 1500,
      isOn: false
    });
    let timeLeftVar = this.secondsToTime(1500);
    this.setState({ time: timeLeftVar });
    this.timer = 0;
  }

  countDown() {
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
      isOn: true
    });

    if (seconds == 0) {
      clearInterval(this.timer);
    }
  }

  render() {
    let start =
      this.state.seconds == 1500 ? (
        <a
          className="waves-effect waves-light btn customBtnColor"
          onClick={this.startTimer}
        >
          Start
        </a>
      ) : null;
    let stop = this.state.isOn ? (
      <a
        className="waves-effect waves-light btn customBtnColor"
        onClick={this.stopTimer}
      >
        Pause
      </a>
    ) : null;

    let reset =
      this.state.seconds != 1500 && !this.state.isOn ? (
        <a
          className="waves-effect waves-light btn customBtnColor"
          onClick={this.resetTimer}
        >
          reset
        </a>
      ) : null;
    let resume =
      this.state.seconds != 1500 && !this.state.isOn ? (
        <a
          className="waves-effect waves-light btn customBtnColor"
          onClick={this.startTimer}
        >
          Resume
        </a>
      ) : null;
    return (
      <div className="card-panel livedazeGrey">
        <span className="white-text">
          <div className="livedaze_pomodoroTimer_headline">Pomodoro Timer </div>{" "}
          <div className="timeSuperSet">
            {" "}
            {this.state.time.m} <sub className="timeSubset"> MIN </sub>
            {this.state.time.s} <sub className="timeSubset"> SEC </sub>{" "}
          </div>{" "}
          <div className="BtnControl">
            {start}
            {stop}
            {resume}
            {reset}
          </div>
        </span>{" "}
      </div>
    );
  }
}
