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
      startDate: props.SleepTime,
      isClicked: true
    };
    console.log("Value of sleeptime from user Greeting " + props.SleepTime);

  }

  render() {
    return (
    <React.Fragment>
    <h1>this will display time</h1>

    </React.Fragment>
);
}
}
