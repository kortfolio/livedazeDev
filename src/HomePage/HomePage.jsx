import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "../_actions";

import Moment from "react-moment";
import "moment-timezone";
import "moment-duration-format";
import moment from "moment";

import { Button, Card, Row, Col, Icon } from "react-materialize";
import M from "materialize-css";

import { PomodoroTimer } from "../_components/pomodoroTimer";
import { WakeUpTime } from "../_components/WakeUpTime";
import { DailyToDo } from "../_components/DailyToDo";
class WorkEndTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      userWorkEndTime: "",
      list: []
    };
    this.now = moment(new Date());
    this.expiration = moment("2019-02-05T19:00-0800");
    // get the difference between the moments
    this.diff = this.expiration.diff(this.now);
    //express as a duration
    this.diffDuration = moment.duration(this.diff);
  }

  tick() {
    this.setState({ date: new Date() });
    this.now = moment(new Date());
    this.expiration = moment("2019-02-05T19:00-0800");

    // get the difference between the moments
    this.diff = this.expiration.diff(this.now);
    //express as a duration
    this.diffDuration = moment.duration(this.diff);
  }

  changeUserWorkEndTime(input) {
    this.setState({
      userWorkEndTime: input
    });
  }

  addToList(input) {
    //Make a copy of this.state.list instaed of directly accesing list array.
    let listArray = this.state.list;
    console.log("value of listArray in HomePage.jsx: " + listArray + "--");

    listArray.push(input);
    console.log("value of input in HomePage.jsx: " + input + "--");

    this.setState({
      list: listArray,
      userWorkEndTime: "",
      showMe: true
    });
  }

  operation() {
    this.setState({
      showMe: !this.state.showMe
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);

    console.log("below is the value of M??");
    console.log(M);
    M.AutoInit();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  //            {$('#timepicker1').timepicker();}

  render() {
    return (
      <div>
        <div className="livedaze_pre_headline">
          This is the option selector integrated with Materialized CSS JQuery
        </div>

        <script src="https://code.jquery.com/jquery-2.1.1.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js" />


        <div className="livedaze_pre_headline">Primitive Time picker</div>
        <div className="work-end-time">
          <input
            type="time"
            id="appt"
            name="appt"
            min="0:00"
            max="24:00"
            required
            onChange={e => this.changeUserWorkEndTime(e.target.value)}
            value={this.state.userWorkEndTime}
            name="form-control"
          />
          <button
            onClick={() => this.addToList(this.state.userWorkEndTime)}
            className="btn btn-light"
          >
            it is working!
                      </button>
        </div>
        <ul>
          {this.state.list.map(val => (
            <li>{val}</li>
          ))}
        </ul>

        {/*<div className="livedaze_TabTitle">YOU WILL GO HOME IN</div>*/}
        {/*<h4>{this.diffDuration.hours()}HR: {this.diffDuration.minutes()}MIN: {this.diffDuration.seconds()}SEC</h4>*/}
    </div>
    );
  }
}

class SinceWakeUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };

    this.now = moment(new Date());
    this.expiration = moment("2019-02-05T06:00-0800");

    // get the difference between the moments
    this.diff = this.expiration.diff(this.now);

    //express as a duration
    this.diffDuration = moment.duration(this.diff);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
    this.now = moment(new Date());
    this.expiration = moment("2019-02-05T06:00-0800");

    // get the difference between the moments
    this.diff = this.now.diff(this.expiration);

    //express as a duration
    this.diffDuration = moment.duration(this.diff);
  }

  render() {
    return (
      <div>
        <div className="livedaze_TabTitle">IT's BEEN</div>
        <div className="timeSuperSet">
          {this.diffDuration.hours()}
          <sub className="timeSubset">HRS</sub>
          {this.diffDuration.minutes()}
          <sub className="timeSubset">MIN</sub>
          {this.diffDuration.seconds()}
          <sub className="timeSubset">SEC</sub>
        </div>
        <div className="livedaze_TabTitle">SINCE YOU WAKE UP</div>
      </div>
    );
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };

    this.now = moment(new Date());

    this.expiration = moment("2019-02-05T22:00-0800");

    // get the difference between the moments
    this.diff = this.now.diff(this.expiration);

    //express as a duration
    this.diffDuration = moment.duration(this.diff);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
    this.now = moment(new Date());
    this.expiration = moment("2019-02-05T22:00-0800");

    // get the difference between the moments
    this.diff = this.expiration.diff(this.now);

    //express as a duration
    this.diffDuration = moment.duration(this.diff);
  }

  render() {
    return (
      <div className="timeSuperSet">
        {this.diffDuration.hours()}
        <sub className="timeSubset">HRS</sub>
        {this.diffDuration.minutes()}
        <sub className="timeSubset">MIN</sub>
        {this.diffDuration.seconds()}
        <sub className="timeSubset">SEC</sub>
      </div>
    );
  }
}

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
          View 0 : Default/First User Login
        </div>

        <div className="row flex">
              <div className="col l4 s12">

