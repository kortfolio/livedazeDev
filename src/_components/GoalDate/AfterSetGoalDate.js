import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export class AfterSetGoalDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goalDate: props.newDate,
      startDate: new Date()
    };
  }

  render() {
    // today
    const date = new Date();
    const goalDate = this.state.goalDate;

    const startDay = "2018-10-10";
    const moment = require("moment");

    const momentizedGoalDate = moment(goalDate).format("LL");
    const remainingDays =
      Math.abs(moment(date, "days").diff(momentizedGoalDate, "days")) + 1;

    const durationSince =
      Math.abs(moment(date, "days").diff(startDay, "days")) + 1;

    return (
      <React.Fragment>
        <div className="livedaze_TabTitle">My D-day</div>
        <div className="livedaze_daysRemaining">
          {remainingDays}
          <span className="daysLeft">
            days left
            <br />
          </span>
        </div>
        <div className="goalDate">{momentizedGoalDate}</div>
      </React.Fragment>
    );
  }
}
