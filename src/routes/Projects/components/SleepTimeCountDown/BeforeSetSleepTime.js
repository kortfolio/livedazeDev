import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { AfterSetSleepTime } from "../SleepTimeCountDown/AfterSetSleepTime";
 
import "moment-timezone";
import "moment-duration-format";
import Icon from '@material-ui/core/Icon';
import { Grid } from "@material-ui/core";


export class BeforeSetSleepTime extends React.Component {
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
    console.log(this.state.startDate);
    e.preventDefault();

    if( (this.state.startDate) == null){
      this.setState({
        isTimeValid: false
      });
    }else {    
    this.setState({
      isClicked: false
    });
  } 
  };

  render() {
    
    let isClicked = this.state.isClicked;
    let isTimeValid = this.state.isTimeValid;
    const today = new Date();
    return (
      <React.Fragment>
        {isClicked ? (
          <form onSubmit={this.handleSubmit}>
          <Grid
            container
            spacing={8}
            alignItems="center"
            justify="center"
          >
          <Grid item alignItems="center" alignContent="center">
          <Icon color="action">
                  hotel
              </Icon>
          </Grid>
          <Grid item alignItems="center">
            <div className="SetGoalDatePlaceHolder">  
            Set your Sleep time
            </div>
          </Grid>
      </Grid>
      <div className="centerStuff">
             <span className="subDescription">Choose the hours that <br/>
             best meet your sleep needs.
            </span>
      </div>


            <div className="centerStuff">
              <label>
              {isTimeValid ? <div className="redman"> &nbsp; </div> : <div className="redman">Uh oh. please select the time!</div> }
             
                <DatePicker
                  className="helloman"
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  showTimeSelect
                  minTime={today}
                  maxTime={
                      new Date(
                        today.getYear(),
                        today.getMonth(),
                        today.getDay(),
                        23,
                        50,
                        0,
                        0
                      )
                  }
                  showTimeSelectOnly
                  timeIntervals={10}
                  dateFormat="h:mm aa"
                  timeCaption="Time"
                  placeholderText="0:00 PM"
                />
                
              </label>
               
              <button
                type="submit"
                className="waves-effect waves-light btn PrimaryBtnColor"
              >
                Update
              </button>
             </div>
          </form>
        ) : (
          <AfterSetSleepTime SleepTime={this.state.startDate} />
        )}
      </React.Fragment>
    );
  }
}