<DailyToDo/>
          </div>
              <div className="col l4 s12">
                  <WakeUpTime/>
          </div>
                <div className="col l4 s12">
                <PomodoroTimer/>
          </div>
        </div>
        <div className="livedaze_pre_headline">
          View #2 : After User Adds value
        </div>
        <div className="row">
          <div className="col col l4 s12 ">
            <div className="card-panel livedazeGrey">
              <span className="white-text">
                <div className="livedaze_TabTitle">My D-day</div>
                <div className="livedaze_daysRemaining">
                  {remainingDays}
                  <span className="daysLeft">
                    days
                    <br />
                  </span>
                </div>
                <div className="goalDate">{goalFormatted}</div>
                <div>
                  It’s been {durationSince}
                  days since you started.
                </div>
              </span>
            </div>
          </div>
          <div className="col l4 s12">
            <div className="card-panel livedazeGrey">
              <span className="white-text">
                <SinceWakeUp />
              </span>
            </div>
          </div>
          <div className="col l4 s12">
            <div className="card-panel livedazeGrey">
              <span className="white-text">
                <div className="card-panel livedazeGrey">
                  <span className="white-text">
                    <span className="livedazeGreen">
                      Hey mark, how’s your progress?
                    </span>
                    <form action="#">
                      <p>
                        <label>
                          <input name="group1" type="radio" />
                          <span>Great. i am very focused and productive.</span>
                        </label>
                      </p>
                      <p>
                        <label>
                          <input name="group1" type="radio" />
                          <span>
                            IT’s FINE. I AM FOCUSING BUT I AM NOT REALLY SURE.
                          </span>
                        </label>
                      </p>
                      <p>
                        <label>
                          <input name="group1" type="radio" />
                          <span>I hate doing this. literally.</span>
                        </label>
                      </p>
                      <p>
                        <label>
                          <input name="group1" type="radio" />
                          <span>
                            YOLO! I DIDN’T DO ANYTHING. I WAS JUST WATCHING
                            YOUTUBE.
                          </span>
                        </label>
                      </p>
                    </form>

                    <button
                      className="btn waves-effect waves-light"
                      type="submit"
                      name="action"
                    >
                      Submit
                    </button>
                  </span>
                </div>
              </span>
            </div>
          </div>
        </div>

        <h4>----------------------------------</h4>
        <h4>Hi {user.firstName}!</h4>
        <p>Welcome to livedaze.</p>

        <h3>All registered users:</h3>
        {users.loading && <em>Loading users...</em>}
        {users.error && (
          <span className="text-danger">ERROR: {users.error}</span>
        )}
        {users.items && (
          <ul>
            {users.items.map((user, index) => (
              <li key={user.id}>
                {user.firstName + " " + user.lastName}
                {user.deleting ? (
                  <em>- Deleting...</em>
                ) : user.deleteError ? (
                  <span className="text-danger">
                    - ERROR: {user.deleteError}
                  </span>
                ) : (
                  <span>
                    -<a onClick={this.handleDeleteUser(user.id)}>Delete</a>
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
        <p>
          <Link to="/login">Logout</Link>
        </p>
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
