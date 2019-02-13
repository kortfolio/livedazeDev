import React, { Component } from "react";
import Moment from "react-moment";
import "moment-timezone";
import "moment-duration-format";
import moment from "moment";
import DatePicker from "react-datepicker";



function LoginButton(props) {
 return (
   <button onClick={props.onClick}>
     Set time
   </button>
 );
}







function GuestGreeting(props) {
    return <div className="livedaze_pomodoroTimer_headline">Set your D DAY!! </div>;
  }

  {/*Display Calculated Dates (D-Day)*/}
  function UserGreeting(props) {
        const gemoddi = <div>{props.selected}</div>;

        const wakeUpTime = "2019-01-19T07:00-0800";
        const sleepTime = "2019-01-18T22:00-0800";

        const startDay = "2018-10-10";
        const datp = new Date();
        const moment = require("moment");

        const goal = "2019-03-01";
        console.log("value from mark dapt " + datp);
        const goalFormatted = moment(goal).format("LL");


        console.log("value of gemoddi" + gemoddi);
        let remainingDays = Math.abs(moment(datp, "days").diff(goal, "days")) + 1;
        let durationSince =
          Math.abs(moment(datp, "days").diff(startDay, "days")) + 1;

      return (
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
    );
    }

    function Greeting(props) {
      const isLoggedIn = props.isLoggedIn;
      if (isLoggedIn) {
        return <UserGreeting/>;
      }else
    return <GuestGreeting  />;
}

function LogoutButton(props) {

 return (
<div>
   <button onClick={props.onClick}>
   </button>
   <ul>
   <li>
     </li>
  {JSON.stringify(props.value)}
     </ul>
   <h4></h4>
</div>
 );
}


export class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'ahahah',
      startDate: new Date()
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }


  handleLoginClick() {
    this.setState({
      isLoggedIn: true,


    });

  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  updateInput(event){
  this.setState({inputValue : event.target.value})
  }

handleSubmit(){
console.log('Your input value is: ' + this.state.inputValue)
//Send state to the server code
}



  handleChange(date) {
  this.setState({
    startDate: date
  });
  console.log("Rendering.. from handlechange(date)");
    console.log(date);

}


  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      console.log("Loggedin conditional ");
      console.log(this.state.startDate);

      button = <LogoutButton onClick={this.handleLogoutClick}
                             value = {this.state.startDate}
         />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick}
       />;
    }

    return (
      <div className="card-panel livedazeGrey">
        <span className="white-text">
            <div className="timeSuperSet">
            </div>{" "}
              <div className="BtnControl">
              <div>
                <Greeting isLoggedIn={isLoggedIn} />
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChange}

                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={10}
                  dateFormat="h:mm aa"
                  timeCaption="Time"
                  />
               {button}

              </div>
              <div>emememem {this.state.inputValue} gogogo</div>

            </div>
          </span>

        </div>
    );
  }
}
