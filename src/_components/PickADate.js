import React, { Component } from 'react';
import $ from "jquery";
import { Input, Card, Row, Col, Icon } from "react-materialize";

export class PickADate extends Component {
  constructor(){
    super();
    this.handleDateChange = this.handleDateChange.bind(this);
    this.state = {
      roomData: {}
    }
  }
  handleDateChange(e){
    this.setState({roomData: { ...this.state.roomData, date: e.select }})
  }
  componentDidMount () {
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year
      onSet: this.handleDateChange // returns { select: dateInMilliseconds }
    });
  }

  render () {
    let today = new Date().toISOString().split("T")[0];
    let _this = this;
    return (
      <Input type='date' className='datepicker' data-value={today} />
    )
  }
};
