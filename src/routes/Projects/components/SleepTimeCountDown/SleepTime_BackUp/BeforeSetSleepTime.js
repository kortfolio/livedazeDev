import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Fab from '@material-ui/core/Fab';
import "moment-timezone";
import "moment-duration-format";
import Icon from '@mdi/react'
import { Grid } from "@material-ui/core";
import { mdiWeatherNight } from '@mdi/js';
import { Spring } from 'react-spring/renderprops';
import DisplaySleepTime from "../DisplaySleepTime";

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

    if (this.state.startDate == null) {
      this.setState({
        isTimeValid: false
      });
    } else {
      this.setState({
        isClicked: false
      });
    }
  };

  render() {
    let isClicked = this.state.isClicked;
    let isTimeValid = this.state.isTimeValid;
    const today = new Date();
    const buttonStyle = {
      textDecoration: 'none',
      alignSelf: 'center',
      letterSpacing: '0.1rem',
      fontFamily: 'isotonic',
      fontSize: '12px',
      margin: '10px',
      paddingLeft: '20px',
      paddingRight: '20px',
      backgroundImage: 'radial-gradient(circle at 12.3% 19.3%, rgb(94, 104, 226) 0%, rgb(166, 171, 241) 100.2%)'
    }

    return (
      <React.Fragment>
         
        <Spring
          from={{ opacity: 0}}
          to={{ opacity: 1}}
        >
          { props => (
            <div style={props}>
              <form onSubmit={this.handleSubmit}>
              <DisplaySleepTime/>
               <div className="fixedHeightPaper">
            <Grid container spacing={8} alignItems="center" justify="center" alignContent="center">
              <Grid item> 
                <Icon path={mdiWeatherNight}
                      color="#132a9c"
                      size={1.2}>
                      </Icon>
              </Grid>
              <Grid item>
                <div className="SetGoalDatePlaceHolder">
                  Set your Sleep time
                </div>
              </Grid>
            </Grid>
            <div className="centerStuff">
              <span className="subDescription">
              What Time Do You<br></br>
               Go to Sleep Tonigh?
                </span>
              <label>
                {isTimeValid ? (
                  <div className="redman"> &nbsp; </div>
                ) : (
                  <div className="redman">Uh oh. please select the time!</div>
                )}
               
              </label>
       
              <DatePicker
                  className="DatePickerCustomStyle"
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
      
              <br/>
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
            </div>
          </form>
            </div>
          ) }
          </Spring>  
        
          {/*<AfterSetSleepTime SleepTime={this.state.startDate} />**/}
        )}
      </React.Fragment>
    );
  }
}
