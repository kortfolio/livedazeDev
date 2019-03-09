import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import "moment-timezone";
import "moment-duration-format";

export class UserGreeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sleepTime : props.newDate,
      isClicked: true
    };
    console.log("[RENDERED] UserGreeting.js : " + this.state.sleepTime);


  }

  render() {
    const sleeptime = this.state.sleeptime
    return (
    <React.Fragment>
      { this.sleepTime }
    <h1>This area </h1>

    </React.Fragment>
);
}
}
