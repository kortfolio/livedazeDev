import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { AfterSetSleepTime } from "../SleepTimeCountDown/AfterSetSleepTime";

import moment from "moment";
import "moment-timezone";
import "moment-duration-format";


import { GuestGreeting }  from "../ConditionalRenderingTest/GuestGreeting";
import { UserGreeting }  from "../ConditionalRenderingTest/UserGreeting";

function LogoutButton(props) {
  return (
    <button
    className="waves-effect waves-light btn PrimaryBtnColor"
    onClick={props.onClick}>
      Back
    </button>
  );
}

function LoginButton(props) {
  return (
    <button
    className="waves-effect waves-light btn PrimaryBtnColor"
    onClick={props.onClick}
    SleepTime={props.userSleepTime}>
      Update
    </button>
  );
}


function Greeting(props) {
  console.log("Greeting is loading");
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting
            SleepTime="ssibal"/>;
  }
  return <GuestGreeting />;
}


export class ConditionalRenderingTest extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
     this.handleChange = this.handleChange.bind(this);

  }

  handleChange(date) {
   this.setState({
     startDate: date
   });
 }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
      console.log("Buttons are loading");
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton
                  onClick={this.handleLogoutClick}
                   />;
    } else {
      (button = <LoginButton onClick={this.handleLoginClick}
            />
  );
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}
