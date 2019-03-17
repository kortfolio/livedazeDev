import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "moment-timezone";
import "moment-duration-format";
import { AfterWakeUpTime } from "../WakeUpTime/AfterWakeUpTime";

import { Grid } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";

import Icon from '@mdi/react'
import { mdiFormatListChecks } from '@mdi/js';

import FormControl from '@material-ui/core/FormControl';
import CustomizedInputs from "./CustomizedInputs";


export class TodoList extends React.Component {

  
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
      <div className="fixedHeightPaper">
        <Grid container spacing={8} alignItems="center" justify="center"  alignContent="center">
          <Grid item>
            <Icon path={mdiFormatListChecks}
               color="rgb(255, 184, 24)"
               size={1.2}
               ></Icon>
          </Grid>
          <Grid item>
            <div className="TodoListHeader">
              Morning Planner
            </div>
          </Grid>
        </Grid>
        <Grid>
          <CustomizedInputs/>
          <div className="TodoListHeader">
              + Add more to do
            </div>
          <div className="centerStuff">
            {isTimeValid ? (
              <div className="redman"> &nbsp; </div>
            ) : (
              <div className="redman">Uh oh. please select the time!</div>
            )}
{/*      { classes => (
        <div style={props}>
        </div>
      )}
*/}

{/*
<FormControl className={classes.margin}>
    <InputLabel shrink htmlFor="bootstrap-input" className={classes.bootstrapFormLabel}>
      Bootstrap
    </InputLabel>
    <InputBase
      id="bootstrap-input"
      defaultValue="react-bootstrap"
      classes={{
        root: classes.bootstrapRoot,
        input: classes.bootstrapInput,
      }}
    />
  </FormControl>
    */}

          </div>
        </Grid>
        </div>
      </form>

   
    );
  }
}
