import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import "moment-timezone";
import "moment-duration-format";
import { Grid, Icon } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import { Spring } from "react-spring/renderprops";

export class AfterSetSleepTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      sleepTime: props.sleepTime
    };
    console.log("value of sleepTime " + this.state.sleepTime);
    this.now = new Date()
    this.expiration = moment(this.state.sleepTime);
    console.log("--------------------------------------------");
    console.log("User Input time (hours):  " + this.expiration.hours());
    console.log("Current Time :  " + this.now);
    console.log("--------------------------------------------");

    // get the difference between the moments.
    this.diff = this.expiration.diff(this.now);
    // and then express as a duration.
    this.diffDuration = moment.duration(this.diff);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const moment = require("moment");
    this.setState({ date: new Date() });
    this.now = moment(new Date());
    const checkInput = "hellobro";
    // get the difference between the moments
    {/*
    console.log("------------------TICK() FUNCTION --------------");
    console.log("user input (it shouldn't change)" + checkInput);
    console.log("value of currenttime " + this.now);
    console.log("------------------END TICK() FUNCTION --------------");
    console.log("자는시간 : " + this.expiration.format('LT'));
    console.log("현재시간 : " + this.now.format('LT'));
  */}
    //express as a duration
    this.diffDuration = moment.duration(this.expiration.diff(this.now));
  
    
  }

  handleSubmit = e => {
    console.log(moment);
    e.preventDefault();
    this.setState({
      isClicked: true
    });
  };

  render() {
    let isClicked = this.state.isClicked;
    const buttonStyle = {
      textDecoration: "none",
      alignSelf: "center",
      letterSpacing: "0.1rem",
      fontFamily: "isotonic",
      fontSize: "12px",
      margin: "10px",
      paddingLeft: "20px",
      paddingRight: "20px",
      backgroundImage:
        "radial-gradient(circle at 12.3% 19.3%, rgb(94, 104, 226) 0%, rgb(166, 171, 241) 100.2%)"
    };

    return (
      <React.Fragment>
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {props => (
            <div style={props}>
                  <div className="timeSuperSet">
                    {this.diffDuration.hours()}
                    <sub className="timeSubset">HRS</sub>
                    {this.diffDuration.minutes()}
                    <sub className="timeSubset">MIN</sub>
                    {this.diffDuration.seconds()}
                    <sub className="timeSubset">SEC</sub>
                  </div>      
                </div>
             
          )}
        </Spring>
      </React.Fragment>
    );
  }
}
