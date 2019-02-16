import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "../_actions";

import moment from "moment";
import "moment-timezone";
import "moment-duration-format";

import { Button, Card, Row, Col, Icon } from "react-materialize";
import M from "materialize-css";

import { PomodoroTimer } from "../_components/PomodoroTimer/pomodoroTimer";
import { SetGoalDateView } from "../_components/GoalDate/SetGoalDateView";
import { PreWakeUpTime } from "../_components/WakeUpTime/PreWakeUpTime";

class HomePage extends React.Component {
  componentDidMount() {
    this.props.dispatch(userActions.getAll());
  }

  handleDeleteUser(id) {
    return e => this.props.dispatch(userActions.delete(id));
  }

  render() {
    const clock = document.getElementById("clock");
    const rows = [];

    const { user, users } = this.props;

    const wakeUpTime = "2019-01-19T07:00-0800";
    const sleepTime = "2019-01-18T22:00-0800";

    const startDay = "2018-10-10";
    const date = new Date();
    const moment = require("moment");

    const goal = "2019-03-01";

    const goalFormatted = moment(goal).format("LL");

    let samplezz = moment(date, "Days").diff(goal);

    let remainingDays = Math.abs(moment(date, "days").diff(goal, "days")) + 1;
    let durationSince =
      Math.abs(moment(date, "days").diff(startDay, "days")) + 1;

    return (
      <div className="wrapper">
        <div className="livedaze_pre_headline">
          View 0 : Default/First User Login <br />
          Date Picker : https://www.npmjs.com/package/react-datepicker
        </div>

        <div className="row flex">
          {/**Daily To do List **/}
          <div className="col l4 s12" />

          {/**Wake Up Time **/}
          <div className="col l4 s12">
            <div className="card-panel livedazeGrey">
              <span className="white-text">
                <PreWakeUpTime />
              </span>
            </div>
          </div>

          <div className="col l4 s12">
            <PomodoroTimer />
          </div>
        </div>

        <div className="livedaze_pre_headline">
          View #2 : After User Adds value
        </div>

        <div className="row">
          <div className="col col l4 s12 ">
            <div className="card-panel livedazeGrey">
              <span className="white-text" />
            </div>
          </div>
          <div className="col l4 s12">
            <div className="card-panel livedazeGrey">
              <span className="white-text">
                <SetGoalDateView />
              </span>
            </div>
          </div>

          <div className="col l4 s12">
            <div className="card-panel livedazeGrey">
              <span className="white-text" />
            </div>
          </div>
        </div>

        <script type="text/javascript" src="js/materialize.min.js" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return { user, users };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
