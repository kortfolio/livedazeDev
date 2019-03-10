import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

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
          <Icon path={mdiCrown}
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
          <Grid>
 
            </Grid>
            <div className="centerStuff">
              <label>
                <DatePicker
                 fixedHeight
                 withPortal
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  minDate={new Date()}

                />
              </label>
              <br />
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
