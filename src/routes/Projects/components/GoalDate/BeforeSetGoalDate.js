import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Icon from '@mdi/react'
import { mdiCrown } from '@mdi/js'

import { AfterSetGoalDate } from "../GoalDate/AfterSetGoalDate";
import { Grid } from "@material-ui/core";

export class BeforeSetGoalDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      isClicked: true
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
          <Icon 
          path={mdiCrown}
          size={1}
          horizontal
          vertical
          rotate={180}
          color="grey"
          //spin
          />
          </Grid>
          <Grid item alignItems="center">
            <div className="SetGoalDatePlaceHolder">  
            Set your D DAY
            </div>
          </Grid>
      </Grid>
      <div className="centerStuff">
             <span className="subDescription">Set the day that you <br/>
            would like to count from today.
            </span>
      </div>
      <div className="redman">&nbsp;</div>
            <div className="centerStuff">
              <label>
                <DatePicker
                className="helloman"
                 fixedHeight
                 withPortal
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  minDate={new Date()}
                  placeholderText="0"
                  shouldCloseOnSelect={true}
                  excludeTimes
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
          <AfterSetGoalDate newDate={this.state.startDate} />
        )}
      </React.Fragment>
    );
  }
}
