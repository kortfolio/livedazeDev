import React, { Component } from 'react';

export class Timer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      time: 25,
      start: 25,
      isOn: false
    }
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }
  startTimer() {
    this.setState({
      time: this.state.time,
      start: Date.now() - this.state.time,
      isOn: true
    })
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.start
    }), 1);
  }
  stopTimer() {
    this.setState({isOn: false})
    clearInterval(this.timer)
  }
  resetTimer() {
    this.setState({time: 25})
  }
  render() {
    let start = (this.state.time == 25) ?
    <a className="waves-effect waves-light btn" onClick={this.startTimer}>Start</a>
:
      null
    let stop = (this.state.isOn) ?
      <a className="waves-effect waves-light btn" onClick={this.stopTimer}>Stop</a>
      :
      null
    let reset = (this.state.time != 25 && !this.state.isOn) ?
    <a className="waves-effect waves-light btn" onClick={this.resetTimer}>reset</a>
 :

      null
    let resume = (this.state.time != 25 && !this.state.isOn) ?
      <a className="waves-effect waves-light btn" onClick={this.startTimer}>Resume</a>
       :
      null
    return(
      <div>
        <h3>{this.state.time}</h3>
        {start}
        {resume}
        {stop}
        {reset}
      </div>
    )
  }
}
