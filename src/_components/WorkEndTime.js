import React from "react";

import $ from "jquery";

import Moment from "react-moment";
import "moment-timezone";
import "moment-duration-format";
import moment from "moment";

import { Button, Card, Row, Col, Icon } from "react-materialize";
import M from "materialize-css";


export class WorkEndTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      userWorkEndTime: "",
      list: []
    };
    this.now = moment(new Date());
    this.expiration = moment("2019-02-05T19:00-0800");
    // get the difference between the moments
    this.diff = this.expiration.diff(this.now);
    //express as a duration
    this.diffDuration = moment.duration(this.diff);
  }

  tick() {
    this.setState({ date: new Date() });
    this.now = moment(new Date());
    this.expiration = moment("2019-02-05T19:00-0800");

    // get the difference between the moments
    this.diff = this.expiration.diff(this.now);
    //express as a duration
    this.diffDuration = moment.duration(this.diff);
  }

  changeUserWorkEndTime(input) {
    this.setState({
      userWorkEndTime: input
    });
  }

  addToList(input) {
    //Make a copy of this.state.list instaed of directly accesing list array.
    let listArray = this.state.list;
    console.log("value of listArray in HomePage.jsx: " + listArray + "--");

    listArray.push(input);
    console.log("value of input in HomePage.jsx: " + input + "--");

    this.setState({
      list: listArray,
      userWorkEndTime: "",
      showMe: true
    });
  }

  operation() {
    this.setState({
      showMe: !this.state.showMe
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);

    console.log("below is the value of M??");
    console.log(M);
    M.AutoInit();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  //            {$('#timepicker1').timepicker();}

  render() {
    return (
      <div>
        <div className="livedaze_pre_headline">
          This is the option selector integrated with Materialized CSS JQuery
        </div>

        <script src="https://code.jquery.com/jquery-2.1.1.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js" />


        <div className="livedaze_pre_headline">Primitive Time picker</div>
        <div className="work-end-time">
          <input
            type="time"
            id="appt"
            name="appt"
            min="0:00"
            max="24:00"
            required
            onChange={e => this.changeUserWorkEndTime(e.target.value)}
            value={this.state.userWorkEndTime}
            name="form-control"
          />
          <button
            onClick={() => this.addToList(this.state.userWorkEndTime)}
            className="btn btn-light"
          >
            it is working!
                      </button>
        </div>
        <ul>
          {this.state.list.map(val => (
            <li>{val}</li>
          ))}
        </ul>

        {/*<div className="livedaze_TabTitle">YOU WILL GO HOME IN</div>*/}
        {/*<h4>{this.diffDuration.hours()}HR: {this.diffDuration.minutes()}MIN: {this.diffDuration.seconds()}SEC</h4>*/}
    </div>
    );
  }
}
