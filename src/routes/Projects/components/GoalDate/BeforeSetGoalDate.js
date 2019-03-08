import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

import { AfterSetGoalDate } from "../GoalDate/AfterSetGoalDate";

export class BeforeSetGoalDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      isClicked: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      isClicked: false
    });
  };

  render() {
    let isClicked = this.state.isClicked;

    return (
      <React.Fragment>
        {isClicked ? (
          <form onSubmit={this.handleSubmit}>
            <div className="SetGoalDatePlaceHolder">Set your D day</div>
            <div className="centerStuff">
              <label>
                <DatePicker
                  inline
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  minDate={new Date()}
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
          <AfterSetGoalDate newDate={this.state.startDate} />
        )}
      </React.Fragment>
    );
  }
}
