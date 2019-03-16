import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import "moment-timezone";
import "moment-duration-format";
import { BeforeSetSleepTime } from "./BeforeSetSleepTime";
import { Grid, Icon } from "@material-ui/core";
import { useSpring, animated } from 'react-spring'
import Fab from '@material-ui/core/Fab';
import { Spring } from 'react-spring/renderprops';
export class AfterSetSleepTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      sleepTime: props.SleepTime
    };
    this.now = moment(new Date());
    this.expiration = moment(this.state.sleepTime);

    console.log("value of this.expiration " + this.expiration);

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
    this.expiration = moment(this.state.sleepTime);

    // get the difference between the moments
    this.diff = this.expiration.diff(this.now);
    //express as a duration
    this.diffDuration = moment.duration(this.diff);
  }

  handleSubmit = e => {
    console.log(moment)
    e.preventDefault();
    this.setState({
      isClicked: true
    });
  };

  
  render() {

    
    let isClicked = this.state.isClicked;
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
        {isClicked ? (
         <BeforeSetSleepTime/>
         
        ) : (

          <Spring
          from={{ opacity: 0}}
          to={{ opacity: 1}}

        >
          { props => (
                      <div style={props}>
                      
                      <form onSubmit={this.handleSubmit}>
            <div className="fixedHeightPaper">
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
            Remaining Time of today
            </div>
          </Grid>
      </Grid>
      <div className="centerStuff">
             <span className="subDescription">Good Luck! <br/>
             Make today count.
            </span>
      </div>

          <div className="timeSuperSet">
            {this.diffDuration.hours()}
            <sub className="timeSubset">HRS</sub>
            {this.diffDuration.minutes()}
            <sub className="timeSubset">MIN</sub>
            {this.diffDuration.seconds()}
            <sub className="timeSubset">SEC</sub>
          </div>
          <div className="centerStuff">
          <Fab
              style={buttonStyle}
          variant="extended"
          size="small"
          color="primary"
          aria-label="Add"
          className="btnMargin"
          type="submit"
        >
            reset
        </Fab>
          </div>
          </div>
          </form>
                      
                      </div>

          )}
          </Spring>

        )}
      </React.Fragment>
    );
  }
}
