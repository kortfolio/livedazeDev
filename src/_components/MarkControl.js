import React, { Component } from "react";
import DatePicker from "react-datepicker";
import SetGoalDate from "../_components/SetGoalDate";
import "react-datepicker/dist/react-datepicker.css";

function UserGreeting(props) {


        const wakeUpTime = "2019-01-19T07:00-0800";
        const sleepTime = "2019-01-18T22:00-0800";

        const startDay = "2018-10-10";
        const datp = new Date();
        const moment = require("moment");

        const goal = "2019-03-01";
        console.log("value from mark dapt " + datp);
        const goalFormatted = moment(goal).format("LL");


        let remainingDays = Math.abs(moment(datp, "days").diff(goal, "days")) + 1;
        let durationSince =
          Math.abs(moment(datp, "days").diff(startDay, "days")) + 1;

      return (
        <React.Fragment>

          <h1>Welcome back!</h1>
      <span className="white-text">
        <div className="livedaze_TabTitle">

        </div>
          <div className="livedaze_daysRemaining">
            {remainingDays}
            <span className="daysLeft">
              days
              <br />
              </span>
            </div>

        <div className="goalDate">{goalFormatted}</div>
        <div className="goalDate">  {JSON.stringify(props.selected)}


  </div>
        <div>

          It’s been   {durationSince}
               days since you started.
        </div>

      </span>
      </React.Fragment>

  );

}


function GuestGreeting(props) {



  return(
      <React.Fragment>
      <h5>Set yo dday</h5>
      <button onClick={props.onClick}>
      Set time
      </button>

  </React.Fragment>
);
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}


function LoginButton(props) {
  return (
    <div>
    <button onClick={props.onClick}>
      Login
    </button>

    <SetGoalDate/>
    </div>

  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

export class MarkControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {

      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}
