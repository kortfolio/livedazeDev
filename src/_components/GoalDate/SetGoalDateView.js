import React, { Component } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BeforeSetGoalDate } from "../GoalDate/BeforeSetGoalDate";

export class SetGoalDateView extends React.Component {
  constructor(props) {
    super(props);

    this.state =
    {
      isGoalDateSet: false
    };
  }

  render() {
    return (
      <React.Fragment>
        <BeforeSetGoalDate/>
      </React.Fragment>
);

}
}
