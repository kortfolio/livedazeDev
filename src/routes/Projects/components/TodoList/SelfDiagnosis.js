import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "moment-timezone";
import "moment-duration-format";
import { AfterWakeUpTime } from "../WakeUpTime/AfterWakeUpTime";

import { Grid } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";

import Icon from '@mdi/react'
import { mdiDeathStar } from '@mdi/js';

import FormControlLabelPosition from "./FormControlLabelPosition";
import { mdiCat } from '@mdi/js';
import FormControlTesting from "./FormControlTesting";
  
export class SelfDiagnosis extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      isClicked: true,
      isTimeValid: true
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
    let isTimeValid = this.state.isTimeValid;

    const today = new Date();
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
      <form onSubmit={this.handleSubmit}>  
        <Grid container spacing={8} alignItems="center" justify="center">
          <Grid item alignItems="center" alignContent="center">
            <Icon path={mdiCat}
               color="#beb0f4"
               size={1.2}
               />
          </Grid>
          <Grid item alignItems="center">
            <div className="SelfCheckHeader">
            Evaluate Your Progress
            </div>
          </Grid>
        </Grid>
       
        <Grid item alignItems="center">
        <FormControlTesting/>
        
        </Grid>
      </form>
    );
  }
}
