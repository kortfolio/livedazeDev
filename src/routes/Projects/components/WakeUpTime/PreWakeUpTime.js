import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "moment-timezone";
import "moment-duration-format";
import { AfterWakeUpTime } from "../WakeUpTime/AfterWakeUpTime";

import { Grid } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";

import Icon from '@mdi/react'
import { mdiWeatherSunny } from '@mdi/js';
export class PreWakeUpTime extends React.Component {
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
      <React.Fragment>
        {isClicked ? (
          <form onSubmit={this.handleSubmit}>
          
          <div className="fixedHeightPaper">
            <Grid container spacing={8} alignItems="center" justify="center"  alignContent="center">
              <Grid item >
                <Icon path={mdiWeatherSunny}
                   color="rgb(255, 184, 24)"
                   size={1.2}
                   ></Icon>
              </Grid>
              <Grid item>
                <div className="SetGoalDatePlaceHolder">
                  Set your wakeup time
                </div>
              </Grid>
            </Grid>
            <div className="centerStuff">
              <span className="subDescription">
                What time did you <br />
                get up this morning?
              </span>
            </div>
            <Grid>
              <div className="centerStuff">
                {isTimeValid ? (
                  <div className="redman"> &nbsp; </div>
                ) : (
                  <div className="redman">Uh oh. please select the time!</div>
                )}

                <DatePicker
                  className="DatePickerCustomStyle"
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
                  placeholderText="0:00 AM"
                />
                <br />
                <Fab
                  style={buttonStyle}
                  variant="extended"
                  size="small"
                  color="primary"
                  aria-label="Add"
                  className="btnMargin"
                  type="submit"
                >
                  Update
                </Fab>
              </div>
            </Grid>
            </div>
          </form>
        ) : (
          <AfterWakeUpTime WakeUpTime={this.state.startDate} />
        )}
      </React.Fragment>
    );
  }
}
