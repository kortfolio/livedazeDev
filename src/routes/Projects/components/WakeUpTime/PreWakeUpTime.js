import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "moment-timezone";
import "moment-duration-format";
import { AfterWakeUpTime } from "../WakeUpTime/AfterWakeUpTime";
import Icon from '@material-ui/core/Icon';
import { Grid } from "@material-ui/core";

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

  render(){
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
          <Icon color="action"> wb_sunny </Icon>
          </Grid>
          <Grid item alignItems="center">
            <div className="SetGoalDatePlaceHolder">  
            Set your wakeup time
            </div>
          </Grid>
      </Grid>
      <div className="centerStuff">
             <span className="subDescription">What time did you <br/>
             get up this morning?
            </span>
      </div>
            <div className="centerStuff">
            {isTimeValid ? <div className="redman"> &nbsp; </div> : <div className="redman">Uh oh. please select the time!</div> }
           
              <label>
                <DatePicker
                 className="helloman"
                 
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
              </label>
              <br/>
              <button
                type="submit"
                className="waves-effect waves-light btn PrimaryBtnColor"
              >
                Update
              </button>
            </div>
          </form>
        ) : (
          <AfterWakeUpTime WakeUpTime={this.state.startDate} />
        )}
      </React.Fragment>
    );
  }
}
