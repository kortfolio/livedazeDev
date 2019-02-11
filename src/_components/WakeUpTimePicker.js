import React, { Component } from 'react';
import css from 'file.css';
import TimePicker from 'time'
export class WakeUpTimePicker extends React.Component {
  constructor() {
    super();
    this.state = {
      time: '10:00'
    };
    }


  OnChange() {
this.setState({ time })  }

  render() {
    return (
      <div>
        <TimePicker
        />
      </div>
    );
  }
}
