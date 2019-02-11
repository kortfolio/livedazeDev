import React, { Component } from 'react';
import css from 'file.css';
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
