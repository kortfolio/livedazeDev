import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { AfterWakeUpTime } from "../WakeUpTime/AfterWakeUpTime";

import moment from "moment";
import "moment-timezone";
import "moment-duration-format";

export class PreWakeUpTime extends React.Component {
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
        {isClicked ? (
          <form onSubmit={this.handleSubmit}>
            <div className="SetGoalDatePlaceHolder">
              When did you get up today?
            </div>
            <div className="centerStuff">
              <label>
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  showTimeSelect
                  minTime={
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
                  maxTime={today}
                  showTimeSelectOnly
                  timeIntervals={10}
                  dateFormat="h:mm aa"
                  timeCaption="Time"
                />
              </label>
              <br />
              <button
                type="submit"
                className="waves-effect waves-light btn PrimaryBtnColor"
              >
                Update
              </button>
            </div>
          </form>
        ) : (
          <AfterWakeUpTime WakeUpTime={this.state.startDate} />
        )}
      </React.Fragment>
    );
  }
}
