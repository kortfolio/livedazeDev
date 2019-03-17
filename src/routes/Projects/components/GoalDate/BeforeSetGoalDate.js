import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Icon from "@mdi/react";
import { mdiCrown } from "@mdi/js";
import Fab from "@material-ui/core/Fab";
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
            <Grid container spacing={8} alignItems="center" justify="center" alignContent="center">
              <Grid item>
                <Icon
                  path={mdiCrown}
                  size={1}
                  horizontal
                  vertical
                  rotate={180}
                  color="grey"
                />
              </Grid>
              <Grid item>
                <div className="SetGoalDatePlaceHolder">Set your D DAY</div>
              </Grid>
            </Grid>
            <div className="centerStuff">
              <span className="subDescription">
                Set the day that you <br />
                would like to count from today.
              </span>
            </div>
            <div className="redman">&nbsp;</div>
            <div className="centerStuff">
              <label>
                <DatePicker
                  className="DatePickerCustomStyle"
                  fixedHeight
                  withPortal
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  minDate={new Date()}
                  placeholderText="0"
                  shouldCloseOnSelect={true}
           
                />
              </label>
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
        ) : (
          <AfterSetGoalDate newDate={this.state.startDate} />
        )}
      </React.Fragment>
    );
  }
}
