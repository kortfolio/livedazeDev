import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { AfterSetSleepTime } from "../SleepTimeCountDown/AfterSetSleepTime";

import moment from "moment";
import "moment-timezone";
import "moment-duration-format";

export class GuestGreeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      isClicked: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
    console.log("Rendering from... handleChange(date)");
    console.log(this.state.startDate);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      isClicked: false
    });
  };

  render() {
    let isClicked = this.state.isClicked;
    const today = new Date();
    return (
      <React.Fragment>
          <form onSubmit={this.handleSubmit}>
            <div className="SetGoalDatePlaceHolder">
              What time do you plan to sleep tonight?
            </div>
            <div className="centerStuff">
              <label>
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  showTimeSelect
                  minTime={today}
                  maxTime={
                      new Date(
                        today.getYear(),
                        today.getMonth(),
                        today.getDay(),
                        0,
                        0,
                        0,
                        0
                      )
                  }
                  showTimeSelectOnly
                  timeIntervals={10}
                  dateFormat="h:mm aa"
                  timeCaption="Time"
                />
              </label>
              <br />
           
            </div>
          </form>
      </React.Fragment>
    );
  }
}
