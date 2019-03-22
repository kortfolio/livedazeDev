import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import "moment-timezone";
import "moment-duration-format";

import { Grid } from "@material-ui/core";
import Icon from '@mdi/react'
import  { mdiCheckboxMarkedCircle } from '@mdi/js';

import CustomizedInputs from "./CustomizedInputs";


export class CompletedTask extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
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
  
    let isTimeValid = this.state.isTimeValid;
    return (
      <form onSubmit={this.handleSubmit}>
      <div className="fixedHeightPaper">
        <Grid container spacing={8} alignItems="center" justify="center" alignContent="center"> 
          <Grid item >
            <Icon path={mdiCheckboxMarkedCircle}
               color="rgb(116, 228, 162)"
               size={1.2}
               />
          </Grid>
          <Grid item>
            <div className="PostponeHeader">
             Completed
            </div>
          </Grid>
        </Grid>
        <Grid>
          <CustomizedInputs/>
          <div className="centerStuff">
            {isTimeValid ? (
              <div className="redman"> &nbsp; </div>
            ) : (
              <div className="redman">Uh oh. please select the time!</div>
            )}
          </div>
        </Grid>
        </div>
      </form>

   
    );
  }
}
